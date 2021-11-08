const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("MCMaps' Discord Server Suggestions")
        .setURL("https://discord.gg/mcmaps")
        .setThumbnail("https://lirp.cdn-website.com/aa7397ec/dms3rep/multi/opt/logored-1920w.png")
        .setColor("#54469c")
        .addFields(
        {
            name: "Minecraft Commands:",
            value: "https://discord.gg/QAFXFtZ"
        },
        {
            name: "Minecraft Map Testing:",
            value: "https://discord.gg/QRE99eS"
        }
    )
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"suggestedservers"
}