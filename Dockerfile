FROM nginx:stable-alpine
RUN apt-get update \
    && apt-get install -y nodejs \
    && apt-get install -y vim \
    && rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
     && npm run build \
     && cp -r build/* /var/www/html \
     && rm -rf /app
CMD ["nginx","-g","daemon off;"]
