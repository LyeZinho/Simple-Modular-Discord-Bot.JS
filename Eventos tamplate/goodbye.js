client.on("guildMemberRemove", async(member) => {

    let guild = await client.guilds.cache.get("IDdoSeuServidor");
    let channel = await client.channels.cache.get("IDdoCanalDeDespedidas");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
    if (guild != member.guild) {
        return console.log("Alguem saiu em outro servidor!");
    } else {
        let embed = await new Discord.MessageEmbed()
            .setColor("#7c2ae8")
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle(`${emoji} Adeus! ${emoji}`)
            .setImage("https://imgur.com/3vYVlHb.gif")
            .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setFooter("Código de SMDB.JS")
            .setTimestamp();

        channel.send(embed);
    }
});
