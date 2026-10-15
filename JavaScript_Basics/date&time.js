// Dates

// let myDates=new Date()
// console.log(myDates.toString())
// console.log(myDates.toLocaleString())
// console.log(myDates.toLocaleTimeString())
// console.log(myDates.toISOString())
// console.log(myDates.toUTCString())

// let myCreatedDate=new Date(2026,0,23)
// console.log(myCreatedDate.toDateString())        //In javaScript Moth start with zero

// let myCreatedDate=new Date("2026-10-15")
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate=new Date(2026,9,15)
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp= Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))   //Conversion to millisecond

// let newDate=new Date()
// console.log(newDate)   // Get current date
// console.log(newDate.getMonth()+1)  //gives current Month
// console.log(newDate.getDay())     // given current day in number from (1 to 7)

// I want to print somthing  then i can rum code like:--
// let newDate=new Date()
// console.log(`Raj Kiran is coding from ${newDate.toDateString()} to Jan 2027`)

// let newDate=new Date()
// console.log(newDate.toLocaleString())

let newDate=new Date()
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))