# pull official base image
FROM node:15.14.0-alpine3.10
WORKDIR /pachira-web
COPY pachira-web/* /pachira-web/
RUN ls -l
RUN apk update
RUN apk add git
RUN rm -rf node_modules package-lock.json
RUN npm install --force
RUN pwd && ls -l
