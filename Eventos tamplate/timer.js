client.on("ready", () => {
    var content = "Ain";//Pode-se aplicar um embed tambem
 
    var channel = client.guilds.cache
    
        .get("IDdoSeuServer") // Id do Servidor
        .channels.cache.get("IDdoCanalDoServer"); //Id do canal onde a mensagem será enviada
    
    setInterval(function() {
        channel.send(content);
    }, 1000 * 60 * 60 * 1);
    channel.send(content);
})
