.PHONY: *

build: clean install lint
	npm run build

build-storybook: install
	npm run build-storybook

install:
	npm install

lint: install
	npm run lint

fix: install
	npm run fix

watch: install
	npm run watch

watch-storybook: install
	npm run watch-storybook

clean:
	git clean -Xdff --exclude="!.env*local"
