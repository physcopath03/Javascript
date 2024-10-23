// console.log("2">1);
// console.log("02">1);



console.log(null>0);
console.log(null==0);   
console.log(null>=0);

// for the above conversion the reason is that an equality check == and comparisions '>''<''>=''<=' work differently as comparisions convert null to a number, treating it as 0. that's why the third one Null>=0 is true and first one null>0 is false


// Undefined will give you false always.


// "===" strict check for example
// we need to avoid the above type of conversion as they create the confusion and discripencies.need to write the clean code.
console.log("2"===2);// here now it will check the datatype as well with comparision of the value