const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function playGame(playerChoice, computerChoice=getComputerChoice()){
    if (playerChoice==computerChoice){
        return "tie";
    }
    else if (playerChoice=="scissors"){
        winner = computerChoice=="rock" ? "AI" : "user";
    } else if (playerChoice=="rock"){
        winner = computerChoice=="paper" ? "AI" : "user";
    } else {
        winner = computerChoice=="scissors" ? "AI" : "user";
    };

    return winner;
};


const choiceBtns = document.querySelectorAll('.choice');
const comment = document.querySelector('.commentary');

let user=0, AI=0;
choiceBtns.forEach((item)=>{item.addEventListener('click', function(){
    const scores = document.querySelectorAll('#score');
    let winner = playGame(item.classList[0].toLowerCase());

    if (winner !=='tie') {
        winner=="user" ? user++:AI++;
        comment.textContent = `${winner} just won`;
    } else {
        comment.textContent = `It's a draw. You earned a round. Play again.`
    }

    scores[0].textContent = user;
    scores[1].textContent = AI;

    if (user==5 || AI==5){
        alert(`The game is over! \n User ${user} - AI ${AI}\n Consider leaving a star on the github repo!`);
        location.reload(); 
    }
})});
