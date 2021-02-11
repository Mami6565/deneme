const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Logo Komutlarım`)
.setDescription(`**\`Logo\`**

» \`${prefix}roket-logo\`: **Logo Yapar**
» \`${prefix}ejderha-yazı\`: **Logo Yapar**
» \`${prefix}f-logo\`: **Logo Yapar**
`)



.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: 'logo',
  usage: 'logo'
};