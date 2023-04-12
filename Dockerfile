FROM alpine AS build

ARG VERSION=0.111.3

ADD https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_Linux-64bit.tar.gz /hugo.tar.gz
RUN tar -zxvf hugo.tar.gz
RUN apk add --no-cache git
COPY . /site
WORKDIR /site

# And then we just run Hugo
RUN git submodule sync --recursive
RUN git submodule update --init --recursive
RUN /hugo --minify --enableGitInfo

FROM aaronellington/valet:latest
COPY --from=build /site/public .
EXPOSE 1234
