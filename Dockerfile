FROM klakegg/hugo:0.93.2-onbuild AS hugo_builder
COPY . /src/

FROM caddy:2
COPY --from=hugo_builder /target /srv/dist
COPY ./Caddyfile /etc/caddy/Caddyfile
EXPOSE 2222
