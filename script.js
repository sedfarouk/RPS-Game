const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function playGame(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        return 0;
    }
    else if (playerSelection=="scissors"){
        winner = computerSelection=="rock" ? 2 : 1;
    } else if (playerSelection=="rock"){
        winner = computerSelection=="paper" ? 2 : 1;
    } else {
        winner = computerSelection=="scissors" ? 2 : 1;
    };

    return winner;
};

function gameToFive(){
    let player=0, computer=0;

    for (let i=0; i < 5; i++){
        let playerSelection = prompt("Enter choice");
        let computerChoice = getComputerChoice();
        const result = playGame(playerSelection.toLowerCase(), computerChoice);
        
        if (result == 1){
            console.log(`You just won!`);
            player++;
        } else if (result == 2){
            console.log(`Computer just won!`);
            computer++;
        } else {
            console.log(`It's a tie.`);
            player++;
            computer++;
        };
    };

    if (player > computer){
        console.log("Congratulations! You are a champ!");
    } else {
        console.log("Better luck next time! Go and train.")
    }
}