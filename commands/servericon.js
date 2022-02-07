const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
      let sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name}'s Icon`)
      .setImage(message.guild.iconURL({ dynamic: true, size: 512 }))
      .setTimestamp()
      .setColor("#2f3136");

message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"servericon"
}