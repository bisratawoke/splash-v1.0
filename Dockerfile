FROM nginx:alpine

WORKDIR /usr/bin/app

RUN mkdir static

COPY ./out /usr/bin/app/static

COPY ./default.conf /etc/nginx/conf.d/default.conf

 
