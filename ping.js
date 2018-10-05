const Discord = require("discord.js"); 

module.exports.run = async (client, message, args) => { 
const emoji = client.emojis.find("name", "Carregando")
const m = await message.channel.send(`Ping? ${emoji}`)
message.delete();

let E = new Discord.RichEmbed()
.setTitle("Pong! 🏓") 
.addField("📶 Latência", `${m.createdTimestamp - message.createdTimestamp}ms`, true) 
.addField("💻 API Latência", `${Math.round(client.ping)}ms`, true) 

message.channel.send(E) 

  }
