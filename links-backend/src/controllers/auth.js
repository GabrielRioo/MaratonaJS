// (auth) Controller de Autenticação.
const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validators/account');
const { getMessage } = require('../helpers/validator');

// nao precisa usar o app.get, podendo criar novas rotas.
const router = express.Router();

const saltRounds = 10;

// /auth/sign-in
router.get('/sign-in', (req, res) => {
    return res.jsonOK(null);
})

// /auth/sign-up
// passando o validator "accountSignUp" ele funciona como um middleware só pra essa rota
router.get('/sign-up', accountSignUp ,async (req, res) => {

    const { email, password } = req.body;



    // Verificar se o email nao existe no banco
    const account = await Account.findOne({ where: { email } });
    if (account) return res.jsonBadRequest(null, getMessage('account.signup.email.exists'));

    // salt - criptografa normalmente mas mistura com alguma outra string definida
    // ex: const salt = 'sdf2f23tjbgdi'
    // rounds - quantas vezes vai rodar o metodo de criptografia
    const hash = bcrypt.hashSync(password, saltRounds);

    // Cria uma nova conta no Banco de dados.
    const newAccount = await Account.create({ email, password: hash });


    return res.jsonOK(newAccount, getMessage('account.signup.sucess'));
})

//exportar
module.exports = router;