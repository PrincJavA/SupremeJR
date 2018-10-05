const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRADOR")) return message.reply(":no_good::skin-tone-1: **|** Você não tem permissão!")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Por favor, forneça o usuário correto!")
    let role = args.join(" ").slice(22);

    if (!role) return message.reply("Por favor, forneça a tag!");
    let aRole = message.guild.roles.find(`name`, role);
    if (!aRole) return message.reply(`Não estou conseguindo localizar essa tag!`);

    if (rMember.roles.has(aRole.id)) return message.reply("O usuário já tem essa tag!");
    await (rMember.addRole(aRole.id))
    message.channel.send(":white_check_mark: **|** Tag setada com sucesso!")
    return;
}
