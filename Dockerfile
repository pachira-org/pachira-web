# pull official base image
FROM node:15.14.0-alpine3.10
WORKDIR /pachira-web/pachira
COPY pachira/. ./
RUN pwd && ls -la
RUN rm -rf package-lock.json
RUN npm install --force
RUN pwd && ls -l
