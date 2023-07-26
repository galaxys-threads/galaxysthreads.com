## Build Hugo
FROM alpine AS build
ARG VERSION=0.111.3
ADD https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_Linux-64bit.tar.gz /hugo.tar.gz
RUN tar -zxvf hugo.tar.gz
RUN apk add --no-cache git
WORKDIR /workspace
COPY . .
RUN git submodule sync --recursive
RUN git submodule update --init --recursive
RUN /hugo --minify --enableGitInfo

## Setup the static file server
FROM aaronellington/static-web-server:latest
COPY --from=build /workspace/public ./public
EXPOSE 1234
