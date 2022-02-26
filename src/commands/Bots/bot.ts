import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bots',
            description: 'shows bot section',
            category: 'bots',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['1']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help2.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
 𝚂𝚑𝚘𝚠𝚜 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚒𝚗𝚏𝚘
   
        「 Bot 」
 -「 ${this.client.config.prefix}Entropy 」
 -「 ${this.client.config.prefix}guide 」
 -「 ${this.client.config.prefix}info 」
 -「 ${this.client.config.prefix}void 」
      Credits to my friend prajjwal 

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
