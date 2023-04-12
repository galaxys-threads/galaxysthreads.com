.PHONY: full build build-npm build-hugo watch watch-npm watch-hugo update-submodules clean

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean build

## Build the project
build: build-npm build-hugo

build-npm:
	[ -d node_modules ] || npm install
	npm run build

build-hugo:
	hugo

## Watch the project
watch: build-npm
	make -j2 watch-npm watch-hugo

watch-npm:
	[ -d node_modules ] || npm install
	npm run watch

watch-hugo:
	hugo serve

update-submodules:
	git submodule sync --recursive
	git submodule update --init --recursive
	git submodule update --remote

## Clean the project
clean:
	git clean -Xdff
