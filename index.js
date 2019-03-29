const Discord = require('discord.js');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.on('ready', () => {
    console.log(`Ready!`);
  });
  
  client.on('message', msg => {
    if (msg.content.startsWith(`4bot ping`)) {
      msg.channel.send('Pong!')
    }
  });

  client.on('message', msg => {
    if (msg.content.startsWith(`4bot fora`)) {
                msg.channel.send('Matej je nos kopao, pa mu je umjetni otpao! :joy_cat:'), {
                }
    }
  });

  client.on('message', msg => {
    if (msg.content.startsWith(`4bot serverinfo`)) {
      msg.channel.send('Ime: 4.C Gamers, bla, bla, bla i bla')
    }
  });

  client.on('message', msg => {
    if (msg.content.startsWith(`help`)) {
      msg.channel.send('Prefix je "4bot"! Komande: "ping", "fora", "serverinfo"')
    }
  });
  
client.login(process.env.BOT_TOKEN);
