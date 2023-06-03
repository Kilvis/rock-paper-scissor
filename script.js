function getComputerChoice() {
    computerChoiceInt = Math.ceil(Math.random()*10);

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
    if (playerSelection == "rock" || playerSelection != "paper" || playerSelection != "scissor") {
        playerSelection = prompt("Please type rock, paper or scissor: ");
    }
    playerSelection.toLowerCase();
    computerChoice = getComputerChoice();
    
    if (playerSelection == computerChoice) {
        console.log("It's a tie")
    } else if ((playerSelection == "rock" && computerChoice == "scissor") || (playerSelection == "scissor" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "rock")) {
        console.log("Congrats! You win!");
    } else if ((playerSelection == "scissor" && computerChoice == "rock") || (playerSelection == "paper" && computerChoice == "scissor") || (playerSelection == "rock" && computerChoice == "paper")) {
        console.log("You lose. Try again.");
    }
}