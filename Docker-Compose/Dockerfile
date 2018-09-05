FROM arm32v6/node:alpine
WORKDIR /app
ADD ./package.json ./
RUN npm install
ADD . .
CMD node index.js
EXPOSE 8080