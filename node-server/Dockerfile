FROM node:latest

WORKDIR /server

RUN npm install -y pnpm -g

COPY ./package.json ./
RUN pnpm install

COPY ./ /server

LABEL name="node-server"
LABEL version="1.0"

EXPOSE 3001

CMD ["pnpm", "dev"]
