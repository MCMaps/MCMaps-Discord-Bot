const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle("Poll Time!")
    .setDescription(pollDescription)
    .setColor('#e32d2d')
    let msgEmbed = await pollChannel.send(embedPoll)
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')

};

  module.exports.help = {
  name:"createpoll"
}