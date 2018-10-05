const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Eu não tenho a permissão `ADMINISTATOR`, então descarte este comando, ou ative!!!!");
  message.delete();
  if(!args[0]){
    const comousar = new Discord.RichEmbed()
        .setTitle("s!att")
        .setDescription(`**Descrição:** Postar alguma atualização do servidor.`);
    message.channel.send({embed: comousar});
    return;
}
  var args = message.content.split(" ").slice(1).join(" ");
  if(!args) return message.reply('Digite **s!att** para saber mais.')
  message.channel.send('@everyone').then(a=>a.delete(1));
    const embed1 = new Discord.RichEmbed()
    .setAuthor('Atualizações', "https://cdn.discordapp.com/attachments/467178630666256398/467184279475060736/8104LoadingEmote.gif")
    .setDescription(":arrows_counterclockwise: **|** " + args)
    .setColor('#00ff2f')
    .setTimestamp()
    message.channel.send({embed: embed1});
}

exports.help = {
    name: "att"
}
