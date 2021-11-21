# Set up base image 
FROM node:12 as base

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","run","start-dev"]

