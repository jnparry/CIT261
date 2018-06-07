//EXCEPTION

//unicorn();
//ReferenceError: unicron is not defined



//STACK TRACE

//function three(){ unicorn(); }
//function two(){ three(); }
//function one(){ two(); }
//one();
//<< index.html:13 Uncaught ReferenceError: unicorn is not defined
//    at three (index.html:13)
//    at two (index.html:17)
//    at one (index.html:21)
//    at index.html:24



//WARNINGS

//pi = 3.142;
// << JavaScript Warning: assignment to undeclared variable

 

//'use strict';

//This makes it so that an exception goes off instead of a warning, so it will help to 'catch more errors'

function strictly() {
    'use strict';
    // function code in here
}

// check if function exists before calling the method

if (window.holoDeck) {
    virtualReality.activate();
}



// ALERTS
function bedtimeAlert(age) {
    if (age < 4) {
        alert(age);
        return "8 o'clock!";
    }
    else if (age < 10) {
        alert(age);
        return "9 o'clock!";
    }
    else if (age < 13) {
        alert(age);
        return "10 o'clock!";
    }
    else if (age < 18) {
        alert(age);
        return "1 o'clock!";
    }
    else {
        return "Whenever.";
    }
}



// CONSOLE LOG
function bedtimeConsoleLog(age) {
    console.log(age);
    if (age < 4) {
        console.log("${age} < 4");
        return "8 o'clock!";
    }
    else if (age < 10) {
        console.log("${age} < 10");
        return "9 o'clock!";
    }
    else if (age < 13) {
        console.log("${age} < 13");
        return "10 o'clock!";
    }
    else if (age < 18) {
        console.log("${age} < 18");
        return "1 o'clock!";
    }
    else {
        console.log("${age} is old enough to go to bed whenever");
        return "Whenever.";
    }
}



// DEBUGGER
function bedtimeDebugger(age) {
    debugger;
    if (age < 4) {
        debugger;
        return "8 o'clock!";
    }
    else if (age < 10) {
        debugger;
        return "9 o'clock!";
    }
    else if (age < 13) {
        debugger;
        return "10 o'clock!";
    }
    else if (age < 18) {
        debugger;
        return "1 o'clock!";
    }
    else {
        debugger;
        return "Whenever.";
    }
}



// ERROR OBJECTS
const error = new Error();
const error = new Error("This is the error message");
const tError = new TypeError("You must use numbers in this function"); /// when an error in the type of value used. Ex: string used when the code was expecting a number.



// THOWING EXCEPTIONS
// causes the execution of the program to stop.
throw 2;
throw 'Up';
throw {toys: 'out of pram'};
throw new Error('Something went wrong!'); // Best practice to throw an error object. This can be caught in a catch block.

function positiveDivision(numerator, denominator) {
    'use strict';
    if (denominator <= 0) {
        throw new RangeError("You can't divide by zero or negative numbers in this funciton.")
    }
    return (numerator / denominator);
}



// EXCEPTION HANDLING
// try, catch, and finally
function imaginarySquareRoot(number) {
    'use strict';
    
    try {
        return String(squareRoot(number));
    } catch(error) {
        return sqaureRoot(-number) + 'i';
    }
}



// TESTS
function itDivides4By2() {
    return positiveDivision(4, 2) === 2;
}


    // Jest - TDD Framework
    // terminal command: npm install -g jest
    // terminal command: jest -v