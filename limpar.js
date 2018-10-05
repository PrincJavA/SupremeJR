const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   
   const comousar = new Discord.RichEmbed()
   .setTitle("Comando: h!limpar")
   .setDescription(`Como usar:\n
**Descrição:** Limpar o chat dos servidores.
**Modo de usar:** s!limpar <número>
**Exemplo:** s!limpar <10>`);

   const num = args.join(" ");

   if(!num) return message.channel.send(comousar).then(msg => msg.delete(10000));
   if(isNaN(num) == true) return message.reply(":x: **|** Você só pode usar números de 10 a 100 para limpar o chat.").then(msg => msg.delete(10000));
   if(num < 2) return message.reply(":x: **|** Ops... Você tem que digitar um número maior que 2 para deletar mensagens.").then(msg => msg.delete(8000));
   if(num > 100) return message.reply(":x: **|** Ops... Digite um número mais que 2.").then(msg => msg.delete(8000));
   message.channel.bulkDelete(args[0]).catch(error => message.reply(`mensagens de 2 semanas atrás não podem ser limpas.`));
   
   message.channel.send(`Chat limpado por ${message.author}, limpei **${args[0]}** mensagens!`).then(msg => msg.delete(5000));
   
}
