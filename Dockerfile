FROM python:3.8-slim
MAINTAINER dmitriy.filyushin@yandex.ru

RUN mkdir /app
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


ADD requirements /app
RUN pip install -r requirements

COPY . /app

EXPOSE 5000

ENTRYPOINT ["gunicorn", "--config", "gunicorn_config.py", "wsgi:app"]

