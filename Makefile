install: 
	npm ci

brain-games:
	node bin/brain-games.js

publish: 
	npm publish --dry-run
	
brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

lint:
	npx eslint .

test:
	npm test
	