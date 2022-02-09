const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Team Syllica")
        .setURL("https://www.mcmaps.net/verified/team-syllica/")
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/3P007YrS_400x400.png")
        .setColor("#2f3136")
        .addFields(
        {
            name: "Verified Page:",
            value: "https://www.mcmaps.net/verified/team-syllica/"
        },
        {
            name: "Twitter:",
            value: "https://twitter.com/Team_Syllica/"
        },
        {
            name: "Discord Server:",
            value: "https://discord.gg/vmpsn78/"
        }
    )

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit Verified Page")
      .setURL("https://www.mcmaps.net/verified/team-syllica/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"teamsyllica"
}