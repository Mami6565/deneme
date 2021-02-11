const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Kayıt Komutlarım`)
.setDescription(`**\`Kayıt\`**

» \`${prefix}kayıt-yardım\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**
» \`${prefix}otorol-ayarla\`: **Sunucuya Girene O Rolu Verir**
» \`${prefix}otorol-sıfırla\`: **Otorolü Sıfırlar**
» \`${prefix}Otorol-mesaj-ayarla\`: **Oto Rol Mesajı Ayarlar**
» \`${prefix}Otorol-mesaj-sıfırla\`: **Oto Rol Mesajı Sıfırlar**` )


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
  name: "kayıt",
  description: 'kayıt',
  usage: 'kayıt'
};