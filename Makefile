.PHONY: full build build-npm test test-npm lint lint-npm fix fix-npm watch watch-npm docs-go clean docker docker-publish

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Build the project
build: build-npm

build-npm:
	[ -d node_modules ] || npm install
	npm run build

## Test the project
test: test-npm

test-npm:
	[ -d node_modules ] || npm install
	npm run test

## Lint the project
lint: lint-npm

lint-npm:
	[ -d node_modules ] || npm install
	npm run lint

## Fix the project
fix: fix-npm

fix-npm:
	[ -d node_modules ] || npm install
	npm run fix

## Watch the project
watch:
	make -j1 watch-npm

watch-npm:
	[ -d node_modules ] || npm install
	npm run watch

## Run the godoc server
docs-go:
	go install golang.org/x/tools/cmd/godoc@latest
	@echo "listening on http://127.0.0.1:6060/pkg/"
	godoc -http=127.0.0.1:6060

## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"

## Build the docker image
docker: clean
	docker build -t galaxys-threads/galaxysthreads.com:latest .

## Publish the docker image
docker-publish: clean docker
	docker push galaxys-threads/galaxysthreads.com:latest
