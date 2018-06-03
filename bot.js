const Discord = require("Discord.js");
const client = new Discord.Client();

client.on(`ready`, () => {
    console.log(`i am Ready!`)
});

client.on(`message`, message =>  {
    if (message.content === `ping`) {
      message.reply(`pong`) {
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT-TOKEN);
