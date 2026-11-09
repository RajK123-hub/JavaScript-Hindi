// const coding = ["js","ruby","java","python","cpp"]

// const value=coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })
// console.log(value)


                                  // Filter

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=>num > 5 )
// console.log(newNums)           // output:- [ 6, 7, 8, 9, 10 ]


// same using for each

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=[]
// myNums.forEach( (nums)=>{
//     if(nums > 5){
//         newNums.push(nums)
//     }
// } )
// console.log(newNums)




const Books = [
    {
        title: "The Alchemist",
        genre: "Fiction",
        published: 1988,
        edition: "1st Edition"
    },
    {
        title: "Atomic Habits",
        genre: "Self-Help",
        published: 2018,
        edition: "1st Edition"
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Finance",
        published: 1997,
        edition: "2nd Edition"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        published: 1925,
        edition: "1st Edition"
    },
    {
        title: "Wings of Fire",
        genre: "Autobiography",
        published: 1999,
        edition: "1st Edition"
    },
    {
        title: "Harry Potter",
        genre: "Fantasy",
        published: 1997,
        edition: "1st Edition"
    },
    {
        title: "Think and Grow Rich",
        genre: "Personal Development",
        published: 1937,
        edition: "3rd Edition"
    },
    {
        title: "Clean Code",
        genre: "Programming",
        published: 2008,
        edition: "1st Edition"
    }
];

// const userBooks=Books.filter( (bk)=>bk.genre==="Programming")

// const userBooks=Books.filter((bk)=>{return bk.published>=2000})

const userBooks=Books.filter((bk)=>{
    return bk.published>=1995 && bk.genre==="Programming"
})

console.log(userBooks)


