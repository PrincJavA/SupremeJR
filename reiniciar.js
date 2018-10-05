const Discord = require("discord.js"); 

module.exports.run = async (client, message, args) => { 
message.delete();

if(message.content === `s!reiniciar`) {
    resetBot(message.channel)
        async function resetBot(channel) {
            channel.send(`Reiniciando...`)
            .then(msg => client.destroy(true))
            .then(() => client.login('NDkyNDY1Mjg4ODE0Nzg4NjE4.DoW0DQ.l5mOg5rmapbPdxpccLc9BtIjf1Y'));
         }

    client.on('ready', () => {
        message.channel.send(`Bot reiniciado com sucesso!`);
    });
}

message.channel.send(E) 

}