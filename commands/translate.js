const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: 'translate',

  async execute(message,args, cmd, client, Discord) {
    try {
      const query = args.slice(1).join(" ");
    if (!query) return message.reply("Please type a text to translate.")
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const translateembed = new Discord.MessageEmbed()
    .setTitle("Translated Successfully.")
    .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("#d4c5a2")
    message.channel.send(translateembed)

    } catch (error) {
      return message.channel.send("Your question is invalid! You need to use the command like this: `;translate <language> <text>`")
      .then(() => console.log(error));
    }
  }
}