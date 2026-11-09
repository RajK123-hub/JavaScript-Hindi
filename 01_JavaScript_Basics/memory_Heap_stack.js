//Types of memory in Java Script(Heap and Stack)

//In primitive dataType Stack memory is used So, here we get copy of the stored value.

//In non-primitive dataType Heap memory is used So, here we get reference of the stored value.

// let myname="Raj Kiran"
// myname="Ankit"
// console.log(myname)

// let anotherName="Satyam"
// console.log(anotherName)
// anotherName=myname
// console.log(anotherName)

let user={
    Name:"Raj Kiran",
    age:23,
    upi:"singhraj123",
    email:"singhraj123@gmail.com",
}
console.log(user.email)
let user2=user
user2.email="ankit123@gmail.com"
console.log(user.email)
// console.log(user2.email)