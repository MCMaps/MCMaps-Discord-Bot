const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.channel.send("https://discord.gg/mcmaps?event=895109770720186370")
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Map Jam Info")
        .setURL("https://discord.gg/mcmaps?event=895109770720186370")
        .setColor("#e23d3d")
        .addField("Next Jam:", "*Start: <t:1641211200:f> End: <t:1641816000:f>*\n https://www.mcmaps.net/map-jam/")
        .setImage('https://lirp.cdn-website.com/aa7397ec/dms3rep/multi/opt/MAPJAM+Transparentcropped-1920w.png');
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"mapjam"
}