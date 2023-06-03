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

function singleGame(playerSelection) {
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

const playerText = document.getElementsByClassName("player");   
const computerText = document.getElementsByClassName("computer");


console.log(playerText.innerHTML)

const rockBtn = document.getElementsByClassName("rock");
const paperBtn = document.getElementsByClassName("paper");
const scissorBtn = document.getElementsByClassName("scissor");

rockBtn[0].addEventListener('click', test)

function test() {
    console.log("runned");
}

rockBtn[0].addEventListener("click", function() {game("rock");});
paperBtn[0].addEventListener("click", function() {game("paper");});
scissorBtn[0].addEventListener("click", function() {game("scissor");});

scorePlayer = 0;
scoreComputer = 0;

function game(playerSelection) {
    
    
    tempScore = singleGame(playerSelection);
    if (tempScore < 0) {
        scoreComputer++;
    } else if (tempScore > 0) {
        scorePlayer++;
    }
    playerText[0].innerHTML = "Player: " + scorePlayer;
    computerText[0].innerHTML = "Computer: " + scoreComputer;

    console.log("Your score: " + scorePlayer + ", computer his score: " + scoreComputer);
    if (scorePlayer == 5) {
        console.log("You win!")
        scorePlayer = 0;
        scoreComputer = 0;
    }  else if (scoreComputer == 5) {
        console.log("You lose")
        scorePlayer = 0;
        scoreComputer = 0;
    }  
}

