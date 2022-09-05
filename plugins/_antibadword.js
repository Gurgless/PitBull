let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isAdmin, isBotAdmin}) {
    if (m.isBaileys && m.fromMe && isOwner) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (m.isGroup && isBotAdmin && !chat.antiBadword && !chat.isBanned && !user.banned && isBadword && !isOwner && !isAdmin) {
       this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
   }
}
module.exports = handler