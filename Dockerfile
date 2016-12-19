FROM node:7.2-alpine

ADD package.json package.json
RUN npm install
ADD . .

CMD ["node","app.js"]
