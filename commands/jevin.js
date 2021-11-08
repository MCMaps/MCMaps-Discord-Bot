const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Jevin")
        .setURL("https://www.mcmaps.net/verified/jevin/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/aXx-KEcF_400x400.jpg")
        .setColor("#d7e1e1")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/jevin/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/JevinLevin/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/jevin/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"jevin"
}