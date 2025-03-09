let gameNum = 66;
let userNum = prompt("Guess the Number : ");

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number, Guess again : ");
}

console.log("Congratulations! You guessed the right number");