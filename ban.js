exports.run = (client,message,args)=>{
    var razão  = message.content.split(" ").slice(2).join(" ");
    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply(":no_good::skin-tone-1: **|** Você não tem permissão.")
     if(message.mentions.users.size < 1) return message.reply(':x: **|** Errado, use `-ban <@usuario> <motivo>`')
    if(!message.guild.member(usuario).bannable) return message.reply("Eu não posso banir essa pessoa!")
    if(!razão) return message.reply("Você não colocou uma motivo!");

    message.guild.member(usuario).ban(7, razão);

   var discord = require ('discord.js')
   if (usuario.id == message.author.id) return;

   var embed = new discord.RichEmbed()
   .setTitle(`${usuario.username}#${usuario.discriminator} | Banido`)
   .addField("👮 Autor Do Banimento", message.author.username)
   .addField("Usuário:", usuario.username)
   .addField("📋 Motivo:", razão)
   .setTimestamp()
   .setColor("RANDOM");
//test
   message.channel.send({ embed : embed});
   usuario.send({ embed : embed }).catch(p => {})
}
