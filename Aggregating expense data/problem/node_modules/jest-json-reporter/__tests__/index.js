const jestJsonReporter = require('..');
const path = require('path');
const fs = require('fs');
const readPkg = require('read-pkg');

jest.mock('fs');
jest.mock('read-pkg');

const testResults = { foo: 'bar' };

const STRINGIFIED_TEST_RESULTS = JSON.stringify(testResults);

function getParams() {
  return {
    outputFile: fs.writeFile.mock.calls[0][0],
    stringifiedTestResults: fs.writeFile.mock.calls[0][1],
  };
}

test('Writes stringified results to "test-results.json" by default', () => {
  readPkg.sync.mockImplementation(() => ({}))

  jestJsonReporter(testResults);

  const { outputFile, stringifiedTestResults } = getParams();

  expect(outputFile).toEqual('./test-results.json');
  expect(stringifiedTestResults).toEqual(STRINGIFIED_TEST_RESULTS);

  fs.writeFile.mockClear();
});

test('Uses outputFile config value for output file', () => {
  const OTHER_NAME = 'other-name.json';

  readPkg.sync.mockImplementation(() => ({
    jestJsonReporter: {
      outputFile: OTHER_NAME,
    }
  }))

  jestJsonReporter(testResults);

  const { outputFile, stringifiedTestResults } = getParams();

  expect(outputFile).toEqual(OTHER_NAME);
  expect(stringifiedTestResults).toEqual(STRINGIFIED_TEST_RESULTS);

  fs.writeFile.mockClear();
});
