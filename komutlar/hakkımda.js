const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Hakkımda Komutlarım`)
.setDescription(`**\`Hakkımda\`**

» \`${prefix}yapımcım\`: **Yapımcımı Gösterir + Kaç Sunucuda Hizmet Verdiğini Gösteriyor**
» \`${prefix}davet\`: **Davet Linkimi Alırsınız**
» \`${prefix}çağır\`: **Sahibimi Çağırıp Yardım İstersin.**
» \`${prefix}bot-öneri\`: **Öneri Sunabilirsiniz**
» \`${prefix}bot-hata\`: **Bottaki Hataları Söylebilirsiniz.**
» \`${prefix}ping\`: **Pingimi Ölçer**`)


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
  name: "hakkımda",
  description: 'hakkımda',
  usage: 'hakkımda'
};