const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
      .setTitle("MCMaps | Minecraft Maps")
        .setURL('https://mcmaps.net')
        .setDescription('MCMaps is an unofficial fan site where you can find and distribute Minecraft maps!')
        .setThumbnail("https://irp.cdn-website.com/aa7397ec/dms3rep/multi/12png-1920w.png") //nice
        .setColor("#e23d3d") // this is HEX code
        .addFields(
            {
                name: "Twitter:",
                value: "https://twitter.com/mcmapsnet"
            }
        )
        .setFooter("© 2021 All Rights Reserved MCMaps.net | Minecraft was created by Mojang AB. | MCMaps.net is not endorsed or affiliated with Mojang AB.")

      let buttons = new MessageButton()
      .setStyle("url")
      .setLabel("Visit MCMaps.net")
      .setURL("https://www.mcmaps.net/")


message.channel.send({embed: sayEmbed, component: buttons});
}

module.exports.help = {
  name:"mcmaps"
}