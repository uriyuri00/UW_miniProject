
var wins = 0; 
var losses = 0; 
var ties = 0;
//user choice  
var options = ['R', 'P', 'S']

// display prompt
var playGame = function(){

    var userChoice = prompt("R,P or S?");
    
    if (!userChoice){
        return;

    }
    userChoice = userChoice.toUpperCase();

    var computerChoice = options[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice){
        ties++;
        alert('It is a tie.')
    } else if (
        (userChoice === 'R' && computerChoice ==='S'),
        (userChoice === 'S' && computerChoice ==='P'),
        (userChoice === 'P' && computerChoice ==='R')
        ) {
            wins++;
            alert('you win!');
    }
    
    else {
        losses++;
        alert('You lost');
    }

   
    var playagin = confirm('Do you want to play game again?')

    if(playagin){
        playGame();
    } else {
    alert('wins: '+ wins + '\n losess' + losses + '\n ties' + ties);
    }
}

playGame();



