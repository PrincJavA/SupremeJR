var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setColor("RANDOM")
 .setDescription(`Estou no total em: \n**Canais** ${client.channels.size} \n**Servidores: **${client.guilds.size} \n**Usuarios: **${client.users.size}`)
 .setAuthor("Informações", client.user.avatarURL)
 .setTimestamp()
 .setThumbnail(message.author.avatarURL)

 message.channel.send(embed)
}
