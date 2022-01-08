FROM node:latest as build

WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
# RUN npm run build
# CMD npm run start:dev

EXPOSE 3000