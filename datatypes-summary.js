// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100                    // number
let name = "Mahesh"                  // string
const isLoggedIn = false             // boolean
const temp = null              // object
let userEmail;             // undefined
const id = Symbol('123')           // symbol
const bigNumber = 5342133451n          // bigInt

console.log(bigNumber);              //undefined
console.log(null);                   // object


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "doremon", "hanuman", "mahi"]     // Arrays

console.log(heroes);         // object


let person = {
    name : "Mahesh", 
    age : 26,
    cgpa : 7.8, 
    isPassed : yes
}                                              // Objects

console.log(person);          // object



const myFunction = function() {

    console.log("Hello World");
    
}                                               // Function

console.log(myFunction);       //function
