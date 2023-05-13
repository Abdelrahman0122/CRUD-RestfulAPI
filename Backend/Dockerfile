FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


RUN npm install

COPY . .
EXPOSE 5000

CMD [ "npm", "start" ]