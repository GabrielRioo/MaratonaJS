//Inicializa o servidor 
const express = require('express');
const db = require('./models');
//executa o request no começo.
const response = require('./middlewares/response');
//importar
const authController = require('./controllers/auth');
//Inicializa essa aplicação
const app = express();


app.use(response);
// recebe os dados em json
app.use(express.json()); 
// pega o body da requisição
app.use(express.urlencoded({ extended: false }));
// Mostrar as rotas "novas" e informar para o express
// /auth/sign-in && /auth/sign-up
app.use('/auth', authController);


//Definir uma rota
app.get('/', (req, res) => { //Executa a função quando chegar no endereço.
    return res.json('API running...') //Resposta no formato Json
});


db.sequelize.sync().then(() => {
    //Escutar todas requisiçoes da porta 3001
    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
});



