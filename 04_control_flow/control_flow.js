// IF

// const isUserLoggedIn=true
// const temperature=416

// if(temperature<50){
//     console.log("Temp is less than 50 ")
// }
// else{
//     console.log("Temp is greater than 50 ")
// }

// console.log("Executed")


// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User Power: ${power}`)
// }

// const balance=1000;
// if(balance < 500) {
//     console.log("less than 500")
// }else if(balance < 750) {
//     console.log("Less than 750")

// }else if(balance < 900) {
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }



// const userLoggedIn=true;
// const loggedInFromUser=false
// const loggedInFromEmail=true
// const debitCard=true;
// if(userLoggedIn && debitCard){
//     console.log("Allowed to buy course");
// }
// if(loggedInFromEmail || loggedInFromUser){
//     console.log("user logged in ")
// }



//+++++++++++++++++++++++++++ Switch Statement ++++++++++++++++++++++++++++++

const month=3

switch(month){
    case 1:
        console.log("January");
    break;
    case 2:
        console.log("February");
    break;
    case 3:
        console.log("March");
    break;

    default:
        console.log("default case match")
        break;
}

const months="feb"

switch(months){
    case "jan":
        console.log("January");
    break;
    case "feb":
        console.log("February");
    break;
    case "mar":
        console.log("March");
    break;

    default:
        console.log("default case match")
        break;
}