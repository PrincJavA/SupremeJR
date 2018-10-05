const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(":no_good::skin-tone-1:  **|** Sem permissão!").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
    if(message.mentions.users.size < 1) return message.reply(':x: **|** Errado, use `-warn <@usuario> <motivo>`')
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "não foi informado.";

    const warnmsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Warn`)
        .setDescription(`Foi avisado no discord **${message.guild.name}**!`)
        .setColor("#04835a")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()


    const warn = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Warn`)
        .setColor("#04835a")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()

    if(message.guild.channels.find("name", "⛔│calabouço")){
        let guild = message.guild.channels.find("name", "⛔│calabouço");
        guild.send(warn).catch(O_o=>{});
        member.send(warnmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: **|** ${message.author} usuário avisado com sucesso!`)
    } else {
        message.channel.send(warn).catch(O_o=>{});
        member.send(warnmsg).catch(O_o=>{});
    }
}
