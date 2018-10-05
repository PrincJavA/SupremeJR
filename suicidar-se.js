const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

       
    let user = message.mentions.users.first();
    let gifs = ['https://cdn.discordapp.com/attachments/466434032729587731/496117264022765589/1157146_orig.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} se suicidou :cry: `)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#f2f1f2')
        .setTimestamp()
        message.channel.send(embed);
     }
