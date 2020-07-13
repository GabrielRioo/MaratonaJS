// (auth) Controller de Autenticação.
const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

// nao precisa usar o app.get, podendo criar novas rotas.
const router = express.Router();

const saltRounds = 10;

// /auth/sign-in
router.get('/sign-in', (req, res) => {
    return res.json('Sign in');
})

// /auth/sign-up
router.get('/sign-up', async (req, res) => {

    const { email, password } = req.body;

    // Verificar se o email nao existe no banco
    const account = await Account.findOne({ where: { email } });
    if (account) return res.json('Account already exists');

    // salt - criptografa normalmente mas mistura com alguma outra string definida
    // ex: const salt = 'sdf2f23tjbgdi'
    // rounds - quantas vezes vai rodar o metodo de criptografia
    const hash = bcrypt.hashSync(password, saltRounds);

    // Cria uma nova conta no Banco de dados.
    const newAccount = await Account.create({ email, password: hash });


    return res.json({newAccount});
})

//exportar
module.exports = router;