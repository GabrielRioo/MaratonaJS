// (auth) Controller de Autenticação.
const express = require('express');

// nao precisa usar o app.get, podendo criar novas rotas.
const router = express.Router();

router.get('/sign-in', (req, res) => {
    return res.json('Sign in');
})

router.get('/sign-up', (req, res) => {
    return res.json('Sign-up');
})

//exportar
module.exports = router;