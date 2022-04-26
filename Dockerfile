FROM node:10
WORKDIR /app
COPY . /app
RUN npm install
CMD node app
EXPOSE 3000