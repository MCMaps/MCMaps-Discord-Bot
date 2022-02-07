const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Animated Java")
        .setURL("https://discord.gg/cd4Rp9kfub")
        .setDescription("For Animated Java Related Questions and Support, Please Refer to the Official Animated Java Server!")
        .setColor("#2f3136")
        .addFields(
        {
            name: "Animated Java:",
            value: "https://discord.gg/cd4Rp9kfub"
        },
        {
            name: "Animated Java Docs:",
            value: "https://animated-java.dev"
        }
    )
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"aj"
}