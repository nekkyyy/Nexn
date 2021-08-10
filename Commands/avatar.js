module.exports = {
  name: 'avatar',
  command: 'avatar',
  userPermissions: [""],
  async execute(message, args, Discord) {
    let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#AEB8DB')
    .setAuthor(`Avatar for ${mentioned.user.username}#${mentioned.user.discriminator}`)
    .setImage(mentioned.user.displayAvatarURL())
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(newEmbed)
  }
} 