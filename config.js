//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "‎https://whatsapp.com/channel/0029VagTGyuI1rcotBW2mn3p";
global.website = process.env.GURL || "‎https://whatsapp.com/channel/0029VagTGyuI1rcotBW2mn3p";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "23481412909904";
global.sudo = process.env.SUDO || "2348142909905";
global.owner = process.env.OWNER_NUMBER || "2348142909904";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V0OFBEcE5LU2d4SEtZYU1UYTZ5ZkxuUUx1d0VMS2ZXdTB3OUlYdzBYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtDaHhDeXRxdjZSM1drOHlibFhSVlBnTjRkNm9Wc3hoanVvSlFYbnlTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGRZZm1zQnRHbk5wdVRSMEpYbFEwbVErano5WU5ROXY5TzE0YVBYeFZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Q3JWb1JKbk45c3JPblVDVWxNMmtIYmNGajJVRjluT2RjaVZGRzZ6a3pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJdFZvQkY4NTdlTXN5RUlOYmQ2WVVjR0dreXBMTlBEWmJnS2JVZnR2RjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBVWGQ0cDhHR0x6bmNGakFTU1czbVVFVkhPTFVTS1JQUTZucHNMWDFyeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZhL0tBY2EzSG95RXVlazBQSWFIWWJ5TUVGbTJFUXpHa1M2UTBzTDRVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnJiOWo5WWZDdWwwR084UC8vQWJvdENGL0JVK3NRMWZjaTY1a3VNbU1UMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQSkxVSElFK3JtQ0doWUhDSkJsRjBIMldQeXJZcWRKTi94RWUwUGpXaDV6dkNBNDZwOXB5cnl6QVI3amtIOVhDUzlvYTFhOHhKS0lxTzd3eDgrZmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiI0Sk8yanJ0bStjRE5pWG5lR1RaeDd4cGxXaXluSnpScCs5a3ZudVVKSTV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlOFFvMGJVWVFGQ3E5S002QVFicDdnIiwicGhvbmVJZCI6IjAzYzMwYTFjLWZjMmItNDZhZC1hMzU4LWU5NjNkODdkMjVjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwV3hjbU1TbVltd3ZYK3ROL0t0YnFsTk5DTUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2w4MStNSDRSeTk2eUgzMDM4T2RaUkw0YkVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhNS0xZS0hRIiwibWUiOnsiaWQiOiIyNTY3NDU0MTQ3Mzk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNaS5SSWNoeV9UZWNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNjhvZThERU9xMXBiZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJua0pRQ1UzNUk0K2tvdEhYbDJ0OUI0dGFUVHNHMEowc3IrUU5mV0g1MjJFPSIsImFjY291bnRTaWduYXR1cmUiOiJOWWJjcnJ0aURUWGlKUCtWU0dIcklNdGZjNlBoTjU1RmtBZnV1aEFCYU4wQUZsQzZmZ2JISDExZmFEaDZmMmhZSEJKOWgvcFY4UlZRUk5oVUlFQ3lDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNE5ReXhYMGtnYnJ1MTdqL0VvYS90OE9sNE1aN3J4c0wxTXJWdXVHeEZSUXdJR0xRUG5oczhpQ2JYUm4xOUtDeXYySm9heU5RODJudjE4b2dJOVBPaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NDU0MTQ3Mzk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNUNVQWxOK1NPUHBLTFIxNWRyZlFlTFdrMDdCdENkTEsva0RYMWgrZHRoIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NjY2MzYxfQ" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.0.0",
  caption: process.env.CAPTION || "`KING_RICHY™`",
  author: process.env.PACK_AUTHER || "RICHY",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "KING_RICHY",
  ownername: process.env.OWNER_NAME || "RICHY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
