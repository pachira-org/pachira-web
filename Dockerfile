# pull official base image
FROM node:15.14.0-alpine3.10
WORKDIR /pachira-web/
COPY . ./
RUN pwd && ls -l
RUN rm -rf node_modules package-lock.json
RUN npm install --force
RUN pwd && ls -l
