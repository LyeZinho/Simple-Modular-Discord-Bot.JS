<p><img src="https://github.com/LyeZinho/Simple-Modular-Discord-Bot.JS/blob/gh-pages/Assets/SmdbJs.png?raw=true" alt="description" width="500" height="500" /></p>







[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)






# Simple-Modular-Discord-Bot.JS
Framework simples para criação de Discord Bot 



Sistema super simples para criação de bots para discord com agregação modular de novos elementos 





## Instalação

Use os arquivos do [discord.Js ](https://discord.js.org/#/) para poder iniciar seu projeto.


```js
pip install discord.js
```



## Main do bot ou a INDEX.JS
E o arquivo fonte do bot onde o bot vai rodar!

```js
/*
Requests para o bot ficar online em qualquer servidor


           |
           v

*/
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 
/*




//Cliente do discord ou literalmente o nucleo do discord

           |
           v
           
*/
const Discord = require("discord.js"); //Importando a biblioteca discord dot JS  
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
/*

              Area designada para os eventos

             |Este espaço e onde voçe pode aplicar seus eventos
             v
           
           
           
           
           
           
           |Login do cliente
           v         

*/
client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
```

## Contribuições
Contribua com seus codigos contribua com seus comandos este codigo e 100% open source 
e permitido o uso comercial e não é nessesario dar creditos!

Por favor se você tiver um codigo e usar esta base por favor contribua conosco enviando seu codigo
para este repositorio. 

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
