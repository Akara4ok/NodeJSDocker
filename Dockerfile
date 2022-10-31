FROM node:latest

WORKDIR /app

COPY index.js ./

EXPOSE 80

CMD [ "node", "index.js" ]