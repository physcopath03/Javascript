// # primitive Datatypes includes

/*total seven catogories: string, Number, Boolean, Null, Undefined, symbol, BigInt */

// JS is the Dynamic language

const score= 100
const ScoreVAlue = 100.2

const isloggedIN = false
const outsideTemp = null

let userEmail;

// how to define Symbol

const ID= Symbol('123')
const anotherID = Symbol('123')

console.log(ID===anotherID);

const BigNumber = 2238062896846286812319361869813689n
console.log(typeof(BigNumber));

// # Reference Type or Non-Primitive

// Array, Objects, Functions

const hero = ["Shaktiman","Naagraj", "Doga"]
let myobj= {
    Name: "Anjani",
    age: 22,
}

// how to treat a function as a variable, example mention below

const Myfunction= function(){
    console.log("Hello World");
} 


console.log(typeof(outsideTemp));