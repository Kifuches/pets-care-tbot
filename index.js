const TelegramApi = require('node-telegram-bot-api');

const token = '7535319637:AAEpN9Qnps8E7yOIzc64Fj7HEBCc_8jycHw';

const bot = new TelegramApi(token, { polling:true });

// const buttons = [
//     { text: 'Добавить походы' },
//     { text: 'Добавить поведение' },
// ];

const buttons = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Играть еще раз', callback_data: '/again'}],
        ]
    }
}

bot.on('message', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    buttons.forEach((button) => {
        bot.setChatMenuButton({
            chat_id:chatId,
            menu_button:button
        })

    })

    bot.sendMessage(chatId, `--> ${text}`)

  console.log(msg);
});