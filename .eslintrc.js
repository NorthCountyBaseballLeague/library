module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "comma-dangle": 0,
        "prefer-destructuring": ["error", {
            "array": false,
            "object": false
        }, {
            "enforceForRenamedProperties": false
        }]
    }
};