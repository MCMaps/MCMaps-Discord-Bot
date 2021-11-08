const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("The Brickmasons")
        .setURL("https://www.mcmaps.net/verified/the-brickmasons/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/unnamed.png")
        .setColor("#d7e1e1")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/the-brickmasons/"
        },
        {
            name: "Website:",
            value: "https://www.brickmasonsmc.com/"
        },
        {
            name: "Discord Server:",
            value: "https://discord.gg/uT8WFnDuVS/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/the-brickmasons/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"brickmasons"
}