const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/juggru.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*CREATED BY JUGGRUSER*
*OWNER NO: wa.me/919656813724*

*MY YT CHANNEL : https://www.youtube.com/channel/UC0C4MiybHKd2vB26EylS-5A*

*GITHUB LINK : https://github.com/JUGGRU-SER-12/JUGGRUBOTZV2*

*AUDIO CMNDS : https://github.com/JUGGRU-SER-12/JUGGRUBOTZV2/tree/master/uploads*
`}) 

}));
