const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Aandeel's Secret Message")
        .setURL("https://youtu.be/w0AOGeqOnFY")
        .setThumbnail("https://media.discordapp.net/attachments/784181125471535115/906235027883434054/IMG_6223.png")
        .setColor("#00FF00")
        .addFields(
        {
            name: "Shrek is love",
            value: "Shrek is life"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Music to my earz")
      .setURL("https://youtu.be/ioS4733ryFQ")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"120703"
}