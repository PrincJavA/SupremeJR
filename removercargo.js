const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRADOR")) return message.reply(":no_good::skin-tone-1: **|** Você não tem permissão!")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Mencione o membro que você quer tirar a tag corretamente!")
    let role = args.join(" ").slice(22);

    let aRole = message.guild.roles.find(`name`, role);

    await (rMember.removeRole(aRole.id))
    message.channel.send(":sneezing_face: **|** Tag removida com sucesso!")
    return;
}
