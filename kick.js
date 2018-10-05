exports.run = (client,message,args)=>{
  var razão = args.slice(1).join(" ")

  var usuario = message.mentions.users.first();
  if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply(":no_good::skin-tone-1: **|** Sem permissão.")
  if(message.mentions.users.size < 1) return message.reply(':x: **|** Use: `s!kick <@user> <motivo>`')
  if(!message.guild.member(usuario).kickable) return message.reply("Eu não posso kickar essa pessoa!")
  if(razão.length < 1) return message.reply("Você não colocou uma motivo!")

  message.guild.member(usuario).kick()

 var discord = require ('discord.js')

 var embed = new discord.RichEmbed()
 .setTitle(`${usuario.username}#${usuario.discriminator} | Kick`)
 .addField("👮Autor", message.author.username)
 .addField("Usuário:", usuario.username)
 .addField("📋 Motivo:", razão)

 .setColor("RANDOM");

 message.channel.send(embed)
}
