module.exports = {
    name: 'clear',
    description: 'Clear Messages!',
    async execute(message, args, Discord) {
        if (!args[0]) return message.reply("Napisi koliko poruka zelis da obrises!");
        if (isNaN(args[0])) {


        const clearembed2 = new Discord.MessageEmbed()
        .setColor('##01786F')
        .setAuthor('❌ Error!')
        .setDescription('Write the right number!')
        message.channel.send(clearembed2)
}

        if(args[0] > 100) {
            const clearembed3 = new Discord.MessageEmbed()
        .setColor('##01786F')
        .setAuthor('❌ Error!')
        .setDescription('You cannot delete more than 100 messages!')
        message.channel.send(clearembed3)
        }
        

        if(args[0] < 1) {
            const clearembed4 = new Discord.MessageEmbed()
        .setColor('##01786F')
        .setAuthor('❌ Error!')
        .setDescription('You must delete at least one message')
        message.channel.send(clearembed4)
        }
        if(args[0] - 100) message.channel.send(` 🗸 I have deleted ` + "`" + args[ 0 ]   + ` messages!` +"`")

        await message.channel.messages.fetch({limit: args[0]}).then (messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}