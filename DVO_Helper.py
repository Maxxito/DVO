from typing import Final
import telebot
import pandas as pd
from telebot import types

TOKEN: Final = "7777815688:AAEFASmhB5ltfQv3muNUl9j1P29fbH3e0FQ"
BOT_USERNAME: Final = '@dvo_helper_bot'

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup()
    #btn1 = types.KeyboardButton("Заявка")
    btn2 = types.KeyboardButton("Документы")
    btn3 = types.KeyboardButton("Конкурсные номинации")
    btn4 = types.KeyboardButton("Транспорт и точки питания")
    btn5 = types.KeyboardButton("Часто задаваемые вопросы")
    #markup.row(btn1)
    markup.row(btn2,btn3)
    markup.row(btn4,btn5)
    bot.send_message(message.chat.id,f'Здравствуйте.',reply_markup=markup)

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
        markup = types.ReplyKeyboardMarkup()
        btn1 = types.KeyboardButton("Требования к программам")
        btn2 = types.KeyboardButton("Вернуться в меню")
        markup.row(btn1,btn2)
        fest_text = open('fest_text.txt','rt')
        bot.send_message(message.chat.id, fest_text.read())
        fest_text.close()
    elif message.text == 'Транспорт и точки питания':
        info1 = open('ТРАНСПОРТ, ПИТАНИЕ, ДОСУГ.pdf','rt')
        bot.send_document(message.chat.id, fest_text)
        info1.close()
    elif message.text == 'Часто задаваемые вопросы':
        bot.send_message(message.chat.id, 'Вопросики')

bot.polling(none_stop=True)