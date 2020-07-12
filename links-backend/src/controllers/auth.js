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
router.get('/sign-up', async(req, res) => {

    const email = 'gabriel@gmail.com';
    const password = '123456';

    // salt - criptografa normalmente mas mistura com alguma outra string definida
    // ex: const salt = 'sdf2f23tjbgdi'
    // rounds - quantas vezes vai rodar o metodo de criptografia
    const hash = bcrypt.hashSync(password, saltRounds);
    
    //cria a tabela no banco de dados
    const result = await Account.create({ email, password: hash });
    
    
    return res.json(result);
})

//exportar
module.exports = router;