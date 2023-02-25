const express = require("express"); 
const app = express();

app.listen(3000, () => {
  console.log("project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content ===  "k!ip"){
    message.channel.send("51.79.242.187:30051")
 
  } 
})

client.login(process.env.token);