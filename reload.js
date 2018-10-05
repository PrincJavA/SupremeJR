const Discord = require("discord.js"); 

module.exports.run = async (client, message, args) => { 
message.delete();

if (message.author.id !== '479441641644490780') return message.channel.send(`Você não tem permissão `)
  let cu = args.slice(0).join(' ');
  if (cu.length < 1) return message.reply(`Coloque o nome do comando.`);
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`Comando ${args[0]} não encontrado`);
  }
  message.channel.send(`Comando ${args[0]} reiniciado.`)

  message.channel.send(E) 

}