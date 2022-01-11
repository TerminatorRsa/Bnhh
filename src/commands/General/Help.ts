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
   Greeting i am Emilia a anime bot! 
   My usable commands are listed below
   
         *━━━━❰ Commands ❱━━━━*
         
1 -💠 Bots 
2 -💠Config 
3- 💠Dev 
4 -💠 Fun 
5 -💠Educative 
6- 💠General 
7 -💠Media
8- 💠Moderation 
9- 💠Nsfw (18+)
10-💠Weeb
 *━━━━❰ Info ❱━━━━*
 *User: *${M.sender.username}*
*Name: Emilia*
*Prefix: ${this.client.config.prefix}*
*Owner: ほら*
 *━━━━━━━━━━━━━━━━*
 
 *Note: Use ${this.client.config.prefix}<Section_name> or <Section_number> to view the section info. E.g ${this.client.config.prefix}bot/1*
     
     
`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
