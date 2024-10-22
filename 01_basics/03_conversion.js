let score = "33abx"
// in undefined it is NaN and in Null it print 0 and for the other depends upon the input and if string then it will be NaN
console.log(typeof (score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber); //output will be NaN 

/*
"33"=>33
"33abc"=>NaN
true=> 1; false=> 0
*/
let isloggedIN = 1

let booleanIsLoggedIn = Boolean(isloggedIN);
console.log(booleanIsLoggedIn);

/*
1=> True; 0=> False
""=> False
"Anjani" => True
*/
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);

console.log(typeof(stringNumber));