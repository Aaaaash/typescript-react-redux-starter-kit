FROM node:9.2.0
RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get install -y vim \
    && rm -rf /etc/nginx/nginx.conf /etc/nginx/conf.d
COPY conf/conf.d /etc/nginx
COPY conf/nginx.conf /etc/nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
     && npm run build \
     && cp -r build/* /var/www/html \
     && rm -rf /app
CMD ["nginx","-g","daemon off;"]
