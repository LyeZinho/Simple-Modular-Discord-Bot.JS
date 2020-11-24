# Simple-Modular-Discord-Bot.JS
Framework simples para criação de Discord Bot 



Sistema super simples para criação de bots para discord com agregação modular de novos elementos 





## Installation

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


/*              Area designada para os eventos

             |Este espaço e onde voçe pode aplicar seus eventos
             v
           
           
           
           
           
           
           |Login do cliente
           v         

*/
client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
