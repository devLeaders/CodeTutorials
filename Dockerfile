FROM node:10.16.3

WORKDIR /home/node/app

RUN apt-get update

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN git clone https://github.com/devLeaders/myNetflix.git /home/node/app

RUN npm install nestjs lerna

RUN lerna bootstrap

CMD ["lerna", "run", "start"]

EXPOSE 3000 3300