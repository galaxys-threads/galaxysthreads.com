FROM node:16 as nodeBuilder
WORKDIR /project
COPY . .
RUN npm install
RUN npm run build

FROM klakegg/hugo:0.93.2-ext-alpine AS hugoBuilder
ARG BASE_URL=/
ENV BASE_URL=${BASE_URL}
WORKDIR /project
COPY . .
COPY --from=nodeBuilder /project/themes/main/assets/bundle /project/themes/main/assets/bundle
RUN hugo --baseURL "${BASE_URL}"

FROM node:16 as htmlFixer
WORKDIR /project
COPY --from=hugoBuilder /project/public ./public
COPY . .
RUN npm install --global prettier
RUN npx prettier --write public

FROM caddy:2
COPY --from=htmlFixer /project/public /srv/public
COPY ./Caddyfile /etc/caddy/Caddyfile
EXPOSE 2222
