FROM node:10
WORKDIR /app
COPY . /app
RUN npm install
CMD node src/app
EXPOSE 3000