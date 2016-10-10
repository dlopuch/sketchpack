module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],

  // Sketchpack overrides from AirBNB
  "rules": {

    // These are sketches.  Console debugging is okay.
    "no-console": 0,

    "max-len": ["error", 140],

    // disagreements with airbnb:
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "no-shadow": 0,
    "consistent-return": 0,
    "prefer-const": 0,
    "no-underscore-dangle": 0,
    "newline-per-chained-call": 0, // not appropriate for D3
    "key-spacing": 0, // I like making columns
    "space-before-function-paren": 0, // don't like that style
    "no-param-reassign": ["error", {"props": false} ], // let forEach's mutate objects
    "no-return-assign": 0, // Good rule, but creates confusion with arrow functions https://github.com/eslint/eslint/issues/5150
  }
};