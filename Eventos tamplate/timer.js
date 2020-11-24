client.on("ready", () => {
    var content = "Inscreva-se no canal Hyouka";
    var channel = client.guilds.cache
        .get("IDdoSeuServer") // Id do Servidor
        .channels.cache.get("IDdoCanalDoServer"); //Id do canal onde a mensagem será enviada
    setInterval(function() {
        channel.send(content);
    }, 1000 * 60 * 60 * 1);
    channel.send(content);
    console.log("É para se inscrever mesmo! Saco pela.");
})