FROM node:18-buster as parcelBuilder
WORKDIR /staging
COPY . .
RUN make build-npm

FROM aaronellington/valet:latest
ENV NOT_FOUND_CODE=200
ENV NOT_FOUND_FILE="index.html"
COPY --from=parcelBuilder /staging/var/dist .
EXPOSE 1234
