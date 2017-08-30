.PHONY: concat css all sasshelp
.DEFAULT_GOAL := all

concat:
	@cat src/scss/* > src/all.scss

css:
	@docker run --rm -v $(shell pwd):/data codycraven/sassc src/all.scss > css/main.css

sasshelp:
	docker run --rm -v $(shell pwd)/src:/data codycraven/sassc -h

all : concat css
