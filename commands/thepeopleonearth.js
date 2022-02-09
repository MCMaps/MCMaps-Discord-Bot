const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
.setTitle("The People On Earth")
        .setURL("https://www.mcmaps.net/verified/the-people-on-earth/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/3300234_4-6668bae9.webp")
        .setColor("#2f3136")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/the-people-on-earth/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/pplonearth/"
        },{
            name: "Discord Server:",
            value: "https://discord.gg/RcY3eKWptA/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/the-people-on-earth/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"thepeopleonearth"
}