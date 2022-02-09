const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("MrKisiel")
        .setURL("https://www.mcmaps.net/verified/mrkisiel/")
        .setThumbnail("https://lirp.cdn-website.com/aa7397ec/dms3rep/multi/opt/Untitled-640w.png")
        .setColor("#2f3136")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/mrkisiel/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/kisielmr/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/mrkisiel/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"mrkisiel"
}