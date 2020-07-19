# MaratonaJS

`npm init`
`npm install --save express`

* Como organizar as pastas em projetos express:
   * Por tudo dentro da pasta `src`
   * Plugin: REST Client
   * **Biblioteca de Atutenticação:** hapi joi
   
* `npm install --save nodemon` - reinicializa o servidor automaticamente(sem precisar parar a execução e executar novamente)
   * `npm start` - Inicia o servidor com nodemon
   
* **Sequelize** (banco de dados) - 5.21.10
   * `npm install --save sequelize`
   * `npx sequelize-cli init:models` - cria os models 
   * `npx sequelize-cli init:config` - banco para desenvolvimento, teste, e produçao.
   * `npm install --save dotenv` - cria uma pasta .env para por informaçoes confidenciais do Banco de Dados.
   * `npm install --save mysql2` - driver
   * `npm install --save bcrypt` - criptografar senhas no banco de dados
   * `npm install --save @hapi/joi` - biblioteca de autenticação
   
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


---

#### Conceitos JavaScript
`<varName>.addEventListener('click', <functionName>);` - Ao clicar. <br>
`<varName>.textContent = 'Jogador 1: ' + <varName>;` - Muda o texto <br>
`ment.createElement('p')` - Cria um novo paragrafo. <br>
`.textContent = ' ' ` - Escreve um texto <br>
`<script src="script.js" defer></script>` - defer - renderiza o HTML sempre que o JS for atingido <br>
Funciona com **scripts externos** <br>
O _"DOMContentLoaded_ funciona com **scripts internos**

#### Eventos:
`<varName>.addEventListener('click', <callFunction>)` - Ouve o clique do mouse <br>

Quando o codigo HTML tiver pronto, tudo q estiver dentro desse metodo, é executado. <br>

```
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```


#### Funções - metodos:
`.toLowerCase()` - poe as letras em minusculo <br>
`.toUpperCase()` - poe as letras em maiuculo <br>
`.replace('G', 'C')` - substitui a primeira letra G por C <br>
`.toFixed(2)` - Mostra um float com 2 casas decimais. <br>
`Math.round(Math.random() * 10)`- Numeros aleatorio entre 0 e 10 <br>
`alert()` - mensagem pop up (apenas ok) <br>
`confirm()` - mensagem pop up (confirmar ou cancelar) <br>
`console.log()` <br>
`console.error()` <br>
`console.warm()` <br>
`console.info()` <br>
```
function multNumbers(x, y) {
  let result = x * y;
  return result
}
multNumbers(7, 5);
```

```
let mult = function(x,y){
  let result = x * y;
  return result
}
mult(2,5);
```

```
let objMult = {
  func: function(x,y);
    let result = x * y;
    return result
}
objMult.func(4,2);
```
**Função aninhada:** tudo da função externa, a interna tem acesso.
```
function myName(val){
  let name = 'Gabriel';
  
  function setName() {
    console.log(name);
  }
  setName();
}
myName(1);
```

**Arrow Functions**
```
let sumArrow = (x,y) => {
  return x + y;
}
sumArrow(3,4)
```

```
let sumArrow = (x,y) => x + y {
}
sumArrow(3,4)
```
















