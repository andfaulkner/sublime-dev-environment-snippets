console.log('----------------------------------------------------------------------------------');
//####################################
//#          BASIC GENERICS          #
//####################################
console.log('***************** BASIC GENERICS *****************');
// Generics let you define type relationships without specifying actual types.
//
// Examples of the concept (i.e. examples of what a generic might communicate):
//
// -  for a function taking one argument, if the value given arg is of type "x", then said fn's
//    output must ALSO be type "x". Type "x" could be any type. This e.g. states that if a number
//    is given to the function, a number must be returned; whereas if a string is given to the
//    function, a string must be returned, and so on.
//
// -  for a function taking 3 arguments, if arg 1 is type "x" and arg 2 is type "y" then arg 3 must
//    also be type "x", and the return value must be an array w/ 2 items: the 1st of type "x", and
//    the 2nd of type "y". Thus, if a string then number is given, the third value given must also
//    be a string, and an arr w/ a string at item 1 & number at item 2 must be returned. Whereas if
//    a number then string is given, the 3rd val given must also be number, and an array w/ a
//    NUMBER at item 1 & string at item 2 must be returned.
//
// Generics define type RELATIONSHIPS of a function rather than individual types. If generics could
// talk, they'd say things like: "if you give me an integer here, you have to also give me another
// integer over there, but you can't also give me an integer at that 3rd location"
//
console.log(" ----- 'Identity' generic: must return item of same type as value passed in -----");
function identity(arg) {
    console.log('identity func! pass it in, and I\'ll spit it right back out!: Here ya go: ', arg);
    return arg;
}
identity(4);
identity('hey!');
identity({ numberOfBumcheeks: 3, numberOfBumcracks: 1 });
identity(['hey!', 'yes you!', 'wtf dude?']);
identity({ a: 'ok' });
identity(true);
console.log(' --- Generic that returns array containing required # of duplicates of given val ---');
function duplicator(arg, numDuplicates) {
    let arr = Array.apply(null, Array(numDuplicates)).map(() => arg);
    // let arr = Array(numDuplicates).fill(arg);
    console.log(arr);
    return arr;
}
duplicator('yay!', 4);
console.log('----------------------------------------------------------------------------------');
//###################################
//#          GENERIC TYPES          #
//###################################
console.log('***************** GENERIC TYPES *****************');
console.log(' ----- Complex generic function types (define rets, args, allowed assignments) -----');
function identity3(arg) {
    console.log('in identity3: ', arg);
    return arg;
}
//------------- 1 -------------\   /-- 2 --\
let myIdentity = identity3;
//
//1: generic function type definition
//2: actual function assigned to generic function type definition. Must meet definition in 1.
myIdentity('ok');
console.log(' ----- Define complex generic function type right beside function expression -----');
let identity4 = function identity4(arg) {
    console.log('in identity4: ', arg);
    return arg;
};
identity4(42);
// This madness is also valid, but seriously don't do it...this is what generic interfaces are for
let identity5 = (arg) => arg;
console.log('Output of mad identity5 function w/ confusing typedef: ', identity5('YAY!'));
console.log('----------------------------------------------------------------------------------');
//########################################
//#          GENERIC INTERFACES          #
//########################################
console.log('***************** GENERIC INTERFACES *****************');
console.log(' ----- Def generic function interface -----');
let identity7 = (arg) => arg;
console.log('identity7 (using generic fn) output: ', identity7({ a: 'value of eeeeeeehhhh!!!' }));
console.log(' ----- Purpose of generic fn interface: ensure vars using interface only get assigned matching fns -----');
let someRandomFn1 = (arg) => arg;
console.log('someRandomFn1 can be assigned to identity8 because the types match');
let identity8 = someRandomFn1;
console.log('identity8 (using generic fn) output: ', identity8(['abc', 'def']));
let someRandomFn2 = function someRandomFn2(thing, otherThing) {
    return 'BEGIN\n  ' + thing + '\n' + otherThing.toString() + '\nEND';
};
let identity9;
console.log("someRandomFn2 can't be assigned to identity9 because the types don't match");
// This produces a compile-time error:
//     identity9 = someRandomFn2;
console.log('----------------------------------------------------------------------------------');
//#####################################
//#          GENERIC CLASSES          #
//#####################################
console.log('***************** GENERIC CLASSES *****************');
console.log(' ----- Define a generic class, no actual values defined -----');
class GenericNumber {
}
console.log(' ----- Instantiate generic class with a type declared -----');
let gn = new GenericNumber();
console.log(' ----- Set values for class params that meet the requirements -----');
// gn.zeroValue = "asdf";  << ERROR - wrong type, it must be a number
gn.zeroValue = 0;
gn.add = (x) => {
    console.log('in GenericNumber#add: value x is: ' + x);
    return x + 3;
};
// gn.add(4); <<< will error even though the above fn is OK. It still expects it to match the class
gn.add(4, 4); // <<< ok, even though the 2nd 4 is useless
//=> 7
gn.add = (x, y) => {
    console.log('gn.add: second pass. Given numbers: ', x, 'and', y, ' -- totaling', x + y);
    return (x + y);
};
gn.add(6, 7);
//=> 13  
console.log(' ----- Note: static members of a class can\'t use the class\' type params -----');
console.log('----------------------------------------------------------------------------------');
//###############################################
//#          EXTENDING GENERIC CLASSES          #
//###############################################
console.log('***************** EXTENDING GENERIC CLASSES *****************');
console.log(' ----- Create a generic class ----- ');
class Component {
}
console.log(' ----- Create a class extending generic class ----- ');
class Password extends Component {
    constructor(id) {
        super();
        this.genFullTitleFromId = (salt) => {
            let salted = this.id + ((salt ^ 2) - salt) + 'asdf' + this.id;
            console.log('007-generics-Password#genFillTitleFromId: salted: ', salted);
            return salted;
        };
        this.id = id;
    }
}
console.log(' ----- Instantiate class that extended generic class ----- ');
let pwd = new Password('my_password_123');
pwd.genFullTitleFromId(3416);
console.log('----------------------------------------------------------------------------------');
//#########################################
//#          GENERIC CONSTRAINTS          #
//#########################################
console.log('***************** GENERIC CONSTRAINTS *****************');
console.log(' ----- Write a fn that works on any type matching the given constraints ----- ');
console.log(' ----- i.e. any function that meets the given interface, but can have anything else ----- ');
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentityTwo(arg) {
    console.log(arg.length);
    arg.length = 20;
    return arg;
}
function loggingIdentityThree(arg) {
    console.log(arg.length);
    arg.length = 20;
    let newArg = arg;
    Object.keys(arg).forEach((key, i, arr) => { newArg[key] = 'yep'; });
    console.log(newArg);
    return newArg;
}
// myType must contain 53 for this to work
let myType = {
    length: 53,
    name: 'asdf the poo llama'
};
loggingIdentityThree(myType);
loggingIdentityThree('asdfasdf'); // OK, because strings have a length property
// loggingIdentityThree(6); // << ERROR, because numbers have no length property
console.log(" ----- Gneneric  -----");
