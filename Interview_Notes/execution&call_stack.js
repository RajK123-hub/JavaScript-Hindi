// JavaScript Execution Context(EC):--
 // Its Types are:--
 // 1. Global Execution Context.
 // 2. Function Execution Context.
 // 3. Eval Execution Context.

// *** Memory Creation Phase or Creation Phase:---  isme jo to ham variable declare karte hai un sab ke liye space allocate karte hai aur isme execution nahi hota.

let var1=10;
let var2=5;
function addTwoNumber(num1,num2){
    let total=num1+num2;
    return total;
}
let result=addTwoNumber(var1,var2)
let result2=addTwoNumber(10,2)
console.log(result)
console.log(result2)

// memory creation phase me code ke line 9 se 14 tak execute hoga aur unme hamara:--
// val1:undefined hoga
// val2:bhi undefined hogi and
// addTwoNumber:definition hota hai
// result bhi undefined hogi aur result2 bhi undefined hi hogi  ye sab first cycle hai;
// now there will be execution phase and 
// // values will be assigne to variable

// In call-Stack is like a box which contain global execution like methods and work on lifo.