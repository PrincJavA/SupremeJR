const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('-');
const fs = require('fs');

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js');
    gameloop.run(client);
})

client.on("guildCreate", guild => {
	if(guild.id === "1" || guild.id === "2"){
	}else{
		const entrei = new Discord.RichEmbed()
			.setAuthor(`${guild.name} | Adicionado`)
			.setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
			.addField("**Membros**", `Com **${guild.memberCount - guild.members.filter(m=>m.user.bot).size}** membro(s) e **${guild.members.filter(m=>m.user.bot).size}** bot(s)`)
			.addField("**Dono**", `**${guild.owner.user.tag}** (ID: ${guild.owner.id})`)
			.setColor("#ff0000")
			.setFooter(`No momento estou em ${client.guilds.size} servidores!`)

		client.channels.get("470704046655930379").send(entrei);
		const channel = client.channels.get("470704131376414732");
    channel.setName(`💻 | SERVIDORES: ${client.guilds.size}`)
    const membros = client.channels.get("470705090106359848");
    membros.setName(`👤 | MEMBROS: ${client.users.size}`)
		const adms = guild.members.filter(r => r.hasPermission('MANAGE_GUILD')).map(pessoa => `${pessoa.id}`)
    		for(var c in adms){
        		const adm = guild.members.get(adms[c]);
        		adm.send(`Olá ${adm}, tudo bem?`).catch(O_o=>{});
    		}
	}
});

client.on('message', message =>{
	if(message.content == '<@492465288814788618>'){
	  message.channel.send(`Salve ${message.author}, suave? Eu to deboas, quer saber mais sobre min? **s!botinfo** Precisa de ajuda? **s!ajuda**, Need help? **s! help**`)
    }
  if(message.content == 'srbatata'){
      message.channel.send(`Como ele todo dia, dlç`)
      }
  if(message.content == 'groolt'){
      message.channel.send(`esse tal de Groolt é mais burro que uma arvore, não sabe nem programar em js`)
      }
 if(message.content == 'supreme'){
      message.channel.send('Esse lixu escravisa meu pai')
      }
  if(message.content == 'criador'){
      message.channel.send('**Fui Criado e Desenvolvido por <@479441641644490780>.** (`CASO QUERIA SABER MAIS SOBRE MIN USE -INFO`)')
      }
  if(message.content.startsWith('-status')){
        let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
        let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;

        let statusembed = new Discord.RichEmbed()
        .addField('Membros', `**Online:** ${MembrosOnline} | **Ausente:** ${MembrosAusente} | **Ocupado:** ${MembrosOcupado} | **Offline:** ${MembrosOffline} `) ;

        message.channel.send(statusembed);
    }
});

client.on("guildMemberAdd", function(member) {
	let role = member.guild.roles.find("name", "[👤] Membros ✠");
	member.addRole(role).catch(console.error);
});

client.on('guildMemberAdd', member => {
  const bemvindo = member.guild.channels.find('name', '🤙🏻entrada')

  var canalentradaesaida = new Discord.RichEmbed()
    .setColor('00FF00')
    .setAuthor(member.user.tag + '', member.user.displayAvatarURL)
    .setDescription(`Salve Brow ${member.user.tag} Seja Bem-Vindo!`, )
    .setFooter(`Entrou`)
    .setTimestamp()
    return bemvindo.send(canalentradaesaida);
});
client.on('guildMemberRemove', member => {
  const canalsaiu = member.guild.channels.find('name', '👋🏻saida')

  var canalentradaesaida = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setAuthor(member.user.tag + '', member.user.displayAvatarURL)
    .setDescription(`:cry: Que triste o ${member.user.tag} saiu da nossa fortaleza`)
    .setFooter(`Saiu`)
    .setTimestamp()
    return canalsaiu.send(canalentradaesaida);
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    message.channel.send("Este Comando Não Existe.").then(msg => msg.delete(4000));
  }

});

client.login(process.env.BOT_TOKEN)
console.log("Logado!");
