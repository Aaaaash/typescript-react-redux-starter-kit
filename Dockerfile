FROM node:9.2.0
RUN yum update \
    && yum install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
     && npm run build \
     && cp -r build/* /var/www/html \
     && rm -rf /app
CMD ["nginx","-g","daemon off;"]
