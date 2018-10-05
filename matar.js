const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

       
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('Você precisa mencionar alguém para matar!');
    let gifs = ['https://cdn.discordapp.com/attachments/466434032729587731/496114588761194526/negan.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} matou o(a) ${user.username}`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#f2f1f2')
        .setTimestamp()
        message.channel.send(embed);
     }
