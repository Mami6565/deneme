const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Koruma Komutlarım`)
.setDescription(`**\`Koruma\`**

» \`${prefix}anti-raid\`: **Sunucuyu Patlamadan Korur**
» \`${prefix}kanal-koruma\`: **Kanal Koruma Açılır**
» \`${prefix}rol-koruma\`: **Rol Koruma Açılır**
» \`${prefix}reklam\`: **Reklam Engeller.**
» \`${prefix}küfür\`: **Küfür Engel Açar**
» \`${prefix}capslock-engel\`: **Caps Lock Engel Açar** `)


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
  name: "koruma",
  description: 'koruma',
  usage: 'koruma'
};