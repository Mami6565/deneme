const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Yapımcım")
  .setDescription("[__**Yapımcım:**__``Muhammed#0008``]() \n [__**Hizmet Verdiğim Sunucu Sayısı :**__``77``]()")
  message.channel.send(davet)
.setImage("https://cdn.discordapp.com/attachments/798632353379516457/801183387737391114/standard_3.gif%22")
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: '',
  usage: ''
};