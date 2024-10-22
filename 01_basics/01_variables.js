const account_Id= 122578
let account_Email="anjani@gmail.com"
var Account_Password="12345"
account_city="Delhi"
let account_state;

// account_Id=2
/*
try to use let instead of var because of issue in log scope and functional scope
possibility that we can declare the variable  as declared account_city but do not use it as it is not the good method

*/
account_Email="ab@gmail.com"
Account_Password="12344"
account_city="Jaipur"
console.log(account_Id);
console.table([account_Email,account_Id,account_city,])
console.log(account_state);