const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first(); //by  BlackOps :D
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Welcome Pro To Server!');
  }
});

client.login(process.env.BOT_TOKEN);




client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first(); //by  BlackOps :D
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.content === 'كسمك') {
    msg.reply('ابويا نك امك!');
  }
});

client.login(process.env.BOT_TOKEN);


client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first(); //by  BlackOps :D
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('mmkn 7drtk tklm 7d mn el STAFF fe el Gourp 4rkan Welcome Pro
             https://www.facebook.com/groups/OneDropCF/!');
  }
});

client.login(process.env.BOT_TOKEN);
