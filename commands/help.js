const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
        .setTitle("Help menu:")
        .setThumbnail("https://cdn.discordapp.com/avatars/785695216412786738/01e61fe6b7aaf78ea3c7ac90eab29af3.webp")
        .setColor("#2f3136")
        .addField("Commands:", "**-help** - Shows this menu\n**-mcmaps** = Displays link to mcmaps website\n**-info** = Displays All Relative Links\n**-botinfo** = Display bot info\n**-mapjam** = Display upcoming map jams\n**-mapjamwins** = Display winners for MCMaps' Jams\n**-servericon** = Summon Current Discord Server Icon\n**-suggestedservers** = Displays a list of suggested discord servers\n**-aj** = Discord Server and Docs for Animated Java\n**-mcb** = Discord Server and Docs for MC-Build")
        .addField("Verified Map Makers:", "**-fingermaps** = FingerMaps' Verified Info\n**-brickmasons** = The Brickmasons' Verified Info\n**-theblueman003** = TheblueMan003's Verified Info\n**-deuxiemecarlin** = DeuxiemeCarlin's Verified Info\n**-jevin** = Jevin's Verified Info\n**-thepeopleonearth** = The People On Earth's Verified Info\n**-teamsyllica** = Team Syllica's Verified Info\n**-mrkisiel** = MrKisiel's Verified Info")
message.channel.send({embed: sayEmbed});
}

module.exports.help = {
  name:"help"
}