![GitHub Logo](/Assets/SmdbJs.png)







[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)






# Simple-Modular-Discord-Bot.JS
Recursos simples para criação de Discord Bot 



Sistema super simples para criação de bots para discord com agregação modular de novos elementos 





## Instalação

Use os arquivos do [discord.Js ](https://discord.js.org/#/) para poder iniciar seu projeto.


```js
npm install discord.js
```



## Main do bot ou a INDEX.JS
E o arquivo fonte do bot onde o bot vai rodar!

```js
//Express app
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online
//Express app

const Discord = require("discord.js"); //Conexão com a biblioteca Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos



//Zona de eventos 
//Eventos novos são aplicados aqui!



client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
```



## Token com proteção
E bem simples crie um ```.env``` dentro da pasta do seu bot. Dentro do dot env escreva o seguinte codigo
```env
TOKEN=SuaToken


```





## Contribuições
Contribua com seus codigos contribua com seus comandos este codigo e 100% open source 
e permitido o uso comercial e não é nessesario dar creditos!

Por favor se você tiver um codigo e usar esta base por favor contribua conosco enviando seu codigo
para este repositorio. 

## Licença
[MIT](https://choosealicense.com/licenses/mit/)

