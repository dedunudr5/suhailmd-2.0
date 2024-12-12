const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94721207559";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_08_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRDSE9DejFBaWJUdFZtRkg0ZTd2b080b1IySHo1OUJwS21GK1VnSW11RXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjEyMDc1NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYwNDc0NTg1NURCREY3RDMxNDk2NURFMUZDM0Y5RUMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDAwMTcwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhRzJHVVhUWFNnS0JiRThscjg1SVl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlNjY0YjNhLTQwMDYtNDBkZi05ZjczLTNjZTU3N2YxZGEwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAzLFxuICAgICAgMjMyLFxuICAgICAgMTgyLFxuICAgICAgMTAwLFxuICAgICAgMTMxLFxuICAgICAgMzcsXG4gICAgICA3MSxcbiAgICAgIDIxNyxcbiAgICAgIDE2NCxcbiAgICAgIDc1LFxuICAgICAgMTA5LFxuICAgICAgODEsXG4gICAgICA3NCxcbiAgICAgIDE3OCxcbiAgICAgIDExMCxcbiAgICAgIDYsXG4gICAgICAyMzgsXG4gICAgICAyMjUsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTA5LFxuICAgICAgMTA1LFxuICAgICAgOTQsXG4gICAgICA2LFxuICAgICAgMTYyLFxuICAgICAgMjAzLFxuICAgICAgMTEyLFxuICAgICAgNTcsXG4gICAgICAzMCxcbiAgICAgIDE2OCxcbiAgICAgIDE2NCxcbiAgICAgIDE0NSxcbiAgICAgIDIzMixcbiAgICAgIDIwMixcbiAgICAgIDEyMyxcbiAgICAgIDMxLFxuICAgICAgMjE4LFxuICAgICAgNjcsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUYyNjhTOE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIxMjA3NTU5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Zv1xcbvCdmb5cXG7wnZqGXFxu8J2agVxcbvCdmbRcXG7wnZmzXFxuXFxuXFxu8J2ZsVxcbvCdmohcXG5cXG5cXG7wnZqGXFxu8J2ZvlxcbvCdmb1cXG7wnZm0XFxu8J2ZtFxcblxcblxcblxcblxcblxcblxcbvCdmoFcXG7wnZqEXFxu8J2ZulxcbvCdmoJcXG7wnZmwXFxu8J2ZvVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbvCdmoHwnZm08J2ZsyDwnZqC8J2ZsPCdmbzwnZqE8J2agfCdmbDwnZm4IPCdmbnwnZm08J2Zv/CdmbROXCIsXG4gICAgXCJsaWRcIjogXCIyNjY1MTYxMjU3MTI0OTA6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWk2OXhvUXBZanJ1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5aVFDb3B0RndWc0dWK3BXbkx4U3FpcVh0TFByaTdwME9lQkxET3VYVERVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBTVGlYTEpFeElwNTdQV3NDV0Z2dnRSaVBsWExQNk8rZTljSGhDVklHem0zUE8wZlZlZHpRVHBRS0E3NFZPN0hvc21UUlRYQks0c2h4Wk5wUU1qM0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpQMy9tYlMyVHBnYk1IN05ybzVLOHJaUkMxbmYvYVhnWEMrcE9iUkduWVc4MXNPaW5oYldZZmwvWEF4QWJjVy9uZk01Y3hlWFlDZTVRZVhSVUVaV2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIxMjA3NTU5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwMDE3MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBampcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFqai5qc29uIjogIntcImtleURhdGFcIjpcIjZwVGJ2NURXUlhaRXBOeWdPRnU4dlp3emlBRm5XdnQ2cXhpRzU0dVgyNlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY0ODMwODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAwMTcwNzIxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Red_samurai-XMD",
  ownername:process.env.OWNER_NAME|| "Rukshan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
