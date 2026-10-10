// console.log(2===2)
// console.log(2==2)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

// console.log("2">1);
// console.log("02">1)

// console.log(undefined==0)
// console.log(undefined===0)
// console.log(undefined>0)


// let a=3
// let b="3"

// console.log(a==b) // (==)It compare the number only not dataType
// console.log(a===b)//  (===)It compare the number along with dataType




//Some Important points for Interview Perspective

//Types Of DataType

// 1.Primitive Datatype(All BuildIn dataType like-- String,Number,Boolean,Null,undefined(var is declared but but it is nor defined yet),Symbol,BigInt)
// 2.Non Primitive/Reference DataType(datatype defined by user which is directly define in memory by giving reference like-- Object,Array,Functions)


// JavaScript is a dynamically typed language.
//This means you don't need to declare a variable's data type explicitly. JavaScript determines the type at runtime, and the same variable can store different types of values.

// const outSideTemp=null
// let userEmail;
// console.log(userEmail)
// console.log(outSideTemp)

// Use of Symbol dataType
// Interview point: A Symbol is unique, even when two symbols are created with the same description.
const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId)



// USe of BigInt

// const bigNumber=234325435454565n  //n make the number inti bigint
// console.log(typeof bigNumber)


//Array
const heroes=['Raj','Kiran','Singh'];
console.log(heroes)

//Object
let myObj={
    name:'Raj Kiran',
    age:23,
}
console.log(myObj)

//Function
const myFunction=function(){
    console.log("Hello World")
}
myFunction()

