build: clean
	hugo

watch:
	@echo "Serving on http://0.0.0.0:2222/"
	hugo serve -D --bind 0.0.0.0 --port 2222

clean:
	git clean -Xdff

## Build the Dockerfile
docker: clean
	docker build -t aaronellington/galaxys-threads .
