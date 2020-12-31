const Discord = require("discord.js");

//exemplo de um embed


exports.run = async(client, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setColor(`#02F7FF`)
        .setTitle(`Titulo`)
        .setImage('https://cdn.discordapp.com/attachments/794221342177099776/794221360008003584/d74906d39a1964e7d07555e7601b06ad.gif')
        .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
    await message.channel.send(embed);

};
