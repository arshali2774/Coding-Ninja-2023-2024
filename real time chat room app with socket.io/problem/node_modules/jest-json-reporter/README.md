# Jest JSON Reporter

JSON test results processor for Jest. Outputs the test results in JSON format as speified in the [jest documentation](http://facebook.github.io/jest/docs/configuration.html#testresultsprocessor-string) to a file called test-results.json (configurable)

## Setup

```
npm install --save-dev jest-json-reporter
```

Then add to Jest config in the package.json

```
...
"jest": {
  "testResultsProcessor": "./node_modules/jest-json-repoter"
},
...
```

## Configure

### output file name

By default, output file goes to test-results.json. You can configure it by adding a outputFile field under jestJsonReporter in your package.json file:

```
"jestJsonReporter": {
  "outputFile": "tests/results.json"
},
```

