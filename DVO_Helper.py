from typing import Final
import telebot
import pandas as pd
from telebot import types


TOKEN: Final = "7777815688:AAEFASmhB5ltfQv3muNUl9j1P29fbH3e0FQ"
BOT_USERNAME: Final = '@dvo_helper_bot'

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    markup = types.InlineKeyboardMarkup()
    btn1 = types.InlineKeyboardButton("Регистрация",callback_data="Register")
    btn2 = types.InlineKeyboardButton("Участник",callback_data="Participant")
    markup.row(btn1,btn2)
    bot.send_message(message.chat.id,f'Здравствуйте {message.from_user.first_name}, вы будете регистрироваться или вы лишь участник?',reply_markup=markup)

@bot.callback_query_handler(func=lambda callback:True)
def callback_message(callback):
    if callback.data == 'Register':
        bot.send_message(callback.message.chat.id,'Пожалуйста заполните следующую форму')
        form = open("Forms/1. Форма заявки II Дальневосточной хоровой олимпиады.pdf","rb")
        bot.send_document(callback.message.chat.id, form)
        form.close()

bot.polling(none_stop=True)