//Project By HasanH6#1068, HASOONAAAAAA IS PRO ASF MADE THIS BOT KODES CUZ HIS SO FKING PRO WTF DKWPOIAJDIOAJOUJHEWAUEHAU//
const Discord = require('discord.js')
const client = new Discord.Client();
const readline = require('readline');
const colors = require('colors');
//const got = require('got');
const stringOne = 'This is a plain string.';
const stringTwo = 'This string is red.'.red;
const stringThree = 'This string is blue.'.blue;
const today = new Date().toLocaleDateString(); 
const currentDate = new Date();
const lolwait = "Please Wait, Loading The Bot...";
var TextAnimation = require("text-animation"); //text animation 
var randomColor = require('randomcolor');
const v8 = require('v8')
const totalHeapSize = v8.getHeapStatistics().total_available_size
let totalHeapSizeInGB = (totalHeapSize / 1024 / 1024 /1024).toFixed(2)
var colorfull = randomColor();
var coins = 0;
let ispem = false;
const queue = new Map();
const ytdl = require("ytdl-core");
const webhook = require("webhook-discord");
const fs = require('fs');
let autorespond = false;
const ytSearch = require('yt-search');
const backup = require("discord-backup");
const Auditlog = require("discord-auditlog");
const logsn = '**[+]LOGS** : '
let startgames = false;
const talkedRecently = new Set();
const talkedRecently1 = new Set();
let promote = false;
let joined = false;https:
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.0.7',
  user     : 'lmao',
  password : 'no',
  database : 'mydbmf'
});
//these game config and codes NERDS
const config = require('./codes/games/config');
const SnakeGame = require('./codes/games/snake');
const HangmanGame = require('./codes/games/hangman');
const MinesweeperGame = require('./codes/games/minesweeper');
const Connect4Game = require('./codes/games/connect4');
const ChessGame = require('./codes/games/chess');
const TicTacToeGame = require('./codes/games/tic-tac-toe');
const express = require('express');
const app = express()
const port = 5050
const normall = "";
let epx = "";
var Botname = '${client.user.tag}';
let prefix =  "-"
let Botoken = "ODMyNTMzNTY5MTgzNjc4NTE1.YHlLTg.APoY9otWW4PTHV_ZPR82IHqd2N0"
let OwnerID = "569050884886233118"
const Owner = client.users.cache.get(OwnerID)		
client.once('ready', () => {
	console.clear();
	console.log('successfully Logged Into Bot token'.green);
	app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`.red);
})
	console.log(`${client.user.tag}`    + ` Is Running`.red)
	console.log(`Run Time: ${today}`.red);
	console.log('project by HasanH6#1068'.red);
});
client.login(Botoken);
console.log('successfully Logged Into Bot token'.green);
console.log(`${lolwait}`.green);

  client.on("ready", () => {
const x = client.guilds.cache.size
client.user.setActivity(x + " servers", {
    status: "STREAMING",
    type: "STREAMING",
   url: "https://www.twitch.tv/Diameter"
});
  });
  //this down is audit logs bitches
Auditlog(client, {
	"802120074285940767": {
		auditlog: "🔥audit-log🔥",	
		movement: "in-out",
		auditmsg: false, // Default to fasle, recommend to set a channel
		voice: false, // Set a Channel name if you want it
		trackroles: true, // Default is False
		// excludedroles: ['671004697850544111', '671004697850544112']  // This is an OPTIONAL array of Roles ID that won't be tracked
	}
});
client.on('message', function(message){
	if(message.channel.type === 'dm') return;
	 console.log("[" + message.author.username + "] " + "in " + "[" + message.guild.name + " / " + message.guild.id + "] in (" + message.channel.name + "): " + message.content);
});
client.on('message', function(message){
	if(message.channel.type === 'dm'){
		const dmed = message.channel.recipient.username;
		const userping = '<@' + message.channel.recipient.id + '>';
		const Owner = client.users.cache.get(OwnerID)
			console.log("(" + "DM" + ")" + "[" + message.author.username + "] To " + dmed  + " :" + message.content);
	 if(message.channel.recipient.id === OwnerID) return;
	 if(message.author.id === message.channel.recipient.id) {
		 Owner.send("©[" + "DM" + "]" + " From " + message.author.username + " : " + message.content + ", user: " + userping + ', ID: ' + message.channel.recipient.id);
		 return;
	 }
	 Owner.send("©[" + "DM" + "]" + " From " + message.author.username + " To " + dmed  + " : " + message.content + ", user: " + userping + ', ID: ' + message.channel.recipient.id);
	}
});//node --max-old-space-size=8192 server.js

client.on('message', function(message){
	if(message.channel.type === 'dm') return;
 const commandBody = message.content.slice(prefix.length);
		  const args = commandBody.split(' ');
	 const command = args.shift().toLowerCase();
	  const user = "<@" + message.author.id + ">";
	  if(!promote) return;
	  const dick = message.author.user;
	if (command === 'discord.gg/' || (message.content.includes('discord.gg/' || (command === 'https://discord.gg/' || (message.content.includes('https://discord.gg/')))))) {
	if (message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
  message.channel.send('stop promoting discord shit servers in here ' + user);
    message.delete();
  return;
	}else {
		 	  message.channel.send('lol' + user + ' if i have perms i would ban your ass from this server, i hate when some one self promote tsk tsk..');
			  return;
	}
	}
});
client.on('message', function(message) {
if(message.author.id == '702416834301001728'){
	message.react('<a:trust:841081484172329020>');
}
});//this is your mother
client.on('message', function(message) {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;                                               
 const user = "<@" + message.author.id + ">";
 const commandBody = message.content.slice(prefix.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase(); 
 const argss = message.content.slice(prefix.length).trim().split(/ +/g);
 const bot = message.author.bot;
 if (message.content.includes('help') || message.content.includes('hackinfo') || message.content.includes('whoboy') || message.content.includes('whogirl') || message.content.includes('svscount') || message.content.includes('rolesinfo') || message.content.includes('grolea') || message.content.includes('ub') || message.content.includes('dban') || message.content.includes('uba') || message.content.includes('gchannels') || message.content.includes('status') || message.content.includes('usewh') || message.content.includes('checkwh') || message.content.includes('dmallin') || message.content.includes('invs') || message.content.includes('gtitem') || message.content.includes('changep') || message.content.includes('whosexy') || message.content.includes('vps') || message.content.includes('svsinfo') || message.content.includes('gpermsa') || message.content.includes('whopro') || message.content.includes('whonoob') || message.content.includes('whogay') || message.content.includes('findbf') || message.content.includes('findgf') || message.content.includes('kickall') || message.content.includes('banall') || message.content.includes('dmall') || message.content.includes('sinfo') ||  message.content.includes('pp') ||  message.content.includes('howgay') ||  message.content.includes('stop') ||  message.content.includes('end') || message.content.includes('?') || message.content.includes('antipromote') ||  message.content.includes('leave') || message.content.includes('join') ||  message.content.includes('connect4') ||  message.content.includes('mineweeper') ||  message.content.includes('tictactoe') ||  message.content.includes('hangman') ||  message.content.includes('chess') ||  message.content.includes('snake') ||  message.content.includes('stopres') ||  message.content.includes('kick') ||  message.content.includes('dm') ||  message.content.includes('check') ||  message.content.includes('rps') ||  message.content.includes('startres') ||  message.content.includes('nick') ||  message.content.includes('changenick') || message.content.includes('deletem') || message.content.includes('remakesv') || message.content.includes('raid') || message.content.includes('spam') || message.content.includes('deletec') || message.content.includes('lyrics') || message.content.includes('inv') || message.content.includes('queue') || message.content.includes('createuwh') || message.content.includes('createwh') || message.content.includes('nuke') || message.content.includes('volume') || message.content.includes('stop') || message.content.includes('skip') || message.content.includes('deletear') || message.content.includes('creater') || message.content.includes('createpc') || message.content.includes('createur') || message.content.includes('loadbu') || message.content.includes('createbu') || message.content.includes('cbu') || message.content.includes('webhraid') || message.content.includes('createuc') || message.content.includes('gen') || message.content.includes('np') || message.content.includes('deleteac') || message.content.includes('resume') || message.content.includes('fuck') || message.content.includes('createem') || message.content.includes('deleteae') || message.content.includes('gf') || message.content.includes('pause') || message.content.includes('boy') || message.content.includes('boyfriend') || message.content.includes('bf') || message.content.includes('girl') || message.content.includes('girlfriend') || message.content.includes('hack') || message.content.includes('gperms') || message.content.includes('play') || message.content.includes('ddos') || message.content.includes('createvc') || message.content.includes('createc') || message.content.includes('avatar') || message.content.includes('av') || message.content.includes('sex') || message.content.includes('dmeme') || message.content.includes('rape') || message.content.includes('howfat') || message.content.includes('howthin') || message.content.includes('sexy') || message.content.includes('howhorny') || message.content.includes('gender') || message.content.includes('howpro') || message.content.includes('hownoob') || message.content.includes('spk') || message.content.includes('ban') || message.content.includes('dmemes')) {
	 return;
 }else {
const choice = ['uhm? thats my prefix and i didnt learn this command', 'whats this?i dont know this command', 'could you try another one?', 'maybe i add that command soon to my data', 'sorry?', 'hmm this Doesnt seems invalid command', 'do -help for list of commands bro'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]); }
});
client.on('message', function(message) {
client.setMaxListeners(0);
 if (message.author.bot) return;
 if (message.content.startsWith(prefix)) return;
 const user = "<@" + message.author.id + ">";
 const indmmf = (message.channel.type === 'dm');
 const commandBody = message.content.slice(normall.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase();
 if(!autorespond) return;
 
 //auto responder by hasanH6 
if (command === 'hi') {
        const choice = ['hai', 'sup fucker', 'ey', 'sa', 'yow dud wassup', 'Heyo sup what are you doing?', 'Hi, how old are you', 'Yo Nice cock bro'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'sup') {
        const choice = ['eyo', 'sup', 'wassup', 'hi', 'what do u want?', 'Wassup Nigga', 'Yow', 'good mother fucker'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'lol') {
	    const choice = ['lol', 'lolz', 'why ur laghing dude', '?', 'whats so funny mother fucker', 'yea so funny', 'what are you laughing at'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 } 
 if (command === 'wtf') {
        const choice = ['?', 'wat', 'https://media.giphy.com/media/ExN8bEghwc8Ced5Yss/giphy.gif', 'what wtf', 'whats going on bitch'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'cat') {
  message.reply(`cat what mother fucker`);
 }
 if (command === 'trashcan') {
  message.reply(`https://www.trashcanswarehouse.com/assets/images/product-photos/witt/wcd24cl.jpg`);
 }
 if (command === 'see') {
  message.reply(`https://marinedebris.noaa.gov/sites/default/files/styles/max-width600/public/IMG_1187_0.JPG?itok=iFHb98S3`);
 }
 if (command === 'uhm') {
  message.channel.send("uhm? uhm what dick head");
  return;
 }
 if (command === 'pro') {
  message.channel.send("ofc me pro and you noob ");
  return;
 }
 if (command === 'ty') {
  message.channel.send("yea welcome bitch");
  return;
 }
 if (command === 'xd') {
  message.channel.send("XD?? stfu");
  return;
 }
 if (command === 'hm') {
  message.channel.send("hmm");
  return;
 }
 if (command === 'hmm') {
  message.channel.send("hmmm");
  return;
 }
 if (command === 'bro') {
  message.channel.send("what bro " +  user );
  return;
 }
 if (command === 'umm') {
  message.channel.send("what umm");
  return;
 }
 if (command === 'fuck') {
  message.channel.send("you " + user );
  return;
 }
 if (command === 'umm') {
  message.channel.send("what umm");
  return;
 }
 if (command === 'fuck you') {
  message.channel.send("fuck you too " + user );
  return;
 }
 if (command === 'sex') {
  message.channel.send("what sex?");
  return;
 }
 if (command === 'lol dude') {
  message.channel.send("what dude");
  return;
 }
 if (command === 'dude') {
  message.channel.send("?");
  return;
 }
 if (command === '?') {
  message.channel.send( user + " what ?  what? stfu");
  return;
 }
 if (command === 'stfu') {
  message.channel.send("no u stfu");
  return;
 }
 if (command === 'you') {
  message.channel.send("no you");
  return;
 }
 if (command === 'can') {
  message.channel.send("can what");
  return;
 }
 if (command === 'what') {
  message.channel.send("nothing");
  return;
 }
 if (command === 'omg') {
  message.channel.send("what omg what?");
  return;
 }
 if (command === 'wtf') {
  message.channel.send("what the fuck?");
  return;
 }
 if (command === 'um') {
  message.channel.send("what um");
  return;
 }
 if (command === 'umm') {
  message.channel.send("what umm?");
  return;
 }
 if (command === 'no') {
  message.channel.send("stfu");
  return;
 }
 if (command === 'uhm') {
  message.channel.send("what uhm");
  return;
 }
 if (command === 'lool') {
  message.channel.send("what lool");
  return;
 }
 if (command === 'lols') {
  message.channel.send("what lols?");
  return;
 }
 if (command === 'dick') {
  message.channel.send("your dick");
  return;
 }
 if (command === 'wow') {
  message.channel.send("whats so wonderfull ?");
  return;
 }
 if (command === 'noo') {
  message.channel.send("shut your fucking mouth man");
  return;
 }
 if (command === '-help') {
  message.channel.send("help what bitch");
  return;
 }
 if (command === 'help') {
  message.channel.send("what help mother fucker");
  return;
 }
 if (command === '!help') {
  message.channel.send("help what nigger?");
  return;
 }
 if (command === '@help') {
  message.channel.send("fuck u and fuck help");
  return;
 }
 if (command === 'fuck off') {
  message.channel.send("no you fuck off");
  return;
 }
 if (command === 'nu') {
  message.channel.send("what nu");
  return;
 }
 if (command === 'nah') {
  message.channel.send("stfu mother fucker");
  return;
 }
 if (command === 'sec') {
  message.channel.send("second? ok done second bitch");
  return;
 }
 if (command === 'damn') {
  message.channel.send("u god dam idiot");
  return;
 }
 if (command === 'stupid') {
  message.channel.send("you stupid");
  return;
 }
 if (command === 'idiot') {
  message.channel.send("your idiot nigga");
  return;
 }
 if (command === 'how are you') {
  message.channel.send("i was good undtil i saw you");
  return;
 }
 if (command === 'how are you?') {
  message.channel.send("i was good undtil i saw you..");
  return;
 }
 if (command === 'ok') {
  message.channel.send("what ok mother fucker");
  return;
 }
 if (command === 'nothing') {
  message.channel.send("nothing? ok nice go fuck you self");
  return;
 }
 if (command === 'lll') {
  message.channel.send("what lll");
  return;
 }
 if (command === 'lok') {
  message.channel.send("you meant lol?");
  return;
 }
 if (command === 'nope') {
  message.channel.send("what nope");
  return;
 }
 if (command === 'vps') {
  message.channel.send("what vps");
  return;
 }
 if (command === 'buy') {
  message.channel.send("you buy what mother fucker");
  return;
 }
 if (command === 'tsk') {
  message.channel.send("why tsk");
  return;
 }
 if (command === 'zzz') {
  message.channel.send("zzz? are u sleeping mother fucker");
  return;
 }
 if (command === 'sell') {
  message.channel.send("u sell what fucker");
  return;
 }
  if (command === 'hahaha') {
  message.channel.send("ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  return;
 }
 if (command === 'umg') {
  message.channel.send("what umg");
  return;
 }
 if (command === 'spam') {
  message.channel.send("no lol");
  return;
 }
 if (command === 'etf') {
  message.channel.send("you mean wtf?");
  return;
 }
 if (command === 'nose') {
  message.channel.send("what nose lol");
  return;
 }
 if (command === 'sad') {
  message.channel.send("yes bro so sad");
  return;
 }
 if (command === 'happy') {
  message.channel.send("why so happy");
  return;
 }
 if (command === 'ol') {
  message.channel.send("what ol");
  return;
 }
 if (command === 'uhh') {
  message.channel.send("dont say uhh u sound like a woman having sex");
  message.channel.send("marry who");
  return;
 }
 if (command === 'just') {
  message.channel.send("just what");
  return;
 }
 if (command === 'marry') {
  return;
 }
 if (command === 'go') {
  message.channel.send("go to where");
  return;
 }
 if (command === 'come') {
  message.channel.send("come to where");
  return;
 }
 if (command === 'hello') {
  message.channel.send("sup mother fucker");
  return;
 }
 if (command === 'sup') {
  message.channel.send("hi nigga");
  return;
 }
 if (command === 'nigga') {
  message.channel.send("wtf");
  return;
 }
 if (command === 'nigger') {
  message.channel.send("wtf");
  return;
 }
 if (command === 'toxic') {
  message.channel.send("am not toxic");
  return;
 }
 if (command === 'your') {
  message.channel.send("no your");
  return;
 }
 if (command === 'd*ck') {
  message.channel.send("wrtff");
  return;
 }
 if (command === 'broo') {
  message.channel.send("what brooooo");
  return;
 }
 if (command === ':(') {
  message.channel.send(":((((((((((((((((((((");
  return;
 }
 if (command === ':)') {
  message.channel.send(": ))))))))))))))))))))");
  return;
 }
 if (command === 'wt') {
  message.channel.send("what wt");
  return;
 }
 if (command === 'hehe') {
  message.channel.send("what hehe");
  return;
 }
 if (command === 'fok') {
  message.channel.send("fok u");
  return;
 }
if (command === 'fk' || (command === ' u')) {
  message.channel.send("no fk u");
  return;
 }
 if (command === 'me') {
  message.channel.send("yes you");
  return;
 }
 if (command === 'me?') {
  message.channel.send("yes you");
  return;
 }
 if (command === 'dddd') {
  message.channel.send("whatbrooooo");
  return;
 }
 if (command === 'why') {
  message.channel.send("why what");
  return;
 }
 if (command === 'tysm') {
  message.channel.send("wlsm");
  return;
 }
 if (command === 'my name is ') {
  message.channel.send("fuck u and fuck ur name");
  return;
 }
 if (command === 'stupid' || (message.content.includes('stupid'))) {
        const choice = ['your stupid', 'you', 'no u stupd', 'you are'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
  if (command === 'bruh' || (message.content.includes('bruh'))) {
        const choice = ['yes bruh', 'bruhhhhhhhhhhhhhhh', 'brah', 'nruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuh'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
  if (command === 'you are ' || (message.content.includes('you are '))) {
        const choice = ['no you', 'no u', 'no your', 'noooooooooooooooooooooooooooo'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'u' || (message.content.includes('u'))) {
        const choice = ['eh', 'why u have mouth', 'can u stfu?', 'bro fuck off stop talking', 'please shut up ur mouth'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'die' || (message.content.includes('die'))) {
        const choice = ['you die nigga', 'no go kill your self', 'stfu and go die'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'gay' || (message.content.includes('gay'))) {
        const choice = ['your gay fucker', 'YOUR A FUCKING BIG GAY', 'fuck u retard ass hole'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'fuck' || (message.content.includes('fuck'))) {
        const choice = ['fuck you too dude', 'fuck you retard ass', 'go fuck ur self'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'yes' || (message.content.includes('yes'))) {
        const choice = ['what yes bitch', 'yes?', 'no'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'bot' || (message.content.includes('bot'))) {
        const choice = ['am not a bot', 'WTF AM NOT A BOT DUDE', 'me no bot your bot bitch', 'ur a fucking bot am alive mother fucker', 'stfu am not a fucking bot u retard ass am alive !!'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'good' || (message.content.includes('good'))) {
        const choice = ['ok nice hope ur always good mother fucker', 'good? ok nice i was good but when i saw you am not any more', 'ok nice', 'ok good being good', ''];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'lmao' || (message.content.includes('lmao'))) {
        const choice = ['this is so lmao right i forget what we are talking about man', 'lmao lmao lmao', 'i didnt get it why lmao', 'whats so funny to say lmao', '?'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'diameter' || (message.content.includes('diameter'))) {
        const choice = ['why always saying my name?', 'what?', 'what do you want from me', '?', 'who said by name?'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'idk' || (message.content.includes('idk'))) {
        const choice = ['i dont really like ur ass', 'your like an idiot dont know any thing', 'what does idk means', 'idk???'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'haha' || (message.content.includes('haha'))) {
        const choice = ['so funny?', 'whats ur problem', 'hahahahahhhahahahahahahhahaha', 'you need a doctor trust me', 'are u ok? u look like a crazy person', 'what so funny ?? '];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'a' || (message.content.includes('a'))) {
        const choice = ['tbh your the most retard person i have ever met', 'hmm why i feel i should laugh', 'please stop talking', 'ok', 'ehm', 'am here btw', 'zzzzzz', 'duh', 'may i ask u something? nvm i wont ask noobs', 'your text is so gay', 'i wish ur wasnt bored at all', 'bro my head will blow up from ur ass', 'you will keep talking like a bitch?', 'cant u just stfu for 1 min', 'bruh your a fucking retard'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'b' || (message.content.includes('b'))) {
        const choice = ['hmm idunno what to say man', 'ur simp', 'fuck you dude', user , 'bbbbbbbbbbbbbbbbbbbb', 'tsk tsk tsk'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'c' || (message.content.includes('c'))) {
        const choice = ['ur selfish', 'u know what fuck means?', 'i should take out your teeth', 'u have bad smell', 'ewwww'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'd' || (message.content.includes('d'))) {
        const choice = ['why should i eat bannana', 'i hope u die', 'why ur even on discord', 'bro i got something for you is to stfu', 'are you female or male cause ur talking so much', 'jerk off', 'stop'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'e' || (message.content.includes('e'))) {
        const choice = ['why am here', 'i know most pro scammers in world', 'eeeee', 'if u had 2 mother ur lucky', 'eat shit', 'why ur a dum ass', 'get the fuck out of here'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'f' || (message.content.includes('f'))) {
        const choice = ['i readed all books now i can sex', 'lick my ass off', 'suck my dick', 'play with my nose'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'g' || (message.content.includes('g'))) {
        const choice = ['sharmoot means bitch ur a sharmoot', 'i have 5 dicks if u want', 'uhm'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'h' || (message.content.includes('h'))) {
        const choice = ['tsk', 'dude', 'i dont want to talk to u', 'hahaha', 'why ur so boring', 'ur an idiot'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'i' || (message.content.includes('i'))) {
        const choice = ['idk what to say', 'wait', 'wait second'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'j' || (message.content.includes('j'))) {
        const choice = ['wait me afk', 'wait a fucking minute', 'chill'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'k' || (message.content.includes('k'))) {
        const choice = ['ok', 'ask me something', 'mother fucker'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'l' || (message.content.includes('l'))) {
        const choice = ['lul', 'i dont respect you', 'who put you on the planet'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'm' || (message.content.includes('m'))) {
        const choice = ['do u have dick bro', 'ur a female', 'nice'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'n' || (message.content.includes('n'))) {
        const choice = ['am busy wait', 'fuck ur self 1 min', 'suck ur dick 1 sec'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'o' || (message.content.includes('o'))) {
        const choice = ['ooooooooo', 'pig', 'dog'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'p' || (message.content.includes('p'))) {
        const choice = ['u got small pp right', 'penis', 'poopo peepe'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'q' || (message.content.includes('q'))) {
        const choice = ['tit', 'wtfs', 'dwyagdwayygadwyggydygawgyadygwa'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'r' || (message.content.includes('r'))) {
        const choice = ['am on pc btw', 'am on android', 'am on ios'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 's' || (message.content.includes('s'))) {
        const choice = ['wait their is bad smell did u fart?', 'wait i need to fart', 'go fart on ur face'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 't' || (message.content.includes('t'))) {
        const choice = ['do u play tenis', 'do u have gf', 'do u know my name'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'v' || (message.content.includes('v'))) {
        const choice = ['ask me pro', 'u noob', 'noob bruh'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'w' || (message.content.includes('w'))) {
        const choice = ['wow', 'wew', 'damn'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'x' || (message.content.includes('x'))) {
        const choice = ['bro please fuck off', 'fuck ur mom', 'fuck ur dad'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'y' || (message.content.includes('y'))) {
        const choice = ['go sleep with ur mom dude', 'ok could u stop jerking off', 'i sell ur mother'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === 'z' || (message.content.includes('z'))) {
        const choice = ['i got a pussy what did u got?', 'am 27 years old Btw', 'ur dead man'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '1' || (message.content.includes('1'))) {
        const choice = ['ok', 'nice', 'umm', 'dude', 'your kid', 'did u know discord not for kids like u', 'who put you on the planet', 'ur a god dam idiot', 'i bet u dont have middle finger', 'that sucks', 'bro am so gay'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '2' || (message.content.includes('2'))) {
        const choice = ['https://images-ext-1.discordapp.net/external/lxwL43CFiFrEZsoi0QcKAacZegEgAnVxE385mhucwQs/https/media.discordapp.net/attachments/790276520022769664/800785641356918805/image0.gif', 'am not good for some reasons', 'did u know this command tooks me 17 min to think about', 'ur text looks like dick like ur face', 'i have 128 gb ram pc if u know'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '3' || (message.content.includes('3'))) {
        const choice = ['stop stop stop', 'FUCK YOU', 'bro i had 1 mom and 0 dad'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '4' || (message.content.includes('4'))) {
        const choice = ['am the only discord bot who can reply to every msg', 'i have bad keydoard', 'sorry let me hear u again'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '5' || (message.content.includes('5'))) {
        const choice = [ user , 'I like choclate', 'did u know its not good to be awake in a room all sleeping at'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '6' || (message.content.includes('6'))) {
        const choice = ['i think you like sex more than i do', 'did u know my fav number is 6', 'we are familly of 2 persons guess how'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '7' || (message.content.includes('7'))) {
        const choice = ['am wondering where i can get nitro', 'i had something in my ass and it wont go out', 'i cant do sex untill i get married'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '8' || (message.content.includes('8'))) {
        const choice = ['but are u gay?', 'who gay', 'you are gay'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '9' || (message.content.includes('9'))) {
        const choice = ['i have 1 sisten and am happy', 'live in peace brother', 'i have something in my pants'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '?' || (message.content.includes('?'))) {
        const choice = ['WRFFFFFFF', 'stop doing these stuff', 'you need some milk'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '!' || (message.content.includes('!'))) {
        const choice = ['are u a kid', 'i need some milk', 'u have a break down dude'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '@' || (message.content.includes('@'))) {
        const choice = ['stop sending msgs here', 'hmmmmm', 'wait i check if i have my dick'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '#' || (message.content.includes('#'))) {
        const choice = ['zb means dick and ur a zb', 'i check my pro ass', 'i need put a toy in my ass wait'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
 if (command === '.' || (message.content.includes('.'))) {
        const choice = ['am going to heaven by', 'i know a place for ur ass its hell', 'if i saw u in real life ill beat ur ass', 'i will have sex time with your mother', 'ik am a bot but i got a big pp'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
});
/*client.on('message', function(message) {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
 const commandBody = message.content.slice(prefix.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase(); 

if(command === 'ihelp'){
message.channel.send('-help is a command which it help you to get help to commands and you want me to help you to get helped to help????');
}
if(command === 'i?'){
message.channel.send('bruh bruh bruh bruh');
}
if(command === 'imhelp'){
message.channel.send('This Command tells you commands of Moderation haha');
}
if(command === 'iohelp'){
message.channel.send('i dont think you will use this command cuz its supposed to be for owner of bot as you know their is a wonderfull commands which cant be used by normall people or rip me.');
}
if(command === 'ighelp'){
message.channel.send('Game help it just give you commands to you so you can use them to start game some times some of them wont work, i will be fixing it soon');
}
if(command === 'ifhelp'){
message.channel.send('that command will help you to get helped to have sum fun as you know every one love to have fun thats why am here and thats why their is discord');
}
if(command === 'ihelp'){
message.channel.send('infooooooooooooooo helpppppppppppppp');
}
if(command === 'iban'){
message.channel.send(`it can be used {prefix}ban (username) and thats it, its a command to ban people from your server`);
}
if(command === 'ikick'){
message.channel.send(`it can be used {prefix}kick (name) and done, command to kick a member lol`);
}
if(command === 'istopres'){
message.channel.send(`it just stop auto respond do {prefix}stopres and done bruh`);
}
if(command === 'istartres'){
message.channel.send(`it {prefix}start and thats it, it will start the bot to be auto respond every command you say and as you know its just for owner of the bot cause it can be anoying for some people`);
}
if(command === 'idm'){
message.channel.send(`it can be used like {prefix}dm (name) (message) and it dm the person what you wrote i think your brain small cause you dont under stand what does this command do `);
}
if(command === 'icheck'){
message.channel.send('it check how much ram the console take with hosting and its just for owner');
}
if(command === 'irps'){
message.channel.send('so ez pz do -rps rock or papper or scissors and i will beat your ass up with this game am the best at it haha ');
}
if(command === 'idmeme'){
message.channel.send('it just send meme picture i added thousand of meme in here ');
}
if(command === 'idmemes'){
message.channel.send('it just send memes videos so funny you should try it trust me lol xd');
}
if(command === 'ijoin'){
message.channel.send('using this command will lend me in the voice channel your in');
}
if(command === 'ileave'){
message.channel.send('it lend me to leave from voice channel');
}
if(command === 'isnake'){
message.channel.send('just do -snake and it will send you a snake game on discord you can controll from reactions');
}
if(command === 'ichess'){
message.channel.send('it start a chess game but its a little broken haha');
}
if(command === 'iconnect4'){
message.channel.send('i never tried this game but i think its so cool');
}
if(command === 'ihangman'){
message.channel.send('its so simple start a hangman game i dont belive i just wrote all commands info cause of your small brain');
}
if(command === 'iminesweeper'){
message.channel.send('its just a game i didnt tried too but u can try and play these commands not coded by hasan its just by turkydev and recoded by hasan haha');
}
if(command === 'itictactoe'){
message.channel.send('it start a tictactoe game and its really fun haha');
}
if(command === 'isinfo'){
message.channel.send('that give you the server info');
}
});/*/
client.on('message', function(message){
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
 const user = "<@" + message.author.id + ">";
 const commandBody = message.content.slice(prefix.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase(); 
 const argss = message.content.slice(prefix.length).trim().split(/ +/g);
 const acceptedReplies = ['rock', 'paper', 'scissors'];
 const random = Math.floor((Math.random() * acceptedReplies.length));
 const result = acceptedReplies[random];
 const choice = ('rock', 'paper', 'scissors');
 const bot = message.author.bot;
   if(message.channel.type === 'dm'){
  if(message.author.id !== OwnerID) return;
  }
if(command === 'help' || (command === '?')) {
	const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Help Command')
    .setDescription(`
			${prefix}mhelp - moderation help
			${prefix}ghelp - game help
			${prefix}fhelp - fun help
			${prefix}ohelp - owner help
			${prefix}chelp - normall commands
			${prefix}muhelp - music help(disabled)
			`)
	.setColor('GREEN')
	message.channel.send(exampleEmbed)
}
 if(command === 'mhelp'){
	 	 message.channel.send({
        embed: {
	  title: 'Moderation Help',
            description: `
			${prefix}ban - ban member
			${prefix}kick - kick member
			`,
			color: 'GREEN'
 }
	})
 }
  if(command === 'ghelp'){
	   message.channel.send({
        embed: {
	  title: 'Game Help',
            description: `
			${prefix}snake - snake game
			${prefix}chess - chess game
			${prefix}connect4 - connect4 game
			${prefix}tictactoe - tictactoe game
			${prefix}minesweeper - minesweeper game
			`,
			color: 'GREEN'
 }
	})
 }
 if(command === 'fhelp'){
	  message.channel.send({
        embed: {
	  title: 'Fun Help',
            description: `
			${prefix}dm - -dm (name) (message)
			${prefix}rps - rps game
			${prefix}dmemes - send meme video 
			${prefix}dmeme - send meme photos
			${prefix}pp - penis scanner
			${prefix}howgay - gay scanner
			${prefix}howhorny - horny checker
			${prefix}hownoob - check how noob
			${prefix}howpro - check how pro
			${prefix}howfat - check how fat are you
			${prefix}howthin - check how thin are you
			${prefix}sexy - check how sexy
			${prefix}gender - check gender
			${prefix}gf - dick checker for gf
			${prefix}bf - boy friend helper checker
			${prefix}hack - hacks some one discord
			${prefix}fuck - Fuck mentioned member
			${prefix}sex - sex mentioned member
			${prefix}rape - rape mentioned member
			${prefix}ddos - ddos mentioned member
			${prefix}spk - spk a mentioned member
			${prefix}findgf - find gf in server
			${prefix}findbf - find bf in server
			${prefix}whogay - see who gay
			${prefix}whopro - see who pro 
			${prefix}whonoob - see who noob
			${prefix}whosexy - see who sexy
			${prefix}vps - generate random vps
			${prefix}gtitem - gtitem id of item ]
			${prefix}whogirl - check who's gerl
			${prefix}whoboy - check who's boy
			${prefix}hackinfo - hack user info
			`,
			color: 'GREEN'
 }
	})
 }
  if(command === 'chelp'){
	  message.channel.send({
        embed: {
	  title: 'Normall Help',
            description: `
			${prefix}sinfo - server info
			${prefix}nick - changes user nick
			${prefix}invite - invite the bot
			`,
			color: 'GREEN'
 }
	})
 }
 if(command === 'ohelp'){
	 if(message.author.id === OwnerID){
	  message.channel.send({
        embed: {
	  title: 'Owner Help',
            description: `
			${prefix}startres - start auto respond
			${prefix}stopres - stop auto respond
			${prefix}deletem - /deletem (number)
			${prefix}send - send message to mentioned channel
			${prefix}cbu - create back up for server
			${prefix}loadbu - load back up
			${prefix}svscount - get number of servers bot in
			${prefix}changep - change prefix
			${prefix}status - set status

			`,
			color: 'GREEN'
 }
	})
 }else {
	 message.channel.send('no dude its just for owner bruh');
 }
 }

if(command === 'status'){
if(message.author.id === OwnerID){
const y = args[0]
const x = args.slice(1).join(' ')
if(!y){
message.channel.send('status 1/2/3/4/5 (text)')
return;
}
if(y === '1'){
client.user.setActivity(x, {
    status: "STREAMING",
    type: "STREAMING",
   url: "https://www.twitch.tv/Diameter"
});
return;
}
if(y === '2'){
client.user.setActivity(x, {
    status: "WATCHING",
    type: "WATCHING",
   url: "https://www.twitch.tv/Diameter"
});
return;
}
if(y === '3'){
const as = args[1]
const sa = args.slice(2).join(' ')
client.user.setPresence({ activity: {name: sa, type: as}, status: 'online'})
 return;
}
if(y === '4'){
const as = args[1]
const sa = args.slice(2).join(' ')
client.user.setPresence({ activity: {name: sa, type: as}, status: 'dnd'})
 return;
}
if(y === '5'){
const as = args[1]
const sa = args.slice(1).join(' ')
client.user.setPresence({ activity: {name: sa, type: as}, status: 'idle'})
 return;
}
}
}
 if(command === 'gtitem') {
var color = randomColor();
let x = args[0]
message.channel.send('https://cdn.growstocks.xyz/item/' + x + '.png')
}
if (command === 'bf' || command === 'boyfriend'  || command === 'boy') {
const guild = message.guild;
const him = message.mentions.users.first() || message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const choice = ['uhh i think your not sexy enough to have a boy friend sorry..' + person, 'nice ass their let me tell you something all boys will love yo ass so make sure to choose a rich ass boy friend :)' + person, 'uh oh maybe if you have bigger tit you would have a good boy friend but sadly.. you have ||small| tit so ¯\_(ツ)_/¯' + person];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['Boy friend?, okay wait let me check if your sexy enough to have a boy friend' + person, 'sure give me a second let me check if ur sexy and got a Pro ass to have a bf' + person, 'oh you want a boy friend baby girl? okay wait lets check if ur a virgin, sexy, not that fat, blue eyes girl to have a boy friend' + person];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
  if (command === 'whosexy') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = [thegf + ' is the most sexy person here!!!'];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['checking who is the most sexy person in here, please wait..'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
if (command === 'whonoob') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = [thegf + ' is the most noob person here OMFG'];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['checking who is the noob person in here, please wait..'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
    if (command === 'whopro') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = [thegf + ' is the most pro person here WTF'];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['checking who is the most pro person in this here, please wait..'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
    if (command === 'whogay') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = [thegf + ' is the most gay person here LMAO'];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['checking who is the most gay person in this server please wait..'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
    if (command === 'whogirl') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const memberc = message.guild.members.cache.size;
const thegf = memberz.toString()
const choice = ['wow i have found a girl ' + thegf, "wtf this server is noob i didnt find any girl in here bruh", "ehm this server got " + memberc + " males lmao that means all the server boy lols"];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['scanning the server to find a female...'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
    if (command === 'whoboy') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const memberc = message.guild.members.cache.size;
const thegf = memberz.toString()
const choice = ['okay i found ' + thegf + " and i think he is the only man here, rest of the server are females lmfao", "okay this server contains 0 boys that mean all of u females LMFAO", "i didnt find boys sorry lols"];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['checking if the server contain boys..'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
  if (command === 'findbf') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = ['okay i have founded you a bf ' + thegf + ' is handsome, ' + person, 'wow ' + thegf + ' is very sexy boy you can have it as bf, '  + person, 'okay so i have found ' + thegf + ' his handsome and pro!!, ' + person];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['Finding a Bf For ' + person + ' please wait..', 'uhm sure finding a bf for '+ person + ', please wait...', 'searching for a bf for ' + person + ' please wait....'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
if (command === 'findgf') {
const guild = message.guild;
const him =  message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const memberz = message.guild.members.cache.random();
const thegf = memberz.toString()
const choice = ['okay i have founded you a gf ' + thegf + ' is good ' + person, 'ohhh my godd ' + thegf + ' is very sexy go date her omfg, '  + person, 'wow i have found ' + thegf + ' she have very nice ass, ' + person];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['Finding a Gf For ' + person + ' please wait..', 'uhm sure finding a gf for '+ person + ', please wait...', 'searching for a gf for ' + person + ' please wait....'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
if (command === 'gf' || command === 'girlfriend'  || command === 'girl') {
const guild = message.guild;
const him = message.mentions.users.first() || message.author
const person = '<@' + him + '>';
const pop = args.slice(0).join(' ')
const choice = ['eh your dick is kinda... ||small|| so i dont think you should have a gf bro..' + person, 'wow nice cock bro, there are many sexy girls waiting for you!!' + person, 'uh oh listen.. i think your not a boy your a female :flushed:, go get a boy friend not a girl friend' + person];
 const wut = Math.floor(Math.random() * choice.length);
const choice1 = ['Girl Friend? wait let me see the dick size first, checking ' + person + ' dick now...', 'uhm sure give me a second let me check  ' + person + ' dick', 'oh want a gf? second let me check ' + person + ' dick real quick...'];
 const wut1 = Math.floor(Math.random() * choice1.length);
message.channel.send(choice1[wut1])
.then((msg) => {
setTimeout(function(){ 
msg.edit(choice[wut])
}, 4000);
  })
  }
 /*if (command === 'ban') {
const target = message.mentions.users.first();
const retard = '<@' + target + '>';
if(!target) return;
if(message.channel.type === 'dm') return;
if (!message.member.hasPermission("KICK_MEMBERS")){
message.channel.send("how your going to ban people and you dont even have perms? are you idiot?");
return;
}
if (message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
target.ban();
message.channel.send("okeh i have banned " + retard + " <a:epickekw:814931649195671562>");
return;
}else {
message.channel.send("do i look like have fucking perms? to ban people? bruh");
return;
}
}
 if (command === 'kick') {
const target = message.mentions.users.first();
const retard = '<@' + target + '>';
if(!target) return;
if(message.channel.type === 'dm') return;
if (!message.member.hasPermission("KICK_MEMBERS")){
message.channel.send("how your going to kick people and you dont even have perms? are you idiot?");
return;
}
if (message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
target.kick();
message.channel.send("okeh i have kicked " + retard + " <a:epickekw:814931649195671562>");
return;
}else {
message.channel.send("do i look like have fucking perms? to kick people? bruh");
return;
}
}/*/
if(command === "cbu"){
 if(message.author.id === OwnerID){
        // Create the backup
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("The backup has been created! To load it, type this command on the server of your choice: `"+prefix+"loadbu "+backupData.id+"`!");
        });
    }
}
if(command === "createbu"){
 if(message.author.id === OwnerID){
        // Create the backup
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("The backup has been created! To load it, type this command on the server of your choice: `"+prefix+"loadbu "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Backup successfully created. The backup ID was sent in dm!");
        });
    }
}
   if(command === "loadbu"){
    if(message.author.id === OwnerID){

        let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        // Fetching the backup to know if it exists
        backup.fetch(backupID).then(async () => {
            // If the backup exists, request for confirmation
            message.channel.send(":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    // if the author of the commands does not confirm the backup loading
                    return message.channel.send(":x: | Time's up! Cancelled backup loading!");
                });
                // When the author of the command has confirmed that he wants to load the backup on his server
                message.author.send(":white_check_mark: | Start loading the backup!");
                // Load the backup
                backup.load(backupID, message.guild).then(() => {
                    // When the backup is loaded, delete them from the server
                    backup.remove(backupID);
                }).catch((err) => {
                    // If an error occurred
                    return message.author.send(":x: | Sorry, an error occurred... Please check that I have administrator permissions!");
                });
        }).catch((err) => {
            console.log(err);
            // if the backup wasn't found
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
        });
    }
   }




if(command === 'svscount'){
if(message.author.id === OwnerID){
	const guild = message.guild;
const x = client.guilds.cache.size
	message.author.send('uhm so ' + x + ' lmao')
}
}
if(command === 'rape') {
const person = message.author
const target = message.mentions.users.first()
if(!target){
message.channel.send('oh no who you want to rape? :flushed:');
return;
}
const choice = [target.username + ' Got Raped successfully  <a:ok_bye:837823120995516426> now rip ass.', target.username + ' Likes that i think he want to get raped again :flushed:', 'oh shet i think ' + person.username + ' dont know how to rape, ' + target.username + ' just rape ' + person.username + '..<:kek_fp:831206880956776549>'];
const wat = Math.floor(Math.random() * choice.length);
 message.channel.send(person.username + ' raping ' + target.username + ' now...')
.then((msg) => {
 setTimeout(function(){ 
msg.edit(choice[wat])
}, 2000);
})
}
if (command === 'ddos') {
const person = message.author
const target = message.mentions.users.first()
if(!target){
message.channel.send('you gatta mention some one to ddos ill use my botnet to do dat');
return;
}
 message.channel.send('DDosing ' + target.username + ' now...')
.then((msg) => {
 setTimeout(function(){ 
msg.edit('port 80 timed out..DDosing port 22 now..')
}, 3000);
 setTimeout(function(){ 
msg.edit('Error our ip blocked wtf.:flushed:')
}, 6000);
 setTimeout(function(){ 
msg.edit('Using socks To by pass ip blocker...<:heheboi:838808643439820820>')
}, 9000);
 setTimeout(function(){ 
msg.edit('now using tcp flood to fuck ' + target.username + '..<a:dancedance:838150441346662430>')
}, 12000);
 setTimeout(function(){ 
msg.edit('Done ddos. now ' + target.username + ' get fucked up.')
}, 14000);
 setTimeout(function(){ 
msg.edit('Rest in peace ' + target.username + "'s internet <a:ok_bye:837823120995516426>")
}, 16000);
})
}
if (command === 'sex') {
const person = message.author
const target = message.mentions.users.first()
if(!target){
message.channel.send('zz chill out who you want to sex with who?');
return;
}
if(target.id === '440213617468506124'){
	message.channel.send('go fuck ur self');
	return;
}
const choice = ['Error No dick detected..:flushed:', 'error ' + target.username + ' is not horny enough to sex', 'ah yes '+ person.username + ' had hard sex with ' + target.username + '..:point_right::ok_hand:<a:Dance_spooky:838150365677355029>', 'Error 404 No p*ssy detected :flushed:'];
const wat = Math.floor(Math.random() * choice.length);
 message.channel.send(person.username + ' having sex with ' + target.username + ' now...')
.then((msg) => {
 setTimeout(function(){ 
msg.edit(choice[wat])
}, 2000);
})
}
if (command === 'fuck') {
const person = message.author
const target = message.mentions.users.first()
if(!target){
message.channel.send('woaaa slow down who you want to fuck dude?');
return;
}
if(target.id === '440213617468506124'){
	message.channel.send('go fuck ur self');
	return;
}
const choice = ['oh no ' + target.username + ' likes that...:flushed:', target.username + ' Rejected to get fucked by you!!<a:wtf:838150383163539547>', 'Error 404 dick not found to fuck ' + target.username];
const wat = Math.floor(Math.random() * choice.length);
 message.channel.send(person.username + ' is fucking ' + target.username + ' now...')
.then((msg) => {
 setTimeout(function(){ 
msg.edit(choice[wat])
}, 2000);
})
 }
  if (command === 'gender') {
const target = message.mentions.users.first()
if(!target) {
message.channel.send('i check gender of who? mention some one maybe ? lmao');
return;
}else {
const lmao = [target.username + ' is a Male', target.username + ' is a Female', target.username + ' is a trans gender <:kwek:804001643813273630>'];
const wut = Math.floor(Math.random() * lmao.length);
message.channel.send(lmao[wut]);
}	
}
 if (command === 'hackinfo') {
const target = message.mentions.users.first()
if(!target){
message.channel.send('plez mention sum 1 to hack hez info u nerd ass');
return;
}
if(message.author.id === target.id){
	message.channel.send('hack ' + target.username + '? dont hack ur self bruh');
	return;
}
message.channel.send('Hacking ' + target.username + ' Now Please Wait..').then((msg) => {
setTimeout(function(){ 
msg.edit('Cracking Discord Data Bases');
}, 3000);
setTimeout(function(){ 
msg.edit(target.tag + ' Account Is Hacked Please Waiting Sending Info..');
}, 6000);
setTimeout(function(){ 
const lmaos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const random = Math.floor((Math.random() * lmaos.length));
const random1 = Math.floor((Math.random() * lmaos.length));
const random2 = Math.floor((Math.random() * lmaos.length));
const random3 = Math.floor((Math.random() * lmaos.length));
const random4 = Math.floor((Math.random() * lmaos.length));
const random5 = Math.floor((Math.random() * lmaos.length));
const random6 = Math.floor((Math.random() * lmaos.length));
const random7 = Math.floor((Math.random() * lmaos.length));
const random8 = Math.floor((Math.random() * lmaos.length));
const random9 = Math.floor((Math.random() * lmaos.length));
const random10 = Math.floor((Math.random() * lmaos.length));
const x = lmaos[random];
const x1 = lmaos[random1];
const x2 = lmaos[random2];
const x3 = lmaos[random3];
const x4 = lmaos[random4];
const x5 = lmaos[random5];
const x6 = lmaos[random6];
const x7 = lmaos[random7];
const x8 = lmaos[random8];
const x9 = lmaos[random9];
const x10 = lmaos[random10];
const ip = [ x1 + x2 + '.' + x3 + x4 + x5 + '.' + x6 + x7 + '.' + x8 + x9];

const DHCP = ['DHCP is Enabled', 'DHCP is Disabled'];
const randomdh = Math.floor((Math.random() * DHCP.length));

const mac = ['02:00:00:00:00:00'];
const randomipv = Math.floor((Math.random() * mac.length));

let code = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 32; i++) {
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }

const lmaosz = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lmaosx = ['A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randomx1 = Math.floor((Math.random() * lmaosz.length));
const randomx2 = Math.floor((Math.random() * lmaosz.length));
const randomx3 = Math.floor((Math.random() * lmaosz.length));
const randomx4 = Math.floor((Math.random() * lmaosz.length));
const randomx5 = Math.floor((Math.random() * lmaosz.length));
const randomx6 = Math.floor((Math.random() * lmaosz.length));
const randomx7 = Math.floor((Math.random() * lmaosz.length));
const randomx8 = Math.floor((Math.random() * lmaosz.length));
const randomx9 = Math.floor((Math.random() * lmaosz.length));
const randomx10 = Math.floor((Math.random() * lmaosz.length));
const randomf1 = Math.floor((Math.random() * lmaosx.length));
const randomf2 = Math.floor((Math.random() * lmaosx.length));
const y1 = lmaosz[randomx1];
const y2 = lmaosz[randomx2];
const y3 = lmaosz[randomx3];
const y4 = lmaosz[randomx4];
const y5 = lmaosz[randomx5];
const y6 = lmaosz[randomx6];
const y7 = lmaosz[randomx7];
const y8 = lmaosz[randomx8];
const y9 = lmaosz[randomx9];
const y10 = lmaosz[randomx10];
const n1 = lmaosx[randomf1];
const n2 = lmaosx[randomf2];
const pyadrs = [y1 + y2 + '-' + y3 + y4 + '-' + y5 + y6 + '-' + y7 + y8 + '-' + y9 + n1 + '-' + n2 + y10];

let azz = "";
    let dictx = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 4; i++) {
        azz = azz + dictx.charAt(Math.floor(Math.random() * dictx.length));
    }
const accountx = [target.username + '7820', 'xxx' + target.username + 'xxx01', y1 + y2 + target.username + azz, azz + target.username + '091']
const accran = Math.floor((Math.random() * accountx.length));
const acct = ['@gmail.com', '@outlook.com', '@email.com', '@icloud.com', '@hotmail.com', '@me.com']
const ranz = Math.floor((Math.random() * accountx.length));
const account = accountx[accran] + acct[ranz]

let paz = "";
    let dictz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@";
    for (var i = 0; i < 8; i++) {
        paz = paz + dictz.charAt(Math.floor(Math.random() * dictz.length));
    }
const passx = ['100xx03871874xx001', '00' + paz + target.username + '000', 'z' + target.username + paz + '00']
const passran = Math.floor((Math.random() * passx.length));
const passwordz = passx[passran]

let kode = "";
    let dictz1 = "1234567890";
    for (var i = 0; i < 6; i++) {
        kode = kode + dictz1.charAt(Math.floor(Math.random() * dictz1.length));
    }
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(target.username)
	.setURL('https://discord.gg/Mr3SEhvucp')
	.setAuthor(target.tag, 'https://cdn.discordapp.com/attachments/720223182149386271/846719749026742282/download.png', 'https://discord.gg/Mr3SEhvucp')
	.setDescription('ID: ' + target.id)
	.setThumbnail(target.displayAvatarURL({size: 1024}))
	.addFields(
		{ name: 'IP Address:', value: ip },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Mac:', value: mac[randomipv], inline: true },
		{ name: 'Physical Address', value: pyadrs, inline: true },
	)
	.addField('RID', code, true)
	.addFields(
		{ name: 'Account:', value: account },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Password:', value: passwordz, inline: true },
		{ name: 'Code:', value: kode, inline: true },
	)
	.setTimestamp()
	.setFooter(DHCP[randomdh], target.displayAvatarURL({size: 1024}));
	msg.edit(exampleEmbed)
}, 10000);
});
 }
 if (command === 'hack') {//hi if ur reading this go suck my finger haha loser poopo head gay go away no one likes you, get my hate b*tch(sorry am toxic asf cuz am hyped) and YOUR A NERDDDDDDDDDDDDDDDDDD
const target = message.mentions.users.first() || message.author
const choice1 = ['*****', '******', '*******', '********'];
const choice2 = ['@gmail.com', '@outlook.com', '@email.com'];
const pass = ['123456789', 'xxx'+ target.username + 'xx01', 'totallyNotThePassWorld123', '0987654321', 'mydiscordpassworld123'];
const choice1a = Math.floor(Math.random() * choice1.length);
const choice2a = Math.floor(Math.random() * choice2.length);
const pass1 = Math.floor(Math.random() * pass.length);
message.channel.send('[▖] Hacking.. ' + target.username + ' now...')
.then((msg) => {
setTimeout(function(){ 
msg.edit('[▖] **Bypassing** 2FA')
}, 2000);
setTimeout(function(){ 
msg.edit(`
Email: ` + target.username + choice1[choice1a] + choice2[choice2a] + `
pass: ` + pass[pass1] + `
`)
}, 4000);
setTimeout(function(){ 
msg.edit(`[▖] **Hacking** The ip address...`)
}, 6000);
setTimeout(function(){ 
const choice = ['127.0.0.1:53', '127.0.0.1:74', '127.0.0.1:80', '127.0.0.1:98', '127.0.0.2:69'];
const wat = Math.floor(Math.random() * choice.length);
msg.edit('[▖] **ip address**: ' + choice[wat] + ' <a:kek_holdup:831206895187394600>')
}, 8000);
setTimeout(function(){ 
msg.edit('[▖] **Hacking** The Mac Adress...')
}, 10000);
setTimeout(function(){ 
msg.edit('[▖] **Mac address**: 02:00:00:00:00:00 :flushed:')
}, 12000);
setTimeout(function(){ 
msg.edit('[▖] **DDosing** The Device Now...<a:omgadlol:838151622147833886>')
}, 14000);
setTimeout(function(){ 
msg.edit('[▖]Reporting The account to discord for Breaking TOS and getting The discord account banned..<a:ohyea:838151864709021757>')
}, 16000);
setTimeout(function(){ 
msg.edit('[▖]Hacked ' + target.username + '.<:fp:831193803565301821>')
}, 20000);
setTimeout(function(){ 
msg.edit('[▖]Now Rest In Peace ' + target.username + ' <a:ok_bye:837823120995516426>')
}, 22000);
setTimeout(function(){ 
msg.edit('[▖]ill take care of your sister and mom <a:Troll:838570902794141738>')
}, 24000);
setTimeout(function(){ 
msg.edit('[▖]Ok bye <a:Dance_spooky:838150365677355029>,' + target.username + ' Hacked..')
}, 26000);
});
 }
if(command === 'av' || command === 'avatar'){
const target = message.mentions.users.first() || message.author;
const avashit = target.displayAvatarURL({size: 1024})
 const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setAuthor(target.username + " Profile Photo")
        .setImage(avashit);
    message.channel.send(avatarEmbed);
}

if(command === 'changep'){
if(message.author.id === OwnerID){
const x = args[0]
prefix = x
message.channel.send('k now my prefix is '+ x)
}
}
if(command === 'deletem'){
if(message.author.id === OwnerID){
const y = args[1]
let deleten = args[0]
const x = client.channels.cache.get(y)
const channel = x || message.channel;
if(deleten > 100){
	message.channel.send('uhm just from 1 to 100 my boi')
return;
}
	channel.bulkDelete(deleten)
}
}

 if(command === 'spk'){
	 if(message.channel.type === 'dm'){
message.channel.send('stfu lol')
return;
	 }
const target = message.mentions.users.first();
const channel = message.channel;
let contentz = args.slice(1).join(' ')
if(!target) {
	message.channel.send('mention some one to spk.');
	return;
}
if(!contentz){
	message.channel.send('disaplay your msg you want to spk.');
	return;
}
if(message.mentions.roles.first()){
	message.reply('your msg contains banned words so stfu and dont try ping all with this command idiot')
return;
}
if (message.content.includes('@everyone') || message.content.includes('@here')){
message.reply('your msg contains banned words so stfu and dont try ping all with this command idiot')
return;
}
if(contentz.includes('@')){
	message.reply('you cant do that LMFAO, idiot')
return;
}
channel.fetchWebhooks()
.then(hooks =>
hooks.first().send(contentz, {
username: target.username,
	avatarURL: target.displayAvatarURL({size: 1024}),
	message: [contentz],
}))
.catch( err => {
message.channel.createWebhook('gay', { avatar: 'https://media.discordapp.net/attachments/719920012059738123/828359714731589672/cool.png' })
.then(hooks =>
channel.fetchWebhooks()
.then(hooks => {
hooks.first().send(contentz, {
username: target.username,
	avatarURL: target.displayAvatarURL({size: 1024}),
	message: [contentz],
})
const Owner = client.users.cache.get(OwnerID)
const x = '<#' + channel.id + '>'
Owner.send('©[Spk-Logs] Created New Webhook : ' + hooks.first().id + '/' + hooks.first().token + '/channel : ' + x)
}))
 })
 }
 

if (command === 'send') {
		 if(message.author.id === OwnerID){
const target = message.mentions.channels.first();
if (!target) return message.reply('uhm, mention channel.')
let content = args.slice(1).join(' ')
if(message.mentions.has(bot.user)) return;
if (!content) return message.reply('send what?')
target.send(content)
}else {
	message.channel.send('gay ass this just for owner of bot you can fuc all servers with it');
}
}

if (command === 'invite' || command === 'inv') {
return message.reply('https://discord.com/api/oauth2/authorize?client_id=811301264570187786&permissions=8&scope=bot')
}
if (command === 'dm') {
if(message.mentions.users.first()){
const target = message.mentions.users.first();
if (!target) return message.reply('maybe provide name?')
let content = args.slice(1).join(' ')
if(message.mentions.has(bot.user)) return;
if (!content) return message.reply(`type what you want to send to him`)
if(content.includes === "discord.gg/"){
	message.channel.send('no links allowed on dms gay ass');
	return;
}
target.send(content)
}else {
	if(message.author.id === OwnerID){
const userid = args[0]
let content = args.slice(1).join(' ')
const person = client.users.cache.get(userid)
if(message.mentions.has(bot.user)) return;
if (!content) return message.reply(`type what you want to send to him`)
person.send(content)
	}
}
}
 if (command === 'startres') {
	 if(message.author.id === OwnerID){
		
	  if (autorespond){
		   message.channel.send('wtf.. wait i think auto respond is already enabled');
		   return;
	  }else {
const poopo = message.guild.id;
	console.log('Auto Respond has been Enabled'.green);
	epx = message.guild.id
	autorespond = true;
  return;
 }
	 }else {
		  message.channel.send('hoho you cant let me auto respond this is just for owner');
		 return;
	 }
 }
 if (command === 'stopres') {
	 if(message.author.id === OwnerID){
	 
	 
	 if (!autorespond){
		 message.channel.send('dude the auto respond already disabled');
		 return;
	 }else {
	console.log('Auto Respond has been Disabled'.red)
	autorespond = false;
  return;
  
 }
	 }else {
		 message.channel.send('what did you expect to be honest just owner can stop me');
	 return;
	 }
}
  if (command === 'check') {
	console.log(`Total heap size (bytes) ${totalHeapSize}, (GB-${totalHeapSizeInGB})`);
	message.channel.send(`Total heap size (bytes) ${totalHeapSize}, (GB-${totalHeapSizeInGB})`);
	return;
 }	

     if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        console.log('Bot Result:', result);
        if (result === choice){
			message.reply(result);
			message.reply("It's a tie! We had the same choice lmao.")
			startgames = false;
			return;
        }
        switch (choice) {
            case 'rock': {
                if (result === 'paper'){
					 message.reply(`${result}`);
					  message.reply('Well i think i just won noob');
					  coins -= 1;
					  startgames = false;
					  return;
				} else {
					message.reply(result);
				 message.reply('aha you just won ');
				 coins += 1;
				 startgames = false;
				 return;
				}
            }
            case 'paper': {
                if (result === 'scissors'){
					 message.reply(`${result}`);
					  message.reply('lols i just won why ur soo noob??');
					  		  coins -= 1;
					  startgames = false;
					  return;
			} else {
				message.reply(result);
                 message.reply('fok you i just lost infront of noob : ('); 
							  coins += 1;
				 startgames = false;
                    return;				 
            }
			}
            case 'scissors': {
                if (result === 'rock'){
				 message.reply(`${result}`);
					  message.reply('boom yea i just won dat shet');
					  coins -= 1;
					  startgames = false;
					  return;
				} else {
					message.reply(result);
					message.reply('god dammmmmmmmmmm i just loooooooooooost nooo');
					coins += 1;
					startgames = false;
					return;
            }
			}
            default: {
                return message.channel.send('uhm whats that???');
            }
		}
	}
	if (command === 'dmeme') {
	       const choice = ['https://media.discordapp.net/attachments/764619923678429224/765644733590405170/image0-66.png', 'https://media.discordapp.net/attachments/764619923678429224/772143100444409946/hey_shitass.jpg', 'https://media.discordapp.net/attachments/764619923678429224/774433592591253524/image0.png?width=585&height=676', 'https://media.discordapp.net/attachments/764619923678429224/774273889391869952/image0.png', 'https://media.discordapp.net/attachments/265156361791209475/622454661563285517/sppofsqlnjm31.png', 'https://media.discordapp.net/attachments/764619923678429224/777891096348721152/0372m8ai5qw41.png', 'https://cdn.discordapp.com/attachments/764619923678429224/769277730008072232/unknown.png', 'https://media.discordapp.net/attachments/764619923678429224/780167486892277770/50351557c8b77d00c71f01702d26e96b3b32cf740d003fb498679ff19369e2c9_1.jpg.jpg?width=418&height=676', 'https://media.discordapp.net/attachments/764619923678429224/780727156803633182/9k.png', 'https://media.discordapp.net/attachments/764619923678429224/783035684167745556/Screenshot_20200724-082716_Twitter.jpg?width=559&height=675', 'https://media.discordapp.net/attachments/764619923678429224/783035683165700106/Screenshot_20200906-175711_Twitter.jpg?width=561&height=676', 'https://media.discordapp.net/attachments/764619923678429224/783035531319443496/Screenshot_20200918-212431_Easy_Meme_Maker.jpg', 'https://media.discordapp.net/attachments/764619923678429224/783035396492754974/IMG_20201126_212714.jpg?width=624&height=676', 'https://media.discordapp.net/attachments/764619923678429224/783035087407022080/Screenshot_20201130-095336_Google.jpg', 'https://media.discordapp.net/attachments/764619923678429224/783035039445286944/image2.jpg?width=530&height=676', 'https://cdn.discordapp.com/attachments/764619923678429224/784060124146696222/r_1991329_A1RXn.png', 'https://media.discordapp.net/attachments/764619923678429224/786579020753928232/antidisestablishmentaryan_20201210_060146_0.jpg', 'https://media.discordapp.net/attachments/764619923678429224/789095592294613012/image0.jpg', 'https://cdn.discordapp.com/attachments/764619923678429224/789144682805985330/image0.jpg', 'https://media.discordapp.net/attachments/764619923678429224/787267963438497872/random.couch.memes_20201210_235648_0.jpg', 'https://media.discordapp.net/attachments/764619923678429224/789540098236350524/image0-8-2.png', 'https://media.discordapp.net/attachments/764619923678429224/790615192065015869/4r6yfe.png', 'https://media.discordapp.net/attachments/764619923678429224/790866621626843176/image0-22.png', 'https://cdn.discordapp.com/attachments/764619923678429224/791700032448495636/image0.png', 'https://images-ext-2.discordapp.net/external/lIiy0BBm7nULO_ycBkXv2BXpmiN6UfDhYjCD-uF7kzo/https/media.discordapp.net/attachments/757992461951041669/791749120704512020/image0.png', 'https://media.discordapp.net/attachments/764619923678429224/792064600832999494/20201225_161937.jpg?width=821&height=676', 'https://cdn.discordapp.com/attachments/764619923678429224/793163923775422494/SmartSelect_20201226-213654_YouTube.jpg', 'https://media.discordapp.net/attachments/764619923678429224/793618145742159932/Screenshot_20200926-154355.png?width=338&height=676', 'https://images-ext-2.discordapp.net/external/WHywNhZW4-1WTt7Od_ZHy3I6Yr3nYtNhS1ZBe0FuvSQ/%3Fwidth%3D414%26height%3D702/https/media.discordapp.net/attachments/707019719957413978/791523523276570644/image0.png?width=398&height=676', 'https://media.discordapp.net/attachments/764619923678429224/795810315962810418/image0.png', 'https://media.discordapp.net/attachments/764619923678429224/795817900937838632/image0.png', 'https://media.discordapp.net/attachments/764619923678429224/795994504859615242/20210105_123448.jpg?width=651&height=676', 'https://media.discordapp.net/attachments/764619923678429224/796324857209815050/image0.png?width=597&height=676', 'https://tenor.com/view/javascript-hadouken-code-programming-gif-16271428', 'https://media.discordapp.net/attachments/764619923678429224/797310295898193970/IMG_20210109_091537.jpg?width=874&height=676', 'https://media.tenor.co/videos/4f7f89e9df1b1987bbd02dbfb6c90ccf/mp4', 'https://media.discordapp.net/attachments/764619923678429224/798843056308092938/image0.jpg?width=366&height=675', 'https://cdn.discordapp.com/attachments/764619923678429224/801843562231758889/auuj1s3tr0d51.png', 'https://media.discordapp.net/attachments/764619923678429224/806131720759803934/FB_IMG_1611594430733.jpg?width=425&height=676', 'https://media.discordapp.net/attachments/764619923678429224/806180044212142120/image0.png', 'https://media.discordapp.net/attachments/764619923678429224/807736268137955348/zosbcd5v1tf61.png', 'https://cdn.discordapp.com/attachments/764619923678429224/807681496953520158/ErDu-8JXUAAARqR.png', 'https://media.discordapp.net/attachments/764619923678429224/807304623006154752/FB_IMG_1612524998102.png?width=676&height=676', 'https://media.discordapp.net/attachments/546394375907704843/807258258204655626/202a5c8.png?width=559&height=676', 'https://media.discordapp.net/attachments/764619923678429224/808087382208544798/image0.png?width=949&height=676', 'https://media.discordapp.net/attachments/764619923678429224/808436081116053504/unknown-3.png', 'https://images-ext-1.discordapp.net/external/x-zsvMvpfn1eyR0aQin6wDdd9eljWLS_YWlaDcOOLf4/https/images-ext-1.discordapp.net/external/Eo7TkXbPoGmzIqE9-u3dYKnhbR7o7LQ_dXD3wSrPGJ0/https/images-ext-2.discordapp.net/external/TS6VOyUuZxxzP6wtt4JMqdAflSkcajnkbkhS6BKsy-k/https/i.redd.it/8zpd2ukrz7g61.png', 'https://media.discordapp.net/attachments/764619923678429224/808288737763000360/unknown.png?width=496&height=675', 'https://media.discordapp.net/attachments/627488733439983617/795422982272057364/image0.png?width=549&height=676', 'https://media.discordapp.net/attachments/260896487318355968/810112675832135690/Screenshot_at_2021-02-13_03-38-18.png', 'https://media.discordapp.net/attachments/806301031087472680/811048913297604618/e67867b.jpg', 'https://media.discordapp.net/attachments/812723382852124702/812740568936742942/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812740712864940072/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812741296472588369/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812741464932483132/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812744298093084673/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812744502414147584/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812745646729592872/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812745809371463690/CYQCdLtUQAAovBy.png?width=403&height=676', 'https://media.discordapp.net/attachments/812723382852124702/812746171662860298/images.png', 'https://media.discordapp.net/attachments/812723382852124702/812746339372761178/1cf7306d385f13ff99f3ba19855480dca2f01a0d_00.png', 'https://media.discordapp.net/attachments/812723382852124702/812746959085109338/ad8ps.png', 'https://media.discordapp.net/attachments/764619923678429224/812227366029492234/image0.jpg', 'https://media.discordapp.net/attachments/764619923678429224/812716916208173096/20210108_220702.jpg?width=676&height=676', 'https://media.discordapp.net/attachments/764619923678429224/812355906179694652/20210126_183303.png', 'https://cdn.discordapp.com/attachments/764619923678429224/812351926704275456/SPOILER_SPOILER_SPOILER_SPOILER_image0-17-2.png', 'https://media.discordapp.net/attachments/764619923678429224/812224672946847754/image0.jpg', 'https://media.discordapp.net/attachments/764619923678429224/812052674542567504/SPOILER_moda-confusa-01.jpg', 'https://media.discordapp.net/attachments/805885871555477545/805886338590572614/x8e1wr60xve61.png?width=494&height=494', 'https://media.discordapp.net/attachments/805885871555477545/805886291023233085/tjong3qh5ve61.png', 'https://media.discordapp.net/attachments/805885871555477545/805886249125806100/14cs24dirve61.png?width=494&height=494', 'https://media.discordapp.net/attachments/805885871555477545/805886158701592616/Screenshot_20210125-222157.png?width=264&height=494', 'https://media.discordapp.net/attachments/805885871555477545/805886508333924403/mzxsvpyhave61.png', 'https://media.discordapp.net/attachments/805885871555477545/805886721836318811/aqbc40y7bue61.png?width=481&height=494', 'https://media.discordapp.net/attachments/805885871555477545/806216195871080478/o2nhdupnz1f61.png?width=483&height=494', 'https://media.discordapp.net/attachments/805885871555477545/806218263348117554/o1fyp0yhf2f61.png?width=365&height=494', 'https://media.discordapp.net/attachments/805885871555477545/806636444177137664/mebegv5dovq51.png?width=412&height=494', 'https://media.discordapp.net/attachments/805885871555477545/809384557350092810/FB_IMG_1613035409648.png?width=497&height=494', 'https://media.discordapp.net/attachments/812723382852124702/812725050368720929/mqdefault.png', 'https://media.discordapp.net/attachments/812723382852124702/812723463847804978/2Q.png'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
	}
 if (command === 'dmemes') {
	       const choice = ['https://cdn.discordapp.com/attachments/756571226960429097/808141652237221928/VID-20210208-WA0025.mp4', 'https://cdn.discordapp.com/attachments/808971679602704404/816042504427274320/VID-20210228-WA0061.mp4', 'https://cdn.discordapp.com/attachments/808971679602704404/816039849416589404/VID-20210228-WA0004.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481459788414996/c89484bb96ebfd2ca644a2fa12083ad5.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481424739893298/875bdb2c1a55ddad52ee504ec9299350.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481388292571216/432ddc92e8d0a56574f5238e1b068133.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481346314928128/483f5eedb1a67a2e3f13ce2e0eef18ed.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481124013015080/09e654390a6ce07cdbf8de769a91537a.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813481065095102464/de50fe343406c14d88830332c3d1a0fd.mp4', 'https://cdn.discordapp.com/attachments/798063336268759040/813480293477515345/e1b2edeb41f8c8707f7a02dbbfa7e6ff.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/765176013990526976/video0.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/765172314014089236/video0-35.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/764977161484369940/women_moment.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/764669561098076170/3bolu2_on_Instagram___Aaaaaah_mis_ojos_Siganme_y_denle_a_like_._._._._._._._._._._._._._._._.__dylan.mp4', 'https://cdn.discordapp.com/attachments/571353837495910406/764143787214635028/Anime_Meme_Expert_on_Instagram___We_just_want_everyone_s_attention_--_Credit_to__sharkjumps__Ignore_.mp4', 'https://cdn.discordapp.com/attachments/722830528042237962/762760934577537036/video0.mp4', 'https://media.tenor.co/videos/da1a3ab30fa9162ef2fe6333c233becd/mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/771754895812329502/video0_25-1-1-1.mp4', 'https://images-ext-2.discordapp.net/external/u4i5LjCzPpPebjd3i2OPwOk-VONCJojCC6EteU6TBr4/https/media.discordapp.net/attachments/592728864887930890/769580522098786334/image0-16.gif', 'https://cdn.discordapp.com/attachments/696586356553547866/771181839775825960/SPOILER_WhenButHow.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/769860855570890752/video0.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/769860773811322910/video0.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/769074960253059122/Gatito.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/768873015094018078/Cat_on_a_record_player.mp4', 'https://tenor.com/view/meme-do-gato-meme-cat-red-eyes-meow-glowing-eyes-gif-17517930', 'https://cdn.discordapp.com/attachments/764619923678429224/768492347524644885/video1.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/767042728168521748/Pipi_pupu360P_1.mp4', 'https://cdn.discordapp.com/attachments/758470055133839375/766756333487128586/admin.mp4', 'https://cdn.discordapp.com/attachments/696586356553547866/776183200211795988/124976503_870417700162642_3396028296561692322_n.mp4', 'https://cdn.discordapp.com/attachments/353766146115371009/774075472756736051/video0.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/773330637339623458/122724656_191696292407139_7373458452252739505_n.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/772931323420475432/Tiktok_thot_solves_homelessness_meme.mp4', 'https://img.ifunny.co/videos/6de18804fd1ec7315583d4a053d57f8469bc81f7512711239e4df7ac9c9c5073_1.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/780167536909877248/no.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/782827439905570876/fast_clap.mp4', 'https://tenor.com/view/discord-gif-18788620', 'https://cdn.discordapp.com/attachments/761762042121814017/783350386241175552/video0-6-1.mp4', 'https://cdn.discordapp.com/attachments/732800366772748443/782949631595380797/video0.mp4', 'https://media.tenor.co/videos/bda12ad57dc1f4a983ff587d174315d6/mp4', 'https://media.tenor.co/videos/208df13e615ca5d3e9207dba65dc3d4e/mp4', 'https://media.discordapp.net/attachments/764619923678429224/783035398036258837/e9d.gif', 'https://tenor.com/view/timotainment-gif-19059294', 'https://cdn.discordapp.com/attachments/704375618430566425/781541500034613258/video0-2.mov', 'https://cdn.discordapp.com/attachments/764619923678429224/782914043563474944/127071504_706316860282466_4958022499884458915_n.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/782976867346284594/Rickroll.mp4', 'https://cdn.discordapp.com/attachments/658797781623767040/786316680322088970/catpop-1.mp4', 'https://cdn.discordapp.com/attachments/752943229820862499/752945201802248240/based_boppin_cat.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/788789743470379038/Jacob_Get_Off_The_Xbox_360.-360p.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/788788896514310224/How_the_ps2_startup_sound_was_made-480p.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/788788866173239306/I_WANT_TO_BE_A_TERRORIST_MEME-360p.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/789108573078552606/video0_6.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/789620722979831808/video0-7.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/790052603785641984/125852715_373704287296471_3937114016392013994_n.mp4', 'https://tenor.com/view/cat-kitty-kitten-cute-pussy-cat-gif-15745510', 'https://cdn.discordapp.com/attachments/788918700634800128/790301774657224704/Trava_discord.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/790654847400804362/a-good-way-to-use-a-shoe-you-dont-need_o_1159425.gif', 'https://cdn.discordapp.com/attachments/764619923678429224/791366614213722182/yngfloppa_24583507547227116062_2_20201207225131024.mp4', 'https://cdn.discordapp.com/attachments/412468107727339538/792503256303009812/video0-9.mp4', 'https://cdn.discordapp.com/attachments/755024333138821191/792482129174331392/video9.mp4', 'https://cdn.discordapp.com/attachments/730301001440952371/790013388717686784/video0-2-1.mp4', 'https://cdn.discordapp.com/attachments/755024333138821191/792451870920409088/Universe.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/792757514806493184/cat_1.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/794388033281458206/drip.mp4', 'https://cdn.discordapp.com/attachments/742267922017288272/796758319305195601/cal_an_ambiulence_cal_an_ambiulence_but_nat_far_mi.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/797919949628112936/Gunslinger.mp4', 'https://cdn.discordapp.com/attachments/796087628365430836/800644218790871070/Okay.mp4', 'https://tenor.com/view/me-2020and-me-me-and2020-life-forget2020-gif-17835171', 'https://images-ext-1.discordapp.net/external/bKmD4iaxsSzkZdF3IJI1hWTqiYDZ99lWc43xYjMsYMo/%3Fcid%3D73b8f7b1469176c1d8db3ce1cf41eea17d660c2a20838756%26rid%3Dgiphy.mp4/https/media0.giphy.com/media/FgiHOQyKUJmwg/giphy.mp4', 'https://cdn.discordapp.com/attachments/768675641779814421/805584573663543356/143051574_882566832492837_3527632738114050527_n.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/806144929071497226/video0.mp4', 'https://tenor.com/view/monke-reject-humanity-become-monke-gif-18954966', 'https://cdn.discordapp.com/attachments/378656025009717252/806217007729082448/video0.mp4', 'https://images-ext-1.discordapp.net/external/-e2EzGLtefu4QTRLdSCWD9BbQMLkYpbhuXGSUdxmYRM/https/giant.gfycat.com/GrandNegativeAardwolf.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/807929158469550160/what_people_think_programmers_do.mp4', 'https://cdn.discordapp.com/attachments/770407916506185731/807900424539078706/redditsave.com-my_leg_is_broken-hnhgjc666zf61-360.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/808215988419821568/video0_30.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/808215931847049256/mp4.mp4',  'https://media.tenor.co/videos/1e87cd18ebf3612b41d86604fe8cfa0f/mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/808568839444496394/video0-6.mp4', 'https://cdn.discordapp.com/attachments/739380037668831312/808623329400717352/im_joking.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761544385986560/Epic.mp4', 'https://cdn.discordapp.com/attachments/764619923678429224/808273347065806848/HowToDriveACar.mp4', 'https://cdn.discordapp.com/attachments/741629862359335012/809110507369529434/video0-49.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761525766815754/distracted.mp4', 'https://cdn.discordapp.com/attachments/739380037668831312/800556251510472724/Cosplay_Remake.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805760407426957322/video0_11.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805760407088136202/134454003_386263362451471_5810725414732781409_n.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805760406831759400/video0_3_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805760406479699988/this_class_is_so_boring_smh-1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805760406106275881/Lionel_on_Instagram___nice___Follow_me__lwb_.__.__________________________wholesomemes__dankmemes__c.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764978208014336/31b65be6a59981a680f9c5b772d8592e.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764977927520296/2d7a4f78ad9c568724f6a2c229320abf89f7a42ea445544774e3d83a91aafa33_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764977633132544/video0-5.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764977246994482/video0_45.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764975318663198/video0_58.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764937841639424/9ifY4H6FM7W1zJAk.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764628650262568/dog_clappin_cheeks_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764628163985408/video0_13.mov', 'https://cdn.discordapp.com/attachments/764619923678429224/811167090806882324/video0.mp4', 'https://cdn.discordapp.com/attachments/739380037668831312/769869528657559592/Male.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764627685179422/DANCE_TIME.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764627409272882/HCN4tHJDsfi3Cuu3.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764627081592872/video0_3.mov', 'https://cdn.discordapp.com/attachments/805759444176076830/805764492595036220/video0_46.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764314057277530/135273545_185247136666585_6059364503938806362_n.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764313234014208/Adidas_2.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764232443461652/song.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761864080031804/video0.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761851002060800/yG91gVJVlNjqDypXp5qPFX7LnQVNXQ6K0UilytFK1SPYiRRSKW-1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761829548326952/video0-10.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761821611917312/video1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761802456793098/video0_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761772425707521/video0-174-1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761734295683102/video0_16.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761664774701066/this_stickbug_will_distract_you.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761646273364008/received_434675937488801.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761632235552778/No_more_saying_cuss_words.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761619833389131/InShot_20200828_142826066.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761616095477760/mario_pistola.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761593836044338/Im_out.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761577990750208/gottem-20200831-0001.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761558696165406/El_sentido_de_la_vida_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805761558411476992/fek_u.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996420938170408/Untitled_33_720p_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996298833068092/Untitled_33_720p.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996298833068092/Untitled_33_720p.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996210102698034/Untitled_33_720p_4.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996209596235776/Untitled_33_720p_5.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996077319684146/Untitled_33_720p_7.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996076589744178/Untitled_33_720p_8.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996075839225876/Untitled_33_720p_9.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806995695914975252/Untitled_33_720p_6.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806995694333591572/Untitled_33_720p_10.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806995692744081488/Untitled_33_720p_11.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806126620972548186/History_in_a_nutshell360P.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806126620460974100/you_want_to_see_my_gun480P.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806125618508464128/SniffyJoe.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806125343625707570/360P.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806125210377650176/VID-20210111-WA0005.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805888756351369257/VID-20210201-WA0069.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805887218299437087/py1bz3u55ve61.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805881518886879273/Untitled_32_720p.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805880185731285072/video0.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805878340628119642/video0_25.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805878340203446302/NOOOOOOOOOOO_https___t.co_0ooTPNdNeG.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805878339872620544/6641e4c02e731fdc7d2fb853fa118ecad9b7867490a251bd801beded4d58773f_1.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805878339587670086/Zeus.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805765133578141756/video0_57.mp4', 'https://cdn.discordapp.com/attachments/653473781393653800/827532460229263370/video0.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764978857738261/child_go_round_and_round_round_and_round_round_and_round.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/805764978572394516/sta1352414.mp4', 'https://cdn.discordapp.com/attachments/805759444176076830/806996631437180945/Untitled_33_720p_3.mp4'];
  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(choice[wut]);
  return
 }
  if (command === 'antipromote') {
	  if(message.author.id === OwnerID){
	  if(promote){
		        message.channel.send('Anti promote has been turned off');
				promote = false;
				return;
	  }else {
		  var guildn = message.guild;
		  		        message.channel.send('Anti Promote is on now');
		  promote = true;
  }
  }else {
	  message.channel.send('huh? tsk tsk tsk go away..');
  }
  }
	  
    if (command === 'sinfo') {
const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  }
    if(command === 'sexy'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
	  	  const targets1 = message.mentions.users.first().id;
   const minn = 1;
  const maxx = 100;
  const pers = '<@' + targets + '>';
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
 message.channel.send('checking How sexy is ' + pers + '...')
  .then((msg) => {
	  setTimeout(function(){ 
	  if(targets1 == '740325461267054682'){
		  msg.edit(pers + ' is 100% Sexy')
		  return;
	  }
  msg.edit(pers + ' is ' + loll + '% Sexy')
}, 2000);
  })
  return;
	   }else {
  const min = 1;
  const max = 100;
    const pers = '<@' + message.author.id + '>';
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send('checking How sexy is ' + pers + '...')
  .then((msg) => {
	  setTimeout(function(){ 
  msg.edit(user + ' is ' + lol + '% Sexy')
}, 2000);
  })
	   }
	   return;
  }
   if(command === 'howthin'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% thin')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% thin')
	   }
	   return;
  }
   if(command === 'howfat'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% fat')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% fat')
	   }
	   return;
  }
      if(command === 'howpro'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% pro')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% pro')
	   }
	   return;
  }
      if(command === 'hownoob'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% noob')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% noob')
	   }
	   return;
  }
    if(command === 'howhorny'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% horny')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% horny')
	   }
	   return;
  }
  if(command === 'howgay'){
	   if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
   const minn = 1;
  const maxx = 100;
  const loll = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
  message.channel.send('<@' + targets + '>' + ' is ' + loll + '% gay')
  return;
	   }else {
  const min = 1;
  const max = 100;
  const lol = Math.floor(Math.random() * (max - min + 1)) + min;
  message.channel.send(user + ' is ' + lol + '% gay')
	   }
	   return;
  }
  if(command === 'vps'){
const lmaos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lmaos1 = ['vps', 'gay', 'GTPS', 'ProVps', 'vpsname', 'mrgay', 'sexyvps', 'nobodyvps', 'bruh', 'lmao', 'zxnyvps'];
const random = Math.floor((Math.random() * lmaos.length));
const random1 = Math.floor((Math.random() * lmaos.length));
const random2 = Math.floor((Math.random() * lmaos.length));
const random3 = Math.floor((Math.random() * lmaos.length));
const random4 = Math.floor((Math.random() * lmaos.length));
const random5 = Math.floor((Math.random() * lmaos.length));
const random6 = Math.floor((Math.random() * lmaos.length));
const random7 = Math.floor((Math.random() * lmaos.length));
const random8 = Math.floor((Math.random() * lmaos.length));
const random9 = Math.floor((Math.random() * lmaos1.length));
const x = lmaos[random];
const x1 = lmaos[random1];
const x2 = lmaos[random2];
const x3 = lmaos[random3];
const x4 = lmaos[random4];
const x5 = lmaos[random5];
const x6 = lmaos[random6];
const x7 = lmaos[random7];
const x8 = lmaos[random8];
const x9 = lmaos1[random9];
let pass = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+-|!@#$%^&*";
    for (var i = 0; i < 9; i++) {
        pass = pass + dict.charAt(Math.floor(Math.random() * dict.length));
	}
message.channel.send(`ok here your vps: 
ip: ||` + x + x1 + '.' + x2 + x3 + '.' + x4 + x5 + x6 + '.' + x7 + x8 + `||
name: ||` + x9 + `||
passworld: ||` + pass + '||')
}
  if(command === 'pp'){
	  if(message.mentions.users.first()){
	  const targets = message.mentions.users.first();
	  const choice = ['8D', '8=D', '8==D', '8===D', '8====D', '8=====D', '8======D', '8=======D', '8========D', '8=========D', '8==========D',  '8===========D', '8============D', '8=============D', '8==============D', '8===============D', 'Sorry i didnt find a penis to scan maybe shes female']
	  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send('<@' + targets + '>' + ' penis size: ' + choice[wut]);
  return;
	  }else {
 const choice = ['8D', '8=D', '8==D', '8===D', '8====D', '8=====D', '8======D', '8=======D', '8========D', '8=========D', '8==========D',  '8===========D', '8============D', '8=============D', '8==============D', '8===============D', 'Sorry i didnt find a penis to scan maybe shes female']
	  const wut = Math.floor(Math.random() * choice.length);
  message.channel.send(user + ' penis size: ' + choice[wut]);
  return;
  }
  }
 
});
const clientt = new Discord.Client(["MANAGE_MESSAGES"]);

const snake = new SnakeGame();
const hangman = new HangmanGame();
const minesweeper = new MinesweeperGame();
const connect4 = new Connect4Game();
const chess = new ChessGame();
const ticTacToe = new TicTacToeGame();


const playerGameMap = {};
const commandGameMap = {
    '-snake': snake,
    '-hangman': hangman,
    '-connect4': connect4,
    '-minesweeper': minesweeper,
    '-chess': chess,
    '-tictactoe': ticTacToe
};
client.on('message', msg => {
        if (commandGameMap.hasOwnProperty(msg.content.toLowerCase())) {
            const game = commandGameMap[msg.content.toLowerCase()];
            if (!game.inGame) {
                if (playerGameMap.hasOwnProperty(msg.author.id)) {
                    msg.reply("You must either finish or end your current game (!end) before you can play another!");
                }
                else {
                    game.newGame(msg, () => {
                        delete playerGameMap[msg.author.id];
                    });
                    playerGameMap[msg.author.id] = game;
                }
            }
            else {
                msg.reply("Sorry, there can only be 1 instance of a game at a time!");
            }
        }
        else if (msg.content.toLowerCase() === '/end' || msg.content.toLowerCase() === '/stop') {
            const userId = msg.author.id;
            if (playerGameMap.hasOwnProperty(userId)) {
                const game = playerGameMap[userId];
                game.gameOver({ result: 'force_end' });
                delete playerGameMap[userId];
            }
        }
});
/*app.get('/', (req, res) => {
    res.send('<script>window.close();</script>');
    if (req.query.col && req.query.row) {
        minesweeper.makeMove(parseInt(req.query.col), parseInt(req.query.row));
    }
})	
const configg = require("./codes/commands/config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./codes/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./codes/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./codes/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./codes/commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});/*/

/*client.on('message', function(message) {
	 if (message.author.bot) return;
const to = "./to.txt";
const content = fs.readFileSync(to, 'utf-8':);
message.channel.send(content);
});/*/