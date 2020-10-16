import os
from datetime import datetime
from flask import render_template, send_from_directory, request, json, abort
from flask_mail import Message
from app import app, mail, db
from app.models import DownloadStat


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/changelog')
def changelog():
    return render_template('changelog.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/contacts', methods=['POST'])
def send_contacts():
    form = request.form
    user_name = form['name']
    email = form['email']
    subject = form['subject']
    message = form['message']
    errors = []
    data = {}
    if not user_name:
        errors.append('Не указано Ваше имя!')
    if not subject:
        errors.append('Тема сообщения не указана!')
    if not message:
        errors.append('Текст сообщения пуст!')
    if not email:
        errors.append('Почтовый адрес не указан!')

    if errors:
        data['success'] = False
        data['errors'] = errors
    else:
        msg = Message(form['subject'], sender='bpython@mail.ru', recipients=app.config['ADMINS'])
        msg.html = '''<strong>Имя:</strong> {}</br>
        <strong>Email:</strong> {}</br>
        <strong>Тема:</strong> {}</br>
        <strong>Сообщение:</strong>{}<br>
        '''.format(user_name, email, subject, message)
        mail.connect()
        mail.send(msg)
        data['success'] = True
        data['message'] = 'Сообщение успешно отправлено'
    return json.jsonify(data)


@app.route('/images/<path:filename>')
def send_images(filename):
    return send_from_directory('./static/images', filename)


@app.route('/css/<path:filename>')
def send_css(filename):
    return send_from_directory('./static/css', filename)


@app.route('/js/<path:filename>')
def send_js(filename):
    return send_from_directory('./static/js', filename)


@app.route('/fonts/<path:filename>')
def send_fonts(filename):
    return send_from_directory('./static/fonts', filename)


def get_last_file(path, ext):
    files = []
    for item in os.scandir(path):
        if not item.is_dir():
            if item.name.split('.')[-1] == ext:
                files.append(item)
    if files:
        return sorted(files, key=lambda filename: datetime.fromtimestamp(filename.stat(follow_symlinks=False).st_ctime))[-1].name


@app.route('/app/<path:filename>')
def send_files(filename):
    app_path = './app/static/application'
    file_item = None
    if filename == 'ruby':
        file_item = get_last_file(app_path, 'exe')
    if filename == 'help_pdf':
        file_item = get_last_file(app_path, 'pdf')
    if filename == 'help_chm':
        file_item = get_last_file(app_path, 'chm')
    if not file_item:
         abort(404)

    ds = DownloadStat()
    ds.ip = request.remote_addr
    ds.filename = file_item
    ds.downloaded = datetime.now()
    db.session.add(ds)
    db.session.commit()
    return send_from_directory('./static/application', file_item, as_attachment=True)
