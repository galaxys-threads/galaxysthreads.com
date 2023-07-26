.PHONY: full build build-npm build-hugo test test-npm lint fix watch watch-npm watch-hugo clean update-submodules docker docker-publish

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Build the project
build: build-npm build-hugo

build-npm:
	[ -d node_modules ] || npm install
	npm run build

build-hugo:
	hugo

## Test the project
test: test-npm

test-npm:
	[ -d node_modules ] || npm install
	npm run test

## Lint the project
lint:

## Fix the project
fix:

## Watch the project
watch: build-npm
	make -j2 watch-npm watch-hugo

watch-npm:
	[ -d node_modules ] || npm install
	npm run watch

watch-hugo:
	hugo serve

## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"

## Update the submodules
update-submodules:
	git submodule sync --recursive
	git submodule update --init --recursive
	git submodule update --remote

## Build the Docker image
docker: clean
	docker build -t galaxysthreads_com .

## Build the Docker image
docker-publish: clean docker
	docker push galaxysthreads_com
