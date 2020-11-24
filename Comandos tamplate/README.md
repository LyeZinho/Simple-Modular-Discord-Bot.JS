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



### 3- Cole seu ficheiro dentro da pasta comando ###
