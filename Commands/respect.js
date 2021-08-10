module.exports = {
    name: 'respect',
    command: 'respect',
    userPermissions: [""],
    async execute(message, args, Discord) {
        let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
    const respectEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} respects ${mentioned.user.username}`)
    .setImage("https://c.tenor.com/-6OOEfqm60oAAAAM/respect-hats-off.gif")
    message.channel.send(respectEmbed)
    }
        
} 