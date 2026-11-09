
//Object Literals(It is a Way to declare object)

// Onject creation

const mySym=Symbol("MyKey1")  // creation of symbol
const JsUser={
    name:"Raj Kiran",
    age:21,
    location:"Varanasi",
    [mySym]:"MyKey1",
    gmail:"singhraj123@gmail.com",
    isLoggedIn:false,
}
// console.log(JsUser)
// console.log(JsUser.gmail)  
// console.log(JsUser["age"])

// console.log(JsUser.mySym)         //undefined
// console.log(typeof JsUser.mySym)  //string

// console.log(JsUser[mySym])       //myKey1 : Symbol key ko access karta hai
// console.log(typeof mySym)       //symbol
// console.log(JsUser["mySym"])    //undefined : Ye bhi string key "mySym" search karta hai

// arag ham symbol ko object me as a symbol use karna cahate hai to hame output me console.log(typeof JsUser.mySym) iski jagah console.log(JsUser[mySym]) ye likhna goha nahi to uska type string hi aayega see above and also  in function we have to write as  [mySym]:"MyKey1" :--

// agar ham cahate hai ki value change na kar paye koi to ham ye kar sakte hai jaise:--


// JsUser.location="Siwan"
// console.log(JsUser)
// //Before freeze function we can change object values see above but after that we can't do that:--
// Object.freeze(JsUser);
// JsUser.gmail="ankit123@gmail.com"
// console.log(JsUser)
// JsUser.name="Ankit"
// console.log(JsUser)


// Way to use function in Object :--

// JsUser.greeting=function(){
//     console.log(`Hello Js User:${this.name}`)
// }
// JsUser.greeting();
// console.log(JsUser.greeting())  // ye likhne par Hello Js user  to output de hi raha hai par ek undefined output bhi de raha kiyu ki function ke andar return type nahi hai


//Singleton(construction is banate hai to ek singleton banta hai) and literals ki tarah declare karne par singleton nahi banta 

// const tinderuser=new Object()  // It is singleton object
// const tinderUser={}            // It is a non singleton object
//console.log(tinderuser)

// const tinderUser1=new Object()
// tinderUser1.id="123sadf"
// tinderUser1.name="Raj"
// console.log(tinderUser1)

// const tinderUser={}
// tinderUser.id="567asd"
// tinderUser.name="Raj Kiran"
// tinderUser.isLoggedIn=false
// console.log(tinderUser)


// const regularUser={
//     email:"some@123",
//     fullName:{
//         firstname:"Raj Kiran",
//         lastName:"Singh"
//     }
// }
// console.log(Object.keys(regularUser))   // It gives only Key of object(email,fullName)
// console.log(Object.keys(regularUser.fullName))
// console.log(Object.values(regularUser)) // It gives only values of the Object
// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.firstname)


// Merge two object

// const Obj1={
//     name:"Ankit",
//     age:21,
//     location:"Siwan",
// }

// const Obj2={
//     location2:"Mohali",
//     university:"CU",
// }

// const obj3=Object.assign({},Obj1,Obj2)
// console.log(obj3)

//Another Method to join object using Spread method
// const Obj3={...Obj1,...Obj2}
// console.log(Obj3)

// How to use Object inside Array

// const lauda=[
//     {
//         id:1,
//         name:"raj",
//         addredd:"Siwan",
//     },
//     {
//         location:"Mohali",
//     }
// ]
// console.log(lauda)
// console.log(lauda[0])
// console.log(lauda[1])




const course={
    coursename:"JS in Hindi",
    price:"999",
    courseInstructure:"Hitesh",
}
// console.log(course.courseInstructure)

// Another way to define and take output

const {courseInstructure:instructure}=course   // here {} is doing destructuring
console.log(instructure)

const {courseInstructure}=course
console.log(courseInstructure)