FROM node:16

WORKDIR /var/www/

COPY . .

EXPOSE ${NODE_CONTAINER_PORT}

ENTRYPOINT [ "sh", "node-entrypoint.sh" ]