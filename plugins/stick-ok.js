let moment = require('moment-timezone')
let handler = async (m, { conn, command, text }) => { 
 await conn.sendFile(m.chat, 'https://bit.ly/3AUUure', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `${ucapan()}`, body: `${pickRandom(['Furry Indonesia :3', 'Kenal Rio Gak Kak ?:3', 'Ownerku GG loh kak :3', 'Suka Rio Nggak Kak :3', 'Kangen Sama Doi Gak ?:3', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'R-BOT Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp ya! nanti sakit :‹'])}`, sourceUrl: 'https://instagram/riyoshi_dyxn', thumbnail: await (await fetch(pickRandom(global.waifu))).buffer(),}} 
     })
 } 
 handler.customPrefix = /^(iya|ok|oke|okey)$/i
 handler.command = new RegExp 
  
 module.exports = handler 
 
 function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃"
    }
    return res
}
