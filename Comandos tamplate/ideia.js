const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    message.delete();
    const content = args.join(" ");

    if (!args[0]) {
        return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
    } else if (content.length > 1000) {
        return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
    } else {
        var canal = message.guild.channels.cache.find(ch => ch.id === "699780010235527278");
        const msg = await canal.send(
            new Discord.MessageEmbed()
            .setColor("#FFFFF1")
            .addField("Autor:", message.author)
            .addField("Conteúdo", content)
            .setFooter("ID do Autor: " + message.author.id)
            .setTimestamp()
        );
        await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

        const emojis = ["✔️", "❎"];

        for (const i in emojis) {
            await msg.react(emojis[i])
        }
    }
}