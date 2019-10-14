# Login System Example - React / Jest

## Build instructions
1. cd into project directory
2. run `npm install`
3. run `npm start`
4. visit `http://localhost:3000/` in the browser

## Running tests
1. run `npm run test` to run all test suites

## Source code
Source code can be found in `src`, with screens located in `src/components`. Common components used by multiple screens can be found in `src/components/common`.

Within every component folder can be found an `index.js` file, acting as a shortcut when referencing the component, a `{component name}.js` file, containing that component's functionality. And a `{component name}.test.js` file containing the test suite for that component.

## Test files
Every test file contains a shallow render of its related component. Testing that every component shallowly renders correctly ensures that bugs are contained to the file that triggered them. Additional tests are present in components with more complex functionality.

## Assets
Assets are located in `src/assets`.