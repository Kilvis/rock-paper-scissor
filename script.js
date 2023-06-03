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