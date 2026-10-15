// const score=400;
// console.log(score)

// const balance=new Number(100)  // another way to define number
// console.log(balance)
// console.log(typeof balance)


// console.log(balance.toString().length)
// console.log(balance.toFixed(2)); //use for precision value

// const otherNumber=23.4534
// console.log(otherNumber.toPrecision(3));

// const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'))  // make indian value of then number
// console.log(hundreds.toLocaleString())   // it convert to US style of number system



//**********************************Maths*******************************

// console.log(Math)

// console.log(Math.abs(-5))
// console.log(Math.round(4.3))  // gives round off value
// console.log(Math.ceil(4.3))   // gives always next value
// console.log(Math.floor(4.6))  //gives always previous value

console.log(Math.min(4,6,2,7,2,8,3,8,5,0))  // Use to find min value

console.log(Math.max(8,5,6,8,6,9,2))        // USe to find max value

console.log(Math.random())   // Always gives random values

console.log((Math.random()*10)+1)   // It will give random value between 1 and 10

console.log(Math.floor(Math.random()*10))  // it will convert to min of decimal



// To get random number between give values like:-
const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max-min+1)) + min)

