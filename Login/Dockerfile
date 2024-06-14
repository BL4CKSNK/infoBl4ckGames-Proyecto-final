FROM php:apache

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install mysqli


RUN find . -type d -exec chmod 755 {} + && \
    find . -type f -exec chmod 644 {} + && \
    chown -R www-data:www-data /var/www/html

EXPOSE 80
