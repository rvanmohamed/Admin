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

  
  
  
  const os = require('os');
client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
      if (s.type && s.type === 'dm') {
          return true;
      }
      return false;
  })

  let totalTextChannels = client.channels.filter(function (s) {
      if (s.type && s.type === 'text') {
          return true;
      }
      return false;
  })

  let cpu = os.cpus();
  let cpuArray = cpu[0].model.replace(/\s+/g, " ").trim().split(" ");
  let cpuCores = cpu.length;
  l  if (message.content.startsWith(prefix + "stats") || message.content.startsWith(prefix + "bot")) {
      message.channel.send({
          embed: new Discord.RichEmbed()
              .setColor('#36393e')
              .setTitle(' ℹ Bot Information')
              .addField('» Ping :', **\${client.ping}` ms.,true)
              .addField('» RAM Usage :',`${(process.memoryUsage().rss / 1048576).toFixed()}` MB.,true)
              .addField('» Guilds :',`${client.guilds.size}`,true)
              .addField('» Channels :',`${client.channels.size}`,true)
              .addField('» User :',`${client.users.size}`,true)
              .addField('» Name :',`${client.user.tag})`,true)
              .addField('» Platform:',`${os.platform()}`,true)
              .addField('» CPU :',`${cpuArray[0]} ${cpuArray[1]}`,true)
              .addField('» CPU Specs :',`${cpuCores} @ ${cpuSpeed}`,true)
              .addField('» Private Conversations :',`${totalDMs.size}`,true)
              .addField('» Host :',`FlixHost`,true)
              .addField('» WebSite :',`Soon`,true)
              .addField('» Developers :',@# " / لُوُرًاُنَسٍ  / " #**`)
      })
  }
})et cpuSpeed = (cpu[0].speed / 1000) + "MHZ";
  
  
  
  



client.on('guildMemberAdd', member=> {

    client.channels.get("ID Room").send(`** Welcome In ur Server♥  ${member}**`);
    });




const replyForMention = [   "**Hi For More Informations Type ||`-help`||♥**",  ]
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(replyForMention);
    }
});






client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `<help | ${bot.guilds.size} guilds`,
      `<help | ${bot.channels.size} channels`,
      `<help | ${bot.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
          url: 'https://www.twitch.tv/n3k4a'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
}); //OneDrop™



client.on('messageDelete', async message => {
  let channel = (`<#${message.channel}${message.channel.discriminator}`)
var embed = new Discord.RichEmbed()
.setColor('#6c757d')
.setTitle(`@${message.author.username}#${message.author.discriminator}`)
.addField(`🗑 Message sent by @${message.author.username}#${message.author.discriminator}`, ("Message:", `\`\`\` ${message.content} \`\`\``) ,true)
.setDescription(`Deleted in <#${message.channel.id}>`)
.setFooter(`By: ${message.author.username} • Today at ${message.createdAt.getHours()}:${message.createdAt.getMinutes()}`)
client.channels.find('name',"logs").send(embed)
});



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
