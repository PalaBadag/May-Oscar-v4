import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285850539404-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = `â¥ââ¨ ð½ðð ${tag} â©ââ¤`
    let footerny = `âð® Mentahan.\nâð  *Base* : https://github.com/PalaBadag/May-Oscar-v4\nâð¥ *Script Ini:* https://youtu.be/@aditsaputra5 ð¹ððððð ð»ððð ðððððððð`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/ef49e882e7abd96d74f7d.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/pmeme_sad',
    mediaType: 2, 
    description: sgc,
    title: "Já´ÉªÉ´ SÉªÉ´Éª Cá´Ê",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc','sourlcode']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? ð¥±"
  if (time >= 4) {
    res = "Pagi Lord ð"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak âï¸"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak ð"
  }
  if (time >= 18) {
    res = "Malam Kak ð"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days âï¸*\n ', h, ' *Hours ð*\n ', m, ' *Minute â°*\n ', s, ' *Second â±ï¸* '].map(v => v.toString().padStart(2, 0)).join('')
}
