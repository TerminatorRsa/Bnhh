import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
         *━━━━❰ Intro❱━━━━
   𝙶𝚛𝚎𝚎𝚝𝚒𝚗𝚐 𝚒 𝚊𝚖 𝙴𝚖𝚒𝚕𝚒𝚊 𝚊 𝚊𝚗𝚒𝚖𝚎 𝚋𝚘𝚝!  
   𝙼𝚢 𝚞𝚜𝚊𝚋𝚕𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚊𝚛𝚎 𝚕𝚒𝚜𝚝𝚎𝚍 𝚋𝚎𝚕𝚘𝚠
   
         *━━━━❰ Commands ❱━━━━*
         
𝟷 -💮 𝙱𝚘𝚝𝚜 
2- 💮𝙲𝚘𝚗𝚏𝚒𝚐 
3- 💮𝙳𝚎𝚟 
4 -💮 𝙵𝚞𝚗 
𝟻 -💮𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚟𝚎 
𝟼-💮𝙶𝚎𝚗𝚎𝚛𝚊𝚕
𝟽 -💮𝙼𝚎𝚍𝚒𝚊
𝟾- 💮𝙼𝚘𝚍𝚎𝚛𝚊𝚝𝚒𝚘𝚗 
𝟿- 💮𝙽𝚜𝚏𝚠 (𝟷𝟾+)
𝟷𝟶-💮𝚆𝚎𝚎𝚋
 *━━━━❰ Info ❱━━━━*
 𝚄𝚜𝚎𝚛: ${M.sender.username}
𝙽𝚊𝚖𝚎: 𝙴𝚖𝚒𝚕𝚒𝚊
𝙿𝚛𝚎𝚏𝚒𝚡: ${this.client.config.prefix}
𝙾𝚠𝚗𝚎𝚛: ほら
 *━━━━━━━━━━━━━━━━*
 
 *Note: Use ${this.client.config.prefix}<Section_name> or <Section_number> to view the section info. E.g ${this.client.config.prefix}bot/1*
     
     
`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
