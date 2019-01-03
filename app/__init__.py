from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from app.config import Config

app = Flask(__name__)

app.static_folder = 'static'
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

mail = Mail(app)
mail.init_app(app)


from app import routes, models
