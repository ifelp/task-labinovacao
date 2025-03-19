FROM oven/bun:latest

WORKDIR /server

COPY ./package.json ./
RUN bun install

COPY ./ /server/

LABEL name="bun-server"
LABEL version="1.0"

EXPOSE 3000

CMD ["bun", "run", "dev"]