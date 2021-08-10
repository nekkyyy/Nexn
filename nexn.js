const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '%';

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Nexn is here!');
    client.user.setActivity('Nexn', { type: "WATCHING"}).catch(console.error)
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    

    if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args, Discord)
      } if(command === 'warn'){
          client.commands.get('warn').execute(message, args, Discord)
      }if(command === 'ban'){
          client.commands.get('ban').execute(message, args, Discord)
      }if(command === 'kick'){
          client.commands.get('kick').execute(message, args, Discord)
      }if(command === 'clear'){
        client.commands.get('clear').execute(message, args, Discord)
    }if(command === 'respect'){
        client.commands.get('respect').execute(message, args, Discord)
    }
});

client.login('ODcyOTYxOTYxMTMyOTc0MTAx.YQxfLg.YBDFjURakkuwJ_UkvLIiBhRKd4U');