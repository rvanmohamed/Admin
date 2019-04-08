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
       setImage(`${x5bzm.avatarURL}`)
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
client.login(process.env.BOT_TOKE

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('mmkn 7drtk tklm 7d mn el STAFF fe el Gourp 4rkan Welcome Pro https://www.facebook.com/groups/OneDropCF/!');
  }
});

client.login(process.env.BOT_TOKEN);


client.on('guildMemberAdd', member => {
        member.guild.channels.get('اي دي الروم').setName(Total Users: ${member.guild.memberCount})
        let humans = member.guild.members.filter(m => !m.user.bot).size;
        member.guild.channels.get('اي دي الروم').setName(Member Count: ${humans})
        let bots = member.guild.members.filter(m => m.user.bot).size;
        member.guild.channels.get(' اي دي الروم').setName(Bot Count ${bots})
    //الحقوق محفوظه لي ديمون
      });



client.on('message') , Magic0 => {
              var prefix = "$" ;
   if(Magic0.content.startsWith(prefix + "msgcount")) {
Magic0.channel.fetchMessage()
  .then(messages => Magic0.channel.send(`Message Count
${messages.size} `))
  .catch(console.error);
  }
  })
client.login(process.env.BOT_TOKE
  
  
  
  const os = require('os');
client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
      if (s.type && s.type === 'dm') {
          return true;
      }
      return false;
  })
client.login(process.env.BOT_TOK



client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ البوت خرج من سيرفر`)
        .setDescription(`**
→ | اسم السيرفر : \`${guild.name}\`
→ | ايدي السيرفر: \`${guild.id}\`
→ | صاحب السيرفر : ${guild.owner}
→ | عدد الاعضاء: \`${guild.memberCount}\`
→ | عدد السيرفرات الحاليه : \`${client.guilds.size}\`**`)
        .setColor('RANDOM')
client.guilds.get('553165370148651022').channels.get('556461372804694028').send(embed)
}); 
client.login(process.env.BOT_TOKE
