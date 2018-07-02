// another way to create objects -- CONSTRUCTOR FUNCTION
const Dice = function(sides=6) {
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

const redDice = new Dice; // uses default 6 sides
const whiteDice = new Dice(4); // sets sides to 4

new Array(1, 2, 3); // the array holds [1, 2, 3]
new Array(5); // the array holds [und, und, und, und, und]

// class declarations - constructor
class Dice2 {
    constructor(sides = 6) {
        this.sides = sides;
    }
    
    roll() {
        return Math.floor(this.sides * Math.random() + 1);
    }
}

const noDice = Dice(); // constructor function won't throw an error
const noDice = Dice2(); // class will throw an error

class Dice3 {
    constructor(sides = 6) {
        this.sides = sides;
    }
    
    roll() {
        return Math.floor(this.sides * Math.random() + 1);
    }
    
    static description() {
        return 'A way of choosing random numbers';
    }
}

Dice.description(); // works. redDice.description() doesn't work

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    
    sayHi() {
        return 'Hi, my name is ${this.name}';
    }
    
    attack() {
        return 'Feel the power of my ${this.weapon}';
    }
}

const leo = new Turtle('Leonardo');

Turtle.prototype.weapon = 'three hands';
Turtle.prototype.attack = function() {
    return 'Feel the wrath of my ${this.weapon}!';
}
leo.__proto__; // return the prototype in json? format
leo.hasOwnProperty('name'); // true because it's unique and not inherited

leo.weapon = 'Katana blades'; // sets leos weapon to this, but not any of the other turtles

class Turtle2 {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { 
            if (typeof color === 'string')
                return _color = color;  
            else
                throw new Error ('Color must be a string');
        }
        this.getColor = () => _color;
    }
}

raph = new Turtle2('Raphael', 'Red');

class Turtle3 {
    constructor(name) {
        this.name = name;
    }
    
    sayHi() {
        return 'Hi, my name is ${this.name}';
    }
    
    swim() {
        return '${this.name} paddles in the water';
    }
    
    toString() {
        return 'A turtle called ${this.name}';
    }
}

class Ninjaturtle extends Turtle3 {
    constructor(name) {
        super(name); // super refers to the parent class
        this.weapon = 'hands';
    }
    
    attack() {
        return 'Feel the power of my ${this.weapon}!';
    }
}

[1,2,3].toString(); // '1,2,3'
2..toString; // '2'

// Adding Methods to Built-In Objects
Number.prototype.isEven = function () {
    return this%2 === 0;
}

Number.prototype.isOdd() = funciton() {
    return this%2 === 1;
}

42.isEven(); // true

String.prototype.trim = String.prototype.trim || function () {
    return this.replace(/^\s+|\s+$/,'');
}

// Extend on a subclass
class myArray extends Array {
    constructor(...args) {
        super(...args);
    }
    
    delete(i) {
        return this.splice(i, 1);
    }
}

// Attributes - value, writable, enumerable, configurable
const me = {name: 'Optimus'};
me.age = 234;

Object.getOwnPropertyDescriptor(me, 'name'); // outputs attributes
Object.defineProperties(me, 'eyeColor', {value: 'blue', writable: false, enumberable: true});

Object.defineProperty(me, 'age', {
    get() {
        return 234;
    },
    set(value) {
        return value;
    }
    
});

const Human = {
    arms: 2,
    legs: 2,
    walk() {
        console.log('Walking');
    }
}

const lois = Object.create(Human);
lois.name = 'Lois Lane';
lois.job = 'Reporter';

const jimmy = Object.create(Human, { name: { value: 'Jimmy Olsen', enumerable: true }, job: { value: 'Photographer', enumerable: true } });

const Superhuman = Object.create(Human);
Superhuman.change = function() {
    return '${this.realName} goes into a phone box and comes out as ${this.name}!';
}
Superhuman.name = 'Name needed';
Superhuman.realName = 'Real name needed';

const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';
superman.change();

// more efficient
const batman = Object.create(Superhuman).init('Batman', 'Bruce Wayne');

// mixin functionality
const a = {};
const b = { name: 'JavaScript' };

Object.assign(a, b);
a.name; // a's name is b's name AKA 'JavaScrip' in this case

// Mixins and Properties
const wonderWoman = Object.create(Superhuman);
//wonderWoman.name = 'Wonder Woman';
//wonderWoman.realName = 'Diana Prince';

mixin(wonderWoman, { name: 'Wonder Woman', realName: 'Diana PRince' });

// mixins -> copy
function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object, target);
    return object;
}

function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object,...mixins);
}

const hulk = createSuperhuman({name: 'Hulk', realName: 'Bruce Banner'});

// mixin object examples
const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}

const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }
}

const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }
}

mixin(superman, flight, superSpeed, xRayVision);
mixin(wonderwoman, flight, superSpeed);

// Chaining Functions
superman.fly().move().xray();

// this = that
superman.findFriends = function(){
    const that = this;
    this.friends.forEach(function(friend) {
        console.log(`${friend.name} is friends with ${that.name}`);
    }); 
}

// Borrowing Methods
const fly = superman.fly;
fly.call(batman);

const slice = Array.prototype.slice;
slice.call(arguments, 1, 3);
