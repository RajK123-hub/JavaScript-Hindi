// Function creation

// function sayMyname(){
//     console.log("r")
//     console.log("a")
//     console.log("j")
//     console.log(" ")
//     console.log("k")
//     console.log("i")
//     console.log("r")
//     console.log("a")
//     console.log("n")
// }
// sayMyname()

// function addtwoNumbers(Number1,Number2){   //these NUmber1 and Number2 are parameters 
//     console.log(Number1+Number2)
// }
// addtwoNumbers(3,5)   //these 3 and 5 are arguments


// Another way to declare and return function

// function addtwoNumber(Number1,Number2){
//     return Number1+Number2;
// }
// let result=addtwoNumber(3,4)
// console.log("Result: ",result)

                  // This is aloso a method
// function addtwoNumbers(Number1,Number2){
//     let result=Number1+Number2
//     return result;
// }
// const result=addtwoNumbers(3,2)
// console.log("Result: ",result)



// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please Enter user name")
//         return 
//     }
//     return `${username} Just logged In`
// }
// const result=loginUserMessage()
// console.log(result);


// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please Enter user name")
//         return 
//     }
//     return `${username} Just logged In`
// }
// const result=loginUserMessage("Raj Kiran")
// console.log(result);



// function calculateCarPricing(num1){
//     return num1
// }
// console.log(calculateCarPricing(200,300,400))   // it output is 200 only and not giving all values

// So we use rest operator(...) which will give all values in array it is also called spread operator but it changes with the situation
// function calculatePricing(...num1){
//     return num1
// }
// console.log(calculatePricing(200,300,400))
 

// function calculatePricing(val1,val2,...num1){
//     return num1
// }
// console.log(calculatePricing(200,300,400))


// const user={
//     userName:"Raj Kiran Singh",
//     age:21,
//     location:"Mohali"
// }
// function handleObject(anyObject){
//     console.log(`User Name is ${anyObject.userName} and location is ${anyObject.location}`)
// }
// // handleObject(user)

//  // We can  pass object in finction to chnage value
// handleObject({
//     userName:"Ankit",
//     location:"Chandigarh"
// })

//We can also pass array like:--

// const Array1=new Array(200,300,400,500)

// function returnSecondvalue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondvalue(Array1))




//*******************Scopes*************************
 // nearly in all languages ({} this kerly braces are scope) 

//  var c=300
// let a=200
// if(true){
//     let a=10;
//     const b=200;
//     var c=30;
//     console.log("Inner Scope:",a);
// }
//  console.log(a)
//  console.log(b)
//  console.log(c)



// Hoisting:--JavaScript mein Hoisting ka matlab hai ki JavaScript code execute karne se pehle variables aur functions ki declarations ko process karta hai. Isliye kuch cases mein hum variable ya function ko uski declaration se pehle access kar sakte hain.

// function one(){
//     const user_name="Raj"

//     function two(){
//         const website="youTube"
//         console.log(user_name)
//     }
//     // console.log(website)
//     two()
// }
// one()

//+++++++++++++++++++++ Interesting ++++++++++++++++++++++++'

// Function

addOne(5)
function addOne(num){
    console.log(num+1)
    return;
}


// another way to make function

var addTwo=function(num){
    console.log(num+2)
    return
}
addTwo(5);