/*****************************************************************
* FUNCTIONS / VARIABLES / IMPLEMENTATIONS
*****************************************************************/
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
square.description = 'Squares a number that is provided as an argument';

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    
    return square.cache[x]
}

function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

// Immediately Invoked Function Expression
(function(){
    const temp = 'World';
    console.log(`Hello ${temp} This Is An Immediately Invoked Function Expression!`);
})();

// Temporary variables inside of IIFEs
let a = 1;
let b = 2;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

// Swapping variable values
let [c,d] = [1,2];
[c,d] = [d,c];

// IIFE Initialization
(function() {
    const name = 'Sybille'; // In reality, probably obtained from a cookie 
    const days = ['Sontag','Montag','Dienstag','Midwoch','Donnerstag', 'Freitag','Samstag'];
    const date = new Date(),today = days[date.getDay()]; console.log(`Wilkommen ${name}. Heute ist ${today}`);
})();

// A second way to do the previous example
{
    const name = 'Peter Parker'; // In reality, probably obtained from a cookie 
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()]; console.log(`Welcome back ${name}. Today is ${today}`); 
}

// SELF-CONTAINED CODE BLOCKS
// Block A
(function() {
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());

// Block B
(function() {
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

/*****************************************************************
* OUTPUTTING THE INFORMATION TO THE CONSOLE.
*****************************************************************/
// testing the square's length
console.log(square.length);

// testing the names
console.log(sayHello.call(clark));
console.log(sayHello.call(bruce));

// testing the updated sayHello function
console.log(sayHello.call(clark, 'How do you do'));

// needs to have null as the first parameter
console.log(square.call(null, 4));

// needs to have the parameter in the form of a list, even if there's only one element
console.log(square.apply(null, [4]));

// testing the sqaure's description
console.log(square.description);

// testing the cache updated square function
console.log(square(3));
console.log(square(-11));
console.log(square.cache);

// testing temporary variables inside of IIFEs
console.log(a);
console.log(b);
// console.log(temp); // this gives an error because temp doesn't exist anymore

// testing the swapability of variable values
console.log(c); // this should now be 2 (originally it was 1)
console.log(d); // this should now be 1 (originally it was 2)

/*****************************************************************
* NOTES. COMMENTS.
*****************************************************************/
// "Recommended way to use strict mode is to place all your code inside an IIFE"