install:
	npm ci		
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/calculator.js
brain-nod:
	node bin/brain-nod.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
fix:
	npx eslint --fix