FROM arm32v6/node:alpine

WORKDIR /app
COPY . /app

RUN apk add --no-cache curl gcc g++ make python2 && \
 curl -s http://www.airspayce.com/mikem/bcm2835/bcm2835-1.56.tar.gz | tar -C /app -xvz && \
 cd /app/bcm2835-1.56 && \
 ./configure --prefix=/usr && \
 make && \
 make install && \
 rm -rf /app/bcm2835-1.56 && \
 apk del curl

RUN npm install




EXPOSE 3000
CMD [ "npm", "start" ]