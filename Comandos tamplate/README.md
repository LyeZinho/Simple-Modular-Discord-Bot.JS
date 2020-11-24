# Comandos dinamicos ou modulares

Como era previsto por o codigo ser modular ou dinamico
e extrememamente simples criar um comando


### 1-   Crie um evento na sua index.js com o seguinte codigo ###

```javascript
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});
```

### 2-   Crie uma pasta no ficheiro do seu bot com o nome de **commands**  ###



Seus comandos serão adcionados dentro desta pasta


### 3- Cole seu ficheiro dentro da pasta comando ###


```javascript
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

/*
Seu comando vai ser colocado aqui amenos que ele seja complexo a ponto de nessecitar de um evento,
você não vai nessecitar nunca editar sua index, este sistema dinamico de criação de comandos 
pode facilitar na organização do seu codigo e na criação de comandos novos. este sistema e 
extremamente simples NOTA usem o tamplate para aprimorar seus codigos e use a biblioteca 
do Discord dot Js para criação de comandos novos caso crie envie neste repositorio para poder
contribuir com o projeto!
*/

    
};
```

### 4- Pronto seu comando foi criado ###
