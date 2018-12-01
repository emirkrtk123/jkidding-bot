const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun Olan ${client.user.tag} Sunucuya Giriş Yaptı`);
});

client.on('message', msg => {
  if (msg.content === 'sa')
  {
    msg.reply('as');
  }
  if (msg.content === '!instagram')
  {
    msg.reply('https://www.instagram.com/fortladik/');
  }
  if (msg.content === '!duyurular')
  {
    msg.reply('BOS');
  }
  if (msg.content === '!komutlar')
  {
    msg.reply('!instagram,!duyurular,!komutlar,!yayinci,yayinsaati');
  }
  if (msg.content === '!yayinci')
  {
    msg.reply('@jKidding');
  }
  if (msg.content === '!yayinsaati')
  {
    msg.reply('Suanlik Belli Deil!');
  }




});

client.login('NTE3NDA4MTcwMTE3ODI0NTMz.DuPziA.fbECSfJ5j4IpHKnUZl37RFzM1Zg');
