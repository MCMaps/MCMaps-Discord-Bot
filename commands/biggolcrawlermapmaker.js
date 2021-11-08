const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("DeuxiemeCarlin / biggolcrawlermapmaker")
        .setURL("https://www.mcmaps.net/verified/deuxiemecarlin/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/download.png")
        .setColor("#d7e1e1")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/deuxiemecarlin/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/deuxiemeCarlin"
        },{
            name: "Discord Server:",
            value: "https://discord.gg/JyQE9Vr4FH/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/deuxiemecarlin/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"biggolcrawlermapmaker",
}