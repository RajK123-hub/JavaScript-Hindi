                              // Map

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((nums)=>nums+10)
// console.log(newNums)


// chaining(using multiple thing like map,filter and more)

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums
//                     .map((nums)=>nums*10)
//                     .map((nums)=>nums+1)
//                     .filter((nums)=>nums>=40)

//     console.log(newNums)


                                    // Reduce method(reduce() JavaScript ka array method hai jo array ke saare elements ko process karke ek single value return karta hai.)

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const myTotal=myNums.reduce(function (accumulator,currentValue){
//     console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
//     return accumulator+currentValue
// },0)
// console.log(myTotal)




// Using Reduce method using arrow function

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const myTotal=myNums.reduce( (accumulator,currentValue)=>accumulator+currentValue , 0)
// console.log(myTotal)




const shoppingCart=[
    {itemName:"Js Course",
        price:999
    },
    {itemName:"Py Course",
        price:849
    },
    {itemName:"Java Course",
        price:499
    },
    {itemName:"Mobile Course",
        price:4999
    },
    {itemName:"AI-ML Course",
        price:3999
    },
];
const priceToPay=shoppingCart.reduce((accumulator,items)=>accumulator+items.price,0)

console.log(priceToPay)