function getComputerChoice() {
    computerChoiceInt = Math.ceil(Math.random()*10);

    console.log(computerChoice)

    if (computerChoiceInt <= 3) {
        computerChoiceString = "rock";
    } else if (computerChoiceInt > 3 && computerChoiceInt <= 6 ) {
        computerChoiceString = "paper";
    } else {
        computerChoiceString = "scissor";
    }
    return computerChoiceString;
}

function singleGame() {
    playerSelection = prompt("Type rock, paper or scissor: ");
    playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
        console.log("picked")
        computerChoice = getComputerChoice();
        
        if (playerSelection == computerChoice) {
            console.log("It's a tie")
            return 0;
        } else if ((playerSelection == "rock" && computerChoice == "scissor") || (playerSelection == "scissor" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "rock")) {
            console.log("Congrats! You win! " + playerSelection + " beats " + computerChoice);
            return 1;
        } else if ((playerSelection == "scissor" && computerChoice == "rock") || (playerSelection == "paper" && computerChoice == "scissor") || (playerSelection == "rock" && computerChoice == "paper")) {
            console.log("You lose." + computerChoice + " beats " + playerSelection);
            return -1;
        }
    } else {
        singleGame();
    }
    

}

function game() {
    scorePlayer = 0;
    scoreComputer = 0;
    for (let i = 0; i<=4; i++) {
        tempScore = singleGame();
        if (tempScore < 0) {
            scoreComputer++;
        } else if (tempScore > 0) {
            scorePlayer++;
        }
        console.log("Your score: " + scorePlayer + ", computer his score: " + scoreComputer);
    }
    if (scorePlayer > scoreComputer) {
        console.log("Congrats! You win!"); 
    }
    if (scorePlayer < scoreComputer) {
        console.log("You lose. Try again!"); 
    }
    if (scorePlayer == scoreComputer) {
        console.log("It's a tie"); 
    }
}

game()