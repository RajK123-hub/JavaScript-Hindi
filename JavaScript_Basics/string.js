// String ca be denoted by single inverted coma or double inverted comma in js and both are valid.

// Concatnation in string

const name="Ankit "
const name2="Singh"

// 1st method to concatnate
// console.log(name+name2)

// 2nd method to concatnate by this(``)

// console.log(`Hello My name is ${name} ${name2}`)


// Another method to declare string
const gameName=new String("Raj Kiran Singh")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(name.toUpperCase())

// console.log(gameName.charAt(2)) //to check the character at the given position

// console.log(gameName.indexOf('r'))  // to find the position of the character

// Slice in string( We do using varName.substring(__,__))

// let newname=gameName.substring(0,4);
// console.log(newname)

// let anotherName=gameName.slice(-8,4)  // If we want to print from back we can use slice function  reason for no output is below:--
// console.log(anotherName)
 
/*Why is the output an empty string?
The slice(start, end) method extracts characters from the start index up to, but not including, the end index.
For "Raj Kiran Singh":
Character	R	a	j		K	i	r	a	n		S	i	n	g	h
Index	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14  15
Step 1: -8
A negative index counts backward from the end.
The string length is 15, so:
\[
15 + (-8) = 7
\]

Therefore, slice(-8, 4) becomes slice(7, 4).
Step 2: slice(7, 4)
The start index (7) is greater than the end index (4). For a string, slice() returns an empty string in this case.
Remember this rule
- slice(2, 6) → extracts characters at indices 2, 3, 4, 5.
- slice(-3) → extracts the last 3 characters.
- slice(-8, 4) → returns "" because the calculated start index exceeds the end index.
Interview tip: Negative indices count from the end, and the end index is excluded.*/



// Trim method remove the extra spaces from the string like--
// let first="    Hello My name is Raj Kiran Singh"
// console.log(first)
// // this removed the extra space
// let second=first;
// console.log(first.trim())

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","-"))

console.log(url.includes("hitesh"))  // to check weather present in url or not

console.log(gameName.split("-"));