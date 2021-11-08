const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("FingerMaps")
        .setURL("https://www.mcmaps.net/verified/fingermaps/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/FingerMapsLogoNewCircle.png")
        .setColor("#d7e1e1")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/fingermap/s"
        },
        {
            name: "Website:",
            value: "https://www.fingermaps.net/"
        },
        {
            name: "Discord Server:",
            value: "https://discord.gg/8emV2xf/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/fingermaps/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"fingermaps"
}