client.on("guildMemberAdd", async(member) => {

    let guild = await client.guilds.cache.get("IDdoSeuServidor");
    let channel = await client.channels.cache.get("IDdoCanalDeBoasVindas");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
    if (guild != member.guild) {
        return console.log("Alguem entrou em outro servidor!");
    } else {
        let embed = await new Discord.MessageEmbed()
            .setColor("#7c2ae8")
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle(`${emoji} Boas-vindas ${emoji}`)
            .setImage("https://imgur.com/3vYVlHb.gif")
            .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setFooter("Código de SMDB.JS")
            .setTimestamp();

        channel.send(embed);
    }
});
