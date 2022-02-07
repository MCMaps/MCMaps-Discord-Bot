const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("MC-Build")
        .setURL("https://mcbuild.dev")
        .setDescription("For MC-Build Related Questions and Support, Please Refer to the Official MC-Build Server!")
        .setColor("#2f3136")
        .addFields(
        {
            name: "MC-Build Server:",
            value: "https://discord.gg/kpGqTDX"
        },
        {
            name: "MC-Build Docs:",
            value: "https://mcbuild.dev/docs"
        }
    )
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"mcb"
}