const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  } else
  if (message.content === 'ayy') {
    message.channel.send('lmao');
  } else
  if (message.content === 'you suck') {
    message.channel.send('well you swallow LMAOOOOOOOOOO');
  } else
  if (message.content === ';roll') {
    var num = Math.floor((Math.random() * 100) + 1);
    message.channel.send(num);
  } else
  if (message.content === ';meme') {
    var num = Math.floor((Math.random() * 10) + 1);
    if (num === 1) {
        message.channel.send('https://cdn.discordapp.com/attachments/377201680371941388/378000930953625611/meme1.jpg');
    } else 
    if (num === 2) {
        message.channel.send('https://cdn.discordapp.com/attachments/371043773507174402/378001855923355650/meme2.jpg');
    } else
    if (num === 3) {
        message.channel.send('https://cdn.discordapp.com/attachments/371043773507174402/378002053538250754/meme3.jpg');
    } else
    if (num === 4) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378002325207515157/meme4.jpg');
    } else
    if (num === 5) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378002594255208452/meme5.png');
    } else
    if (num === 6) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378003013064851456/meme6.png');
    } else
    if (num === 7) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378003167780143105/meme7.png');
    } else
    if (num === 8) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378003470835384321/meme8.jpg');
    } else
    if (num === 9) {
        message.channel.send('https://cdn.discordapp.com/attachments/372105313375092746/378003628029509633/meme9.jpg');
    } else
    if (num === 10) {
        message.channel.send('Dad: Son, whats 9 plus 10? \n Me:69. ');
    }
  } else
  if (message.content === ';help') {
    let embed = new Discord.RichEmbed()
        .setAuthor("Help")
        .setDescription("This is Galaxy, a powerful bot created by AChaoticPrescenseIsNear#5397. List of commands: \n ayy - returns lmao \n ping - returns pong \n ;help - shows a list of commands \n you suck - returns well you swallow LMAOOOOOOOOOO \n ;roll - picks a random number \n ;meme - gets a meme")
        .setColor("#ff0066");
    message.channel.sendEmbed(embed);
  }

});

client.login(settings.token);