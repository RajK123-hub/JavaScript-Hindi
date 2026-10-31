// const userEmail="raj@kiran"
// if(userEmail){
//     console.log("Got User Email")
// }else{
//     console.log("Don't have user email")
// }


// const userEmail=""   // Ye empty string hai
// if(userEmail){
//     console.log("Got User Email")
// }else{
//     console.log("Don't have user email")
// }


// agar yaha usermail empty hai aur wo string hai to output "False" ayega aur agar wo Empty Array hua to output "True" hoga jaise ki hamne upar aur niche dekha


// const userEmail=[] // ye empty array hai
// if(userEmail){
//     console.log("Got User Email")
// }else{
//     console.log("Don't have user email")
// }


// +++++++++++++++++ Falsy values+++++++++++++++++++++++++++
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN these are falsy values.


// ++++++++++++++++++ Truthy Values ++++++++++++++++++++++++++++++++++
//"0", "false", " "(space btw string), [], {}, function(){}


// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Array is Empty")
// }


// const emptyObject = {}
// if(Object.keys(emptyObject).length===0){
//     console.log("Object is empty")
// }


// Nullish Coalescing Operator(??): null undefined


// let val1;

// // val1=5 ?? 10 
// // val1=null ?? 10
// // val1=undefined ?? 15
// val1=null ?? 10 ?? 20

// console.log(val1)



// Terniary Operator

// Syntex :- condition ? true : false

const iceTeaPrice=100
iceTeaPrice<80 ? console.log("Less than 80") : console.log("more than  80")


const fam="Ankit"
if(fam){
    console.log("Yes")
}
