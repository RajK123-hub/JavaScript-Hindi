
const randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt');

const userInput=document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')

const lastResult=document.querySelector('.lastResult')

const lowerHi=document.querySelector('.lowHi')

const startOver=document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)

        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid Number')
    }
    else if(guess<1){
        alert('Please enter valid Number')
    }
    else if(guess>100){
        alert('Please enter valid Number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too Low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}  `
}

function displayMessage(message){
    lowerHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    
}

function newGame(){

}

