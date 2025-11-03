
// 漏 2025 Debraj. All Rights Reserved.
// respect the work, don鈥檛 just copy-paste.

const fs = require('fs')

const config = {
    owner: "Andrew",
    botNumber: "233500850221",
    setPair: "K0MRAID1",
    thumbUrl: "https://i.imgur.com/IkEv97P.jpeg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "BAKA!, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Mode changed successfully!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    },
    settings: {
        title: "Vellion-MD",
        packname: 'Vellion-MD , Andrew',
        description: "this script was created by Andrew",
        author: 'https://www.github.com/despacito699',
        footer: "饾棈饾柧饾梾饾柧饾梹饾棆饾柡饾梿: @Andrew_tech"
    },
    newsletter: {
        name: "Vellion-MD",
        id: "0@newsletter"
    },
    api: {
        baseurl: "https://hector-api.vercel.app/",
        apikey: "hector"
    },
    sticker: {
        packname: "Vellion-MD",
        author: "Andrew"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
