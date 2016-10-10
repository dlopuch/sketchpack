# sketchpack
Webpack frontend boilerplate for javascript sketching.  Includes:

- npm workflow for dependencies
- webpack for building your CommonJS or RequireJS files
- ES6 transpilation via Babel
- LESS compiling for CSS that becomes maintainable
- eslint with AirBNB style rules 
- watch server to rebuild on change
- sourcemaps to trace through your code

# To get started
1. Fork me
2. Change package.json to have your project settings
3. Install webpack: `npm install -g webpack` (global to make webpack CLI available)
4. Install dependencies: `npm install`
5. Add some neat stuff to this project, eg `npm install --save lodash`
6. Start up webpack watch server: `$ webpack-dev-server`
7. Change files and make something awesome!

# To release
Release script minifies build and sets it up in the `gh-pages` branch for GitHub Pages release.

To setup, create the gh-pages branch: `git branch gh-pages`

To make a new release:
1. `npm run release`
2. Current checkout branch will have changed to `gh-pages`.
3. (First time) Add any new files: `git status; git add xxx`
4. Commit all changes: `git commit -am "new release"`

# TODO:
- Example less file
- Production builds with minification
