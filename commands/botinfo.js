const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("MCMaps Discord Bot Info")
    .setURL("https://MCMaps-Bot.aandeel.repl.co/")
    .setColor("2f3136")
    .addFields(
        {
            name: "Bot Creator/Programmer",
            value: "<@312697166764441600>"
        },
        {
           name: "Bot Status Checker",
           value: "https://MCMaps-Bot.aandeel.repl.co"
        }
    )
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"botinfo"
}