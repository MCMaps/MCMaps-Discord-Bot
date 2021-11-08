const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("TheblueMan003")
        .setURL("https://www.mcmaps.net/verified/theblueman003/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/T70pDWdB_400x400.jpg")
        .setColor("#d7e1e1")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/theblueman003/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/TheblueMan003/"
        },
        {
            name: "Discord Server:",
            value: "https://discord.gg/6MVF7mnZuX/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/theblueman003/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"theblueman003"
}