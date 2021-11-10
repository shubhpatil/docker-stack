FROM node:12.22-alpine

WORKDIR /app

COPY . .

RUN cd frontend && npm install && npm run build

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]