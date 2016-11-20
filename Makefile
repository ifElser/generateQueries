MOCHA = ./node_modules/.bin/mocha

test:
	@NODE_ENV=test $(MOCHA) -u tdd -R spec

.PHONY: test