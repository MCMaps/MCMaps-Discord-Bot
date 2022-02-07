const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("MCMaps Official Links")
    .setURL("https://mcmaps.net/")
    .setColor("#2f3136")
    .addFields(
        {
           name: "Main Site",
           value: "https://mcmaps.net/"
        },
        {
           name: "Twitter",
           value: "https://twitter.com/mcmapsnet/"
        },
        {
           name: "Discord",
           value: "https://discord.gg/mcmaps/"
        },
        {
           name: "Reddit",
           value: "https://reddit.com/r/mcmaps/"
        },
        {
           name: "Instagram",
           value: "https://instagram.com/mcmapsnet/"
        }
    )
    .setFooter("Contact Email: support@mcmaps.net")
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"info"
}