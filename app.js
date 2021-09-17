// Holaaaaaa

let userScore = 0;
let computerScore = 0;

function compChoice(){
let optionsArray = ['r','s','p'];
let random = Math.floor(Math.random() * optionsArray.length);
let computerChoice = optionsArray[random];
//console.log(computerChoice);
return computerChoice
};

/*function userChoice(clickedChoice){
    console.log(clickedChoice)
} */


document.getElementById('r').onclick = function(){
   let presentCompChoice = compChoice();
    
    switch(presentCompChoice){
        case 'r':
            //console.log('TIE!');
            document.getElementById('results').innerHTML = 'TIE!'
            break;
        case 'p':
            document.getElementById('results').innerHTML = 'Paper covers rock. You LOSE!';
            computerScore++
            document.getElementById('computer-score').innerHTML = computerScore;
            break;
        case 's':
            document.getElementById('results').innerHTML = 'Finally. You WIN!';
            userScore++;
            document.getElementById('user-score').innerHTML =  userScore;
            break;
    }
};

document.getElementById('p').onclick = function(){
    let presentCompChoice = compChoice();
     
     switch(presentCompChoice){
         case 'p':
            document.getElementById('results').innerHTML = 'TIE!';
             break;
         case 'r':
            document.getElementById('results').innerHTML = 'Finally. You WIN!';
            userScore++;
            document.getElementById('user-score').innerHTML =  userScore;
             break;
         case 's':
            document.getElementById('results').innerHTML = 'Scissor cuts paper. You LOSE!';
            computerScore++
            document.getElementById('computer-score').innerHTML = computerScore;
             break;
     }
 };

 document.getElementById('s').onclick = function(){
     /* PARTE EXTRAAAAAAAAAA */
     /* PARTE EXTRAAAAAAAAAA */
     /* PARTE EXTRAAAAAAAAAA */

    if(userScore + computerScore >= 5){
        
        
        location.replace("html/rickroll.html")
        
    } else{ 
     /* PARTE EXTRAAAAAAAAAA */
     /* PARTE EXTRAAAAAAAAAA */
     /* PARTE EXTRAAAAAAAAAA */

    let presentCompChoice = compChoice();
     
     switch(presentCompChoice){
         case 's':
            document.getElementById('results').innerHTML = 'TIE!';
             break;
         case 'p':
            document.getElementById('results').innerHTML = 'Finally. You WIN!';
            userScore++;
            document.getElementById('user-score').innerHTML =  userScore;
             break;
         case 'r':
            document.getElementById('results').innerHTML = 'Rock wins. You LOSE!';
            computerScore++
            document.getElementById('computer-score').innerHTML = computerScore;
             break;
     }
    }
 };

document.getElementById('reset-btn').onclick = function(){
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('computer-score').innerHTML = computerScore;

}




function repeatedResult(){
}


    

/*
**DEVUELVE EL RESULTADO DE compChoice() Y EL ID DEL BOTON PRESIONADO**

document.getElementById('r').onclick = function(){
    compChoice()
    userChoice(this.id)

};
document.getElementById('p').onclick = function(){
    compChoice()
    userChoice(this.id)

};
document.getElementById('s').onclick = function(){
    compChoice()
    userChoice(this.id)

};

**DEVUELVE EL RESULTADO DE compChoice() Y EL ID DEL BOTON PRESIONADO**
*/


