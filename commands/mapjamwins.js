const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Map Jam Winners")
        .setURL("https://mcmaps.net/map-jam")
        .setColor("#2f3136")
        .addFields(
        {
            name: "February - 2021",
            value: ":crown: TheblueMan003: The Infinity Room"
        },{
            name: "July - 2021",
            value: ":crown: Nonoréo & Silvathor: Beyond Dimension"
        },{
            name: "January - 2022",
            value: ":crown: TheblueMan003 & Benjamin874: Gravitational Anomaly"
        },
        )

message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"mapjamwins"
}