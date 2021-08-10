module.exports = {
    name: 'warn',
    command: 'warn',
    userPermissions: ["ADMINISTRATOR"],
    async execute(message, args, Discord) {
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!message.member.permissions.has("ADMINISTRATOR"  || [])) return message.reply("You don't have permission to do that!")

        let reason = args.join(" ").slice(22);
    if (!reason) reason = "**No reason given**"
            const newEmbed = new Discord.MessageEmbed()
    .setColor('##01786F')
    .setAuthor(`${mentioned.user.username}#${mentioned.user.discriminator} has been successfully warned!`)
    .addField('Reason:',reason)
    .addField(`Warned by:`, `${message.author.username}#${message.author.discriminator}`)

    const WarnEmbed = new Discord.MessageEmbed()
    .setColor('##01786F')
    .setAuthor(`You have been warned!`)
    .addField('Reason:',reason)
    .addField(`Warned by:`, `${message.author.username}#${message.author.discriminator}`)
    mentioned.send(WarnEmbed);
    

    message.channel.send(newEmbed)
        
    }
}