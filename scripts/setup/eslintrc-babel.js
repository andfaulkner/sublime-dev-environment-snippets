// Sample .eslintrc file if you're using babel:

{
	"rules": {
		"indent": [2, "tab"],
		"quotes": [1, "single"],
		"linebreak-style": [2, "unix"],
		"semi": [2, "always"],
		"no-console": 0,
		"no-eval": 2,
		"no-implied-eval": 2,
		"eqeqeq": 2,
		"no-self-compare": 2,
		"no-new-wrappers": 2,
		"no-new-func": 2,
		"no-fallthrough": 2,
		"no-warning-comments": [1, { 
			"terms": ["todo", "hack", "fixme", "evil"],
			"location": "start" 
		}],
		"no-void": 2,
		"wrap-iife": [2, "outside"],
		"comma-spacing": [2, {"before": false, "after": true}],
		"no-with": 2,
		"no-shadow": 2,
		"no-undef-init": 2,
		"no-undefined": 2,
		"new-cap": [2, {"capIsNew": false, "newIsCap": true}],
		"key-spacing": [2, {"beforeColon": false, "afterColon": true, "align": "value"}],
		"consistent-this": [2, "self"],
		"comma-style": [2, "last"],
		"no-spaced-func": 2,
		"no-lonely-if": 2,
		"no-useless-call": 2,
		"space-infix-ops": 2,
		"no-array-constructor": 2,
		"no-unexpected-multiline": 2,
		"no-extra-semi": 2,
		"semi-spacing": [2, {"before": false, "after": true}],
		"space-before-function-paren": [2, "always"],
		"space-in-parens": [2, "never"],
		"no-useless-concat": 2,
		"no-sequences": 2,
		"no-else-return": 2,
		"no-shadow-restricted-names": 2,
		"no-use-before-define": [2, "nofunc"],
		"default-case": 2,
		"no-path-concat": 2,
		"quote-props": [2, "as-needed"],
		"no-negated-condition": 2,
		"space-return-throw-case": 2,
		"max-len": [1, 100, 2, {"ignoreUrls": true}]
	},
  "parser": "babel-eslint",
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"extends": "eslint:recommended",
	"ecmaFeatures": {
		"jsx": true,
		"experimentalObjectRestSpread": true,
		"generators": true,
		"arrowFunctions": true,
		"defaultParams": true,
		"spread": true,
		"restParams": true,
		"blockBindings": true,
		"templateStrings": true,
		"destructuring": true,
		"forOf": true,
		"regexUFlag": true,
		"regexYFlag": true,
		"objectLiteralComputedProperties": true,
		"objectLiteralShorthandProperties": true,
		"objectLiteralShorthandMethods": true,
		"objectLiteralDuplicateProperties": true,
		"classes": true
	},
	"plugins": [
		"react"
	]
}