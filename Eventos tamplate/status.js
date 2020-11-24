client.on("ready", () => {
    let activities = [
            `Utilize ${config.prefix}help para obter ajuda`,
            `${client.guilds.cache.size} servidores!`,
            `${client.channels.cache.size} canais!`,
            `${client.users.cache.size} usuários!`
        ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 60);
    client.user
        .setStatus("dnd")
        .catch(console.error);
    console.log("Estou Online!")
});