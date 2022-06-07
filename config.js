/**
   * Created By LoRD.
   * Contact Me on wa.me/919544498843
   * Subscribe me on yt https://youtube.com/channel/UCd7j8SlD_JcTGxIkcVxsk5A
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '𐏓𐊈𐊗𐊖 𐊰𐊤 H𐦢 𐋏𐊤𐋎D 𐊥𐊥 💖🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtube.com/channel/UCd7j8SlD_JcTGxIkcVxsk5A'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/H4HEADFF'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'H4_HEAD_FF'
// Other
global.watermark = '𐏓𐊈𐊗𐊖 𐊰𐊤 H𐦢 𐋏𐊤𐋎D 𐊥𐊥 💖'
global.owner = ['919544498843']
global.premium = ['919544498843']
global.packname = 'Hᔰ HΣΛD FF ❤'
global.author = '𝙷𝟺 𝙷𝙴𝙰𝙳 𝙵𝙵'
global.sessionName = '𝐇𝟒 𝐇𝐄𝐀𝐃 𝐅𝐅'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
