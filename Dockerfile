FROM python:3.9

LABEL author="dmitriyvasil@gmail.com"

ENV HOST="0.0.0.0"
ENV PORT=8000

ENV DEBUG=True

RUN mkdir /app
WORKDIR /app

RUN apt update && apt install python3-pip -y && pip3 install pipenv

COPY react_chart /app/react_chart
COPY static /app/static
COPY main /app/main

COPY ./Pipfile.lock /app
COPY ./manage.py /app
COPY ./Pipfile /app

RUN pipenv install

CMD pipenv run python manage.py runserver ${HOST}:${PORT}