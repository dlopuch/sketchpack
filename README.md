# sketchpack
Webpack+React+Redux+Babel frontend boilerplate for javascript sketching.  Includes:

- npm workflow for dependencies
- **Webpack** for building your CommonJS or RequireJS files
- ES6 transpilation via **Babel**
- `eslint` with AirBNB style rules (including JSX linting)
  - See `.eslintrc.js` for disagreements and overrides more appropriate for sketches
- watch-server to rebuild on change with `webpack-dev-server`
- **sourcemaps** to trace through your code

This boilerplate also includes frameworks that need boilerplate webpack config:
- **React** (with production minification and example react app)
- **Redux** app with some helpers (`react-redux`, `redux-actions`, `redux-thunk` for async actions)
- **SASS** compiling for CSS that becomes maintainable
- **Bootstrap** for pretty front-ends
  - Uses **[reactstrap](https://reactstrap.github.io)** for React'ified Boostrap 4 components
  - Has a dependency on **Bootstrap 4**, but only to build the Bootstrap CSS (reactstrap doesn't include CSS ports).
  Doesn't use any Bootstrap javascript or jquery


# Try It!
`npm install`, then `npm run start:dev`, then [localhost:8080](http://localhost:8080).
Note the linting demo.


# To Use This As Boilerplate
1. Fork me
1. Change package.json to have your project settings
1. Install dependencies: `npm install` (this also install webpack and webpack-dev-server locally)
1. Add some neat stuff to this project, eg `npm install --save lodash`
1. Start up webpack-dev-server (watch server): `$ npm run start:dev`
1. Change files and make something awesome!


# Release Script
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
