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
    markup.add(types.InlineKeyboardButton("Go to website",url="https://www.google.ru/?hl=ru"))
    bot.send_message(message.chat.id,f'Hi {message.from_user.first_name}',reply_markup=markup)

@bot.message_handler(commands=['help'])
def main(message):
    bot.send_message(message.chat.id,'Help')

bot.polling(none_stop=True)