const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `ᴍᴇɴꜱᴀᴊᴇ: ${pesan}`;
  let teks = ` ᴀᴄᴛɪᴠᴇɴꜱᴇ ᴀʟᴠ ɪɴꜱᴇʀᴠɪʙʟᴇꜱ\n${colombia}\n\n ᴛᴀɢꜱ: \n`;
  for (const mem of participants) {
    teks += `🔥 @${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos *<mesaje>*', 'invocar *<mesaje>*'];
handler.tags = ['grupo'];
handler.command = ['todos', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;