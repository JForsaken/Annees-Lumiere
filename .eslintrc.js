module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "rules": {
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
  },
  "parser": "babel-eslint"
};
