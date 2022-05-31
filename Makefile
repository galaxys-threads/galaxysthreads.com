build: clean build-npm build-hugo
	hugo

build-hugo:
	hugo

build-npm:
	npm install
	npm run build

watch-hugo: clean build-npm
	clear
	@echo "Serving on http://0.0.0.0:2222/"
	hugo serve -D --bind 0.0.0.0 --port 2222

watch-npm:
	npm install
	npm run watch

clean:
	git clean -Xdff

docker: clean
	docker build -t aaronellington/galaxys-threads .

prod: docker
	docker run --rm -p 2222:2222/tcp aaronellington/galaxys-threads:latest
