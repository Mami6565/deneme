const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Dragon | :loading: Sayı Yükleniyor.').then(message => {
      var espriler = ['0','1','2','3','4','5','6','7','8','9','10',];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgele-sayı', 'sayı-seç', 'seç-sayı', 'seçbi-sayı'],
  permLevel: 0
};

exports.help = {
  name: 'Rastgele Sayı',
  description: 'Rastgele sayı atar.',
  usage: 'rastgele-sayı'
}; 