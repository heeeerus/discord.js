const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('Bot aktif, komutlar kullanılabilir.');
});

client.login(config.token);
