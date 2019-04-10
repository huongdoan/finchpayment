module.exports = {
    "env": {
        "mocha": true,
        "node": true,
        "es6": true,
        "amd": true

    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": 0,
        "no-unused-vars": [1, { "vars": "local", "args": "after-used", "ignoreRestSiblings": true }]
    }


};