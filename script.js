const choices = ['👊', "👋", '✌'];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function playGame(playerChoice, computerChoice){
    if (playerChoice==computerChoice){
        return "tie";
    }
    else if (playerChoice==='👋'){
        winner = computerChoice==='✌' ? "AI" : "user";
    } else if (playerChoice==='👊'){
        winner = computerChoice=="👋" ? "AI" : "user";
    } else {
        winner = computerChoice==='👊' ? "AI" : "user";
    };

    return winner;
};


const choiceBtns = document.querySelectorAll('.choice');
const comment = document.querySelector('.commentary');

let user=0, AI=0;
choiceBtns.forEach((item)=>{item.addEventListener('click', function(){
    const scores = document.querySelectorAll('#score');
    const computerChoice = getComputerChoice();
    const userChoice = item.children[0].textContent;
    let winner = playGame(userChoice, computerChoice);


    if (winner !=='tie') {
        winner=="user" ? user++:AI++;
        comment.textContent = `${winner} just won. User chose ${userChoice} but AI chose ${computerChoice}`;
    } else {
        comment.textContent = `It's a draw. You earned a round. Play again. ${userChoice} never beats ${computerChoice}`;
    }

    scores[0].textContent = user;
    scores[1].textContent = AI;

    if (user==5 || AI==5){
        alert(`The game is over! \n User ${user} - AI ${AI}\n Consider leaving a ⭐ on the github repo!`);
        location.reload(); 
    }
})});
