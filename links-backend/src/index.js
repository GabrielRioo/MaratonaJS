//Inicializa o servidor 
const express = require('express'); 

//importar
const authController = require('./controllers/auth');

//Inicializa essa aplicação
const app = express();

// Mostrar as rotas "novas" e informar para o express
// /auth/sign-in && /auth/sign-up
app.use('/auth', authController);

//Definir uma rota
app.get('/', (req, res) => { //Executa a função quando chegar no endereço.
    return res.json('API running...') //Resposta no formato Json
});

//Escutar todas requisiçoes da porta 3001
app.listen(3001, () => {
    console.log('Listening on port 3001');
});

