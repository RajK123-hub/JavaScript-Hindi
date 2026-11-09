  // For of

//   const arr=[1,2,3,4,5]

//   for(const num of arr){
//     console.log(num);
//   }


//   const greeting="Hello world!"
//   for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
//   }



  // Map :- It is an object which can hold key-pair value
 
  // Map is non iteratable so that we can use for in loop

  const map = new Map()
  map.set("IN","India")
  map.set("USA","United State Of America")
  map.set("Fr","France")

  //console.log(map)

//   for(const key of map){
//     console.log(key);
//   }

// for(const [key,value] of map){
//     console.log(key,":-",value)
// }


// Object is not iterable because normal JavaScript objects are not directly iterable. 

// const myObject={
//     "game1":"NFS",
//     "game2":"Spiderman"
// }
// for(const [key,value] of myObject){
//     console.log(key,":-",value)
// }


// Solution 1:- Object.entries()

//Use Object.entries() to convert your object into an array of key-value pairs.


//solution2:-  USer for in loop

const myObject = {
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"Swift by apple"
}
// for(const key in myObject){
//     console.log(key)         // Way to print key
// }
// for(const key in myObject){
//     console.log(myObject[key])   // way to print values
// }

// for(const key in myObject){
//     console.log(key,":-",myObject[key])   // way to print key,values
// }



// Using for in loop in array

const programming=["js","c++","python","java","c"]

// for(const key in programming){
//     console.log(key,":-",programming[key]);       // weay to pring key and value
// }

// for(const key in programming){
//     console.log(key)                             // way to print key
// }

// for(const key in programming){
//     console.log(programming[key])                 // Way to print value
// }



// For Each loop:

const coding=["js","ruby","python","cpp","java"]


// coding.forEach( function (item){    //call-back function hai ye kiyu ki call back me function ka name nahi hota
//     console.log(item)
// })


// coding.forEach( (item)=>{
//     console.log(item)
// } )             // This is Arrow Function


// coding.forEach(function printMe(item){
//     console.log(item)
// })                    // using simple function with forEach loop


// function printMe(item){
// console.log(item)
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[       // we are making object inside array
  {
    languageName:"JavaScript",
    languageFileName:"js"
  },
  {
    languageName:"C++",
    languageFileName:"cpp"
  },
  {
    languageName:"Java",
    languageFileName:"java"
  }
]

myCoding.forEach((item)=>{
  console.log(item.languageName)
  console.log(item.languageFileName)
})