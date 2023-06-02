FROM node:18
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 24678
CMD ["npm","run","dev","--","--host"]
