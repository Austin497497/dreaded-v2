/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhwcTkrc2FjOHJ3QU1wYkF6QUluaGhIK2hVUGc5VDZKd2NGTUtyaEZXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3RpaGRIU0pmQW9aSUh4UzRLZVUyU2ZReXFkZTh1dVh4dTlQSHJockgxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR29ZbEdOVHFJSURhSnhadWRJbndUNkYzMHNUeXhxMTdrMmpHcVUwT0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUVVmVjU2K2tudHBZSTJnbEM3bms0R0oyeGdIRlN4Z0c3dHk4MXc2Q1FRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HRGJpL3RHbUloNVBYeFpaSzdvWUpPYTUvU3hyZHl4bnVIdkNyTUo0SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ2elJPQ0NCbGJ5aldqWllCRTEzY1EvZFhlTEZzc2cxaGRRa3plZDlaa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxVYWRCNTVNYkthWFNFV3VaTGJuZVNQcStIaDVqSVBxcmEwcVA4Z1FsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXE1VGxvbldNMUh2WmNjRnNyaUlwYnBZSWtvOXJlai8rclk1U2RtZTJtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMvaEpwaThxM3Yxc2Z3UWVOOG9wQzVSTU9Fb3BiYWxNSStLNWh1KytmZ3NxZnpMaFN0REFXZXRSTzBXcVRONTZaRmZGMnZnWHJGRUJpRFQzTHNZVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IkFucmFUR3R6OGVNcWJFU2M0OWx1RjNRSC93WitZNERrbTFORHZCdUtGQnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU3NzI1NjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ0RUNDQjIxMDlGRTE0RDMzRDVBRjI5OEIyREE1MkUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzc0NDY4OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1NzcyNTY1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MjZERTZFMzMzOTk4OTgwOEMyMjc3M0Y3OUVEQkUzRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3NDQ2ODk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTc3MjU2NTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjkwOEExMTAxQTZERUI3MTI1NjdBMzA5QTQ2QzJBMzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzQ0NjkxMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU3NzI1NjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ1MzQ5MkJGNUNENDEyODgyMjhCMzAwQzdBMEM0QTZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzc0NDY5MTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZrNnhjY0NfUmRxaHNZZlQxdE0yZEEiLCJwaG9uZUlkIjoiNzFiNjJhMjktMTE2ZS00YmVlLWE5ZTMtNGI4MTMxYmVjZDVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpuZktEWFFwZS9ZK0k5VVlaQTQyMEdVYUNkaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyendIRlF2aXpwUk1MbUhUK0xYdFdpSnFEVHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTVaU1dUUjUiLCJtZSI6eyJpZCI6IjI1NDc1NzcyNTY1Njo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLimIVEUkFDT+KYhSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXY1bW93QkVOMnJ2YndHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN283d3kwbG82eUlUMGkweXlxVkJCQXk1OWM5NU5vYVRlVjl5cU1lSGExdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWEcxeVVqWTBRSDdveFozYWRkWjZGWkhXK2Nzd2RBckdCeDAwYUMxTHpYdlJOZ3FwUzhodkI2VTdrSmI1aE5BTWdpRExVS3FGRE9CQkxodVpQdTIxQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImRSd1g3NHJXME1Nc1YwR2dHOFpzOE51eVUrSmk1K3NiNXZ2NFBKZkdReUJBNFRlV3RucVNwWTBha2JnbnVlQk1tYmtOb3NSYXo1Tk1UL3RTVm1tYWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3NzI1NjU2OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmU2TzhNdEphT3NpRTlJdE1zcWxRUVFNdWZYUGVUYUdrM2xmY3FqSGgydGMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc0NDY4OTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS21uIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254757725656';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'typing';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
