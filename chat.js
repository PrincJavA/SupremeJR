exports.run = async(client, message, args) => {
  let it = message.content.split(" ").slice(1).join(" ");
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
  if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Adicione a permissão de ADMINISTRADOR para mim!");
  if (!it) {
      message.channel.send(":x: **|** Use: ``s!chat on`` ou ``s!chat off``.");
      return;
  }
  if (it == "on"){
      let role = message.guild.roles.find("name", "@everyone");
      message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
      message.channel.send(`Chat **desmutado** por: ${message.author}`)
      return;
  }
  if (it == "off"){
      let role = message.guild.roles.find("name", "@everyone");
      message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
      message.channel.send(`Chat **mutado** por: <@${message.author.id}>`)
      return;
  }
}

exports.help = {
  name: "chat"
}
