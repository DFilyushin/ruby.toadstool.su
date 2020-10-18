from flask import Flask
from flask_mail import Mail
from app.config import Config

app = Flask(__name__)

app.static_folder = 'static'
app.config.from_object(Config)

mail = Mail(app)
mail.init_app(app)
