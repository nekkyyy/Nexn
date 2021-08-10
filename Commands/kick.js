module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    userPermissions: ["ADMINISTRATOR"],
    execute(message, args, Discord){
        const target = message.mentions.users.first();
        if(!message.member.permissions.has("ADMINISTRATOR"  || [])) return message.reply("You don't have permission to do that!")
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
        let reason = args.join(" ").slice(22);
        if (!reason) reason = "**No reason given**"
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();

            if(message.member.hasPermission('ADMINISTRATOR')){
                const kickEmbed = new Discord.MessageEmbed()
                .setColor('##01786F')
                .setAuthor(`${mentioned.user.username}#${mentioned.user.discriminator} has been successfully kicked!`)
                .addField('Reason:',reason)
                .addField(`Banned by:`, `${message.author.username}#${message.author.discriminator}`)
                message.channel.send(kickEmbed)
            }else{
                const kickEmbed2 = new Discord.MessageEmbed()
                .setDescription("You don't have permission to do that!")
                .setColor('#FF0000')
                message.channel.send(kickEmbed2)

                const kickEmbed3 = new Discord.MessageEmbed()
                .setColor('##01786F')
                .setAuthor('You have been kicked!')
                .addField('Reason:',reason)
                .addField(`Banned by:`, `${message.author.username}#${message.author.discriminator}`)
                mentioned.send(kickEmbed3);
            }
        }
    }

    }