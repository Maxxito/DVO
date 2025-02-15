from typing import Final
import telebot
from telebot import types

TOKEN: Final = "7777815688:AAEFASmhB5ltfQv3muNUl9j1P29fbH3e0FQ"
BOT_USERNAME: Final = '@dvo_helper_bot'

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    #btn1 = types.KeyboardButton("Заявка")
    btn2 = types.KeyboardButton("Документы")
    btn3 = types.KeyboardButton("Конкурсные категории")
    btn4 = types.KeyboardButton("Транспорт и точки питания")
    btn5 = types.KeyboardButton("Часто задаваемые вопросы")
    #markup.row(btn1)
    markup.row(btn2,btn3)
    markup.row(btn4,btn5)
    greet = open('greetings.txt','rt')
    bot.send_message(message.chat.id,greet.read(),reply_markup=markup,parse_mode='HTML')
    greet.close()

@bot.callback_query_handler(func=lambda callback: True)
def callback_message(callback):
    if callback.data=='more':
        req = open('requirments.txt','rt')
        bot.send_message(callback.message.chat.id, req.read(),parse_mode='HTML')
        req.close()


@bot.message_handler()
def info(message):
    if message.text == 'Заявка':
        bot.send_message(message.chat.id, 'К сожалению на данный момент регистрация недоступна')
    elif message.text == 'Документы':
        pos = open('ПОЛОЖЕНИЕ 2025.pdf','rb')
        reg = open('РЕГЛАМЕНТ 2025.pdf','rb')
        tim = open('ОБЩЕЕ РАСПИСАНИЕ 2025.pdf','rb')
        bot.send_document(message.chat.id, pos)
        bot.send_document(message.chat.id, reg)
        bot.send_document(message.chat.id, tim)
        reg.close()
        pos.close()
        tim.close()
    elif message.text == 'Конкурсные категории':
        markup = types.InlineKeyboardMarkup()
        btn1 = types.InlineKeyboardButton("Нажимай сюда!",callback_data='more')
        markup.add(btn1)
        fest_text = open('fest_text.txt','rt')
        bot.send_message(message.chat.id, fest_text.read(),parse_mode='HTML')
        fest_text.close()
        bot.send_message(message.chat.id,'Хочешь узнать подробнее о конкурсных требованиях?',reply_markup=markup)
    elif message.text == 'Транспорт и точки питания':
        info1 = open('ТРАНСПОРТ, ПИТАНИЕ, ДОСУГ.pdf','rb')
        bot.send_message(message.chat.id,'🐚Скорее открывай файл, который расскажет тебе о точках питания, транспорте и местах для досуга во Владивостоке!')
        bot.send_document(message.chat.id, info1)
        info1.close()
    elif message.text == 'Часто задаваемые вопросы':
        q = open('questions.txt','rt')
        bot.send_message(message.chat.id, q.read(),parse_mode='HTML')
        q.close()
    elif message.text == 'Требования к программам':
        req = open('requirments.txt','rt')
        bot.send_message(message.chat.id, req.read(),parse_mode='HTML')
        req.close()
1
bot.polling(none_stop=True)