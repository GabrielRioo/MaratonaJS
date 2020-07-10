//Inicializa o servidor 
const express = require('express'); 

//Inicializa essa aplicação
const app = express();

//Definir uma rota
app.get('/', (req, res) => { //Executa a função quando chegar no endereço.
    return res.json('API running...') //Resposta no formato Json
});

//Escutar todas requisiçoes da porta 3001
app.listen(3001, () => {
    console.log('Listening on port 3001');
});

