# NestedObjectAssign
This package extends the functionality given by Object.assign() to also include the values of nested objects.

## Usage
Add the empty object first, then any objects you want merged into it after. unlimited amount of params.

Example: `nestedObjectAssign({}, defaults, object1, object2, object3)`

## Tests
Tests are done using mocha. to run tests, simply type `npm run tests`.