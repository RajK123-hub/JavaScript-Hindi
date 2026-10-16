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

// let myNewArr=myArray2.slice(1,4)
// console.log(myNewArr)

// console.log("B", myArray2)

// let myNewArr2=myArray2.splice(1,4) 
// console.log(myNewArr2)
// console.log(myArray2)
// slpice use karne ke bad agar ham array to fir se print karenge to usme se splice wala element remove ho gya hoga.


//*******************************************Array Function**********************************************

// const marvel_heroes=["Thor","IronMan","SpiderMan"]
// const dc_heroes=["Superman","Flash","BatMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)  //This types  of work will cause array inside array 
// console.log(marvel_heroes[3])

// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)   // return new array

                     //(... is spread Operator which is used to combine two array like this:--)
// const all_new_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)


// const another_array=[1,2,3,4,5,6,[7,8,9],1,[3,6],[7,9]]
// const usable_array=another_array.flat(Infinity)     //this (flat(infinity) can give single array from nested array like:--)
// console.log(usable_array)


console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh"));  //converts iterables or array-like objects into arrays.
console.log(Array.from({name:"Hitesh"}))  // it gives empty array because it din't know weather it has to given array of key or array of value


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))  // Made array 