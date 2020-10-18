import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    TEMPLATES_AUTO_RELOAD = True
    MAIL_SERVER = ''
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USERNAME = ''
    MAIL_PASSWORD = ''
    ADMINS = ['']

