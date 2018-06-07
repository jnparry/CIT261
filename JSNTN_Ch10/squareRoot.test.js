// squareRoot.test.js file
function squareRoot(number) {
    'use strict';

    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers");
    }
    return Math.sqrt(number);
};

test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
});

// to run: terminal command: jest -c {}
// this command will run all files that end in test.js within that folder
// if everything worked, we will get a PASS notification