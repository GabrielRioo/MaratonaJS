# MaratonaJS

`npm init`
`npm install --save express`

* Como organizar as pastas em projetos express:
   * Por tudo dentro da pasta `src`
   
* `npm install --save nodemon` - reinicializa o servidor automaticamente(sem precisar parar a execução e executar novamente)
   * `npm start` - Inicia o servidor com nodemon
   
* **Sequelize** (banco de dados) - 5.21.10
   * `npm install --save sequelize`
   * `npx sequelize-cli init:models` - cria os models 
   * `npx sequelize-cli init:config` - banco para desenvolvimento, teste, e produçao.
   * `npm install --save dotenv` - cria uma pasta .env para por informaçoes confidenciais do Banco de Dados.
   * `npm install --save mysql2` - driver
   * `npm install --save bcrypt` - criptografar senhas no banco de dados
   
   
---

//Inicializa o servidor <br>
`const express = require('express'); `<br>

//Inicializa essa aplicação<br>
`const app = express();`<br>

//Definir uma rota<br>
`app.get('/', (req, res) => { //Executa a função quando chegar no endereço.`<br>
`    return res.json('API running...') //Resposta no formato Json`<br>
`});`<br>

//Escutar todas requisiçoes da porta 3001 <br>
`app.listen(3001, () => {` <br>
`    console.log('Listening on port 3001');` <br>
`});` <br>


40 min

