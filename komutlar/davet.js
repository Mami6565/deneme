const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Davet Menüsü")
  .setDescription("[__**Botu Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=807311786616684594&permissions=8&scope=bot) \n [__**Destek Sunucusu**__](https://discord.gg/MpwNHeUJz8)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};