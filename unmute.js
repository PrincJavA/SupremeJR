const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`:no_good::skin-tone-1:  **|** Sem permissão!`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
    .setTitle("h!unmute")
    .setDescription(`Use: h!unmute <@user>`)
    .setColor("")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));


  
    let muterole = message.guild.roles.find("name", "Silenciado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Silenciado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    
    member.removeRole(muterole)

    const desmutemsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setDescription(`você foi desmutado do discord **${message.guild.name}**!`)
        .setColor("#506609")
        .setThumbnail(member.user.avatarURL)
        .setTimestamp()
     
      
    const desmutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setColor("#506609")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .setTimestamp()
        
    if(message.guild.channels.find("name", "punidos")){
        let guild = message.guild.channels.find("name", "⛔-calabouço");   
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:stuck_out_tongue_winking_eye: **|** ${message.author} usuário desmutado com sucesso!`)
    } else {
        message.channel.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
    }
}
