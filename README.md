# MaratonaJS

`npm init`
`npm install --save express`

* Como organizar as pastas em projetos express:
   * Por tudo dentro da pasta `src`
   
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

