FROM node:8.12.0-alpine
ADD . /portal
WORKDIR /portal
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]