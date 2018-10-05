const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.reply(`Enviei para você no privado, Olhe suas mensagens diretas!`).then(msg => msg.delete(6000));
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`Salve ${message.author.username}, tudo bem com vc? Eu estou muito bem me chamo Supreme veja algumas coisas sobre min abaixo.
    \n :desktop: Meu criador é: <@479441641644490780>
    \n :inbox_tray: Entre no meu servidor [Clique aqui](https://discord.gg/9j8xgHg)!
    \n\`Selecione alguma Categoria para ver os meus Comandos.\`
    \n🔩 **»** Comandos de Moderação
    \n📋 **»** Outros comandos
    \n🤝 **»** Parceria`)
    message.member.send(msg1).then(msg=> {
        msg.react("🔩").then(r => {
            msg.react("📋")
                msg.react("🤝");

            const comandos = (reaction, user) => reaction.emoji.name === '🔩' && user.id === message.author.id;
            const geral = (reaction, user) => reaction.emoji.name === "📋" && user.id === message.author.id;
            const parceria = (reaction, user) => reaction.emoji.name === "🤝" && user.id === message.author.id;
            const eqp = msg.createReactionCollector(comandos, { time: 60000});
            const grl = msg.createReactionCollector(geral, { time: 60000});
            const prc = msg.createReactionCollector(parceria, { time: 60000});

            eqp.on('collect', r=> {
                const embed = new Discord.RichEmbed()
                .setAuthor("🔩 Comandos de Moderação")
                .setColor('RANDOM')
                .setDescription(`**-ban** \`<@user>\` \`<motivo>\` - Use esse comando para banir um membro do Servidor.
                \n**-kick** \`<@user>\` \`<motivo>\` - Use esse comando para expulsar um membro do Servidor.
                \n**-anuncio** \`<mensagem do anúncio>\` - Para anúnciar algo de novo no servidor.
                \n**-limpar** \`<quantia>\` - Para você limpar o chat.
                \n**-votacao** \`<msg>\` - Para você abrir uma votação.
                \n**-say** \`<msg>\` - Irá mandar mensagens usando o Bot.
                \n**-att** \`<msg>\` - Você ira mandar alguma atualização do servidor com esse comando.
                \n**-mute** \`<@user>\` \`<motivo>\` - Irá mutar o usuário mencionado.
                \n**-unmute** \`<@user>\` - Irá desmutar o usuário mencionado.
                \n**-aviso** \`<@user>\` \`<aviso>\` - Para avisar algum usuário que não respeitou as regras. (comando em criação).
                \n**-chat** \`<on>\` ou \`<off>\` - Para mutar o chat, utilize **h!chat on** ou **h!chat off**.
                \n**-warn** \`<@user>\` \`<motivo>\` - Para avisar algum usuário que não obedeceu as regras.`);
                message.member.send({embed: embed}).then(a=>a.delete(15000));
            })
            grl.on('collect', r=>{
                const glr = new Discord.RichEmbed()
                .setAuthor("📋 Outros comandos")
                .setColor('RANDOM')
                .setDescription(`**-ajuda** - Onde mostra todos os comandos do bot.
                \n**-info** - Para ver as minhas informações.
                \n**-avatar** - Para você baixar seu avatar.
                \n**-avatar** \`<@user>\` - Para você baixar o avatar do usuário mencionado.
                \n**-serverinfo** - Para ver as informações do seu servidor.`)
                message.author.send({ embed: glr }).then(a=>a.delete(15000));
            })
                        prc.on('collect', r=>{
                const prc = new Discord.RichEmbed()
                .setAuthor("🤝 Parceria")
                .setColor('RANDOM')
                .addField("Você está querendo uma parceria comigo?","Para ser meu parcerio basta você sempre estar ativo em meu servidor.")
                .addField("Benefícios","Você pode ter minha versão PRO, que é apenas para parceiros. E também ira receber tag especial.")
                message.author.send({ embed: prc}).then(a=>a.delete(15000));
            })
        })
    })
}
//
module.exports.help = {
    name: "ajuda"
}
