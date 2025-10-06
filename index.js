const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  const voiceChannel = bot.voiceChannels.cache.get('1422899576188440576'); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
