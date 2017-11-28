FROM node:9.2.0
RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get install -y vim
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
     && npm run build \
     && cp -r build/* /var/www/html
    #  && rm -rf /app
CMD ["nginx","-c","/etc/nginx/nginx.conf","-g","daemon off;"]
