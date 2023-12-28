const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function playGame(playerChoice, computerChoice){
    if (playerChoice==computerChoice){
        return 0;
    }
    else if (playerChoice=="scissors"){
        winner = computerChoice=="rock" ? 2 : 1;
    } else if (playerChoice=="rock"){
        winner = computerChoice=="paper" ? 2 : 1;
    } else {
        winner = computerChoice=="scissors" ? 2 : 1;
    };

    return winner;
};

function gameToFive(){
    let player=0, computer=0;

    for (let i=0; i < 5; i++){
        let playerChoice = prompt("Enter choice");
        let computerChoice = getComputerChoice();
        const result = playGame(playerChoice.toLowerCase(), computerChoice);
        
        console.log(computerChoice);
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