FROM node:20-alpine
WORKDIR /usr/src/app
COPY build build
COPY package.json .
EXPOSE 3000
CMD ["node", "build"]