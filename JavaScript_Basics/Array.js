                          // Array
// In javaScript, array arrays are resizable and can contain a mix of different dataType.

// const myArray=[1,2,3,4,5,6,"Raj Kiran"]
// console.log(myArray)
// console.log( myArray[6])


// Another way to declare Array
const myArray2=new Array("Ankit","Raj",1,2,3)
// console.log(myArray2)
// console.log(myArray2[4])


                         // Push Method
// myArray2.push(6)
// console.log(myArray2)


                            // Pop Method(Simply remove last element)
// myArray2.pop()
// console.log(myArray2)

                            // Unshift(Insert at start)
// myArray2.unshift(9)
// console.log(myArray2)

                          //Shift(It is used to remove the first element from an array.)
// myArray2.shift()
// console.log(myArray2)

                          // to check weather a date is present in array by using "include method"
// console.log(myArray2.includes("Ankit"))


                          // to check index 
// console.log(myArray2.indexOf("Raj"))

//Using join can change the element of array into String like:--
// const myArr=myArray2.join()
// console.log(myArr)


//                           // Slice and Splice

// console.log("A",myArray2);

let myNewArr=myArray2.slice(1,4)
console.log(myNewArr)

console.log("B", myArray2)

let myNewArr2=myArray2.splice(1,4) 
console.log(myNewArr2)
console.log(myArray2)
// slpice use karne ke bad agar ham array to fir se print karenge to usme se splice wala element remove ho gya hoga