from app import db

class DownloadStat(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    downloaded = db.Column(db.DateTime, index = True)
    filename = db.Column(db.String(120))
    ip = db.Column(db.String(20))

