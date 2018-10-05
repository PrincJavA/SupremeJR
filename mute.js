const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(":no_good::skin-tone-1:  **|** Sem permissão!").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setTitle("s!mute")
      .setDescription(`Use: s!mute <@user> <motivo>`)
      .setColor("")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "não foi informado.";
  
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
    
    member.addRole(muterole)

    const mutemsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Mutado`)
        .setDescription(`foi mutado no discord **${message.guild.name}**!`)
        .setColor("#dbcd1b")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
     
      
    const mutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Mutado`)
        .setColor("#dbcd1b")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        
    if(message.guild.channels.find("name", "⛔-calabouço")){
        let guild = message.guild.channels.find("name", "⛔-calabouço");   
        guild.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: **|** ${message.author} usuário mutado com sucesso!`)
    } else {
        message.channel.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
    }
}
