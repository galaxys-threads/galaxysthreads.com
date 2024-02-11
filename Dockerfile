FROM node:21 as builder
WORKDIR /workspace/
COPY . .
RUN npm i
RUN npm run build

FROM ghcr.io/aaronellington/static-web-server:latest
COPY --from=builder /workspace/out ./public
EXPOSE 2828
