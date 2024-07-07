const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;
let humanChoice;
let choiceDisplay = "";
function getComputerChoice() {
    return choices[Math.round(Math.random() * 2)];

}

function getHumanChoice(choose) {
    //return prompt("Enter one of the available choices, rock, paper, scissors").toLocaleLowerCase() ;
    return choose;
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 && computerScore >= 5) {
        if (computerScore >= 5) {
            points.textContent = "Computer won!"
        }
        if (humanScore >= 5) {
            points.textContent = "You won!";
        }

    } else {
        if (computerChoice == humanChoice) {
            choiceDisplay += "Same choice, select again";
        }

        if (computerChoice == "rock" && humanChoice == "paper") {
            choiceDisplay += "Selected paper, comp selected rock, you win this round ";
            humanScore++;
        }
        if (computerChoice == "rock" && humanChoice == "scissors") {
            choiceDisplay += "Selected scissors, comp selected rock, you lost this round ";
            computerScore++;
        }
        if (computerChoice == "paper" && humanChoice == "rock") {
            choiceDisplay += "Selected rock, comp selected paper, you lost this round ";
            computerScore++;
        }
        if (computerChoice == "paper" && humanChoice == "scissors") {
            choiceDisplay += "Selected scissors, comp selected paper, you won this round ";
            humanScore++;
        }
        if (computerChoice == "scissors" && humanChoice == "rock") {
            choiceDisplay += "Selected rock, comp selected scissors, you win this round ";
            humanScore++;
        }
        if (computerChoice == "scissors" && humanChoice == "paper") {
            choiceDisplay += "Selected paper , comp selected scissors, you lost this round ";
            computerScore++;
        }

        points.textContent = "Computer score:" + computerScore + " Human Score:" + humanScore;
        logs.textContent = choiceDisplay;


    }
}

const logs = document.querySelector(".board");
const points = document.querySelector(".score");


/*
function playGame()
{   
   /* humanChoice = getHumanChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanChoice);
    humanChoice = getHumanChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanChoice);humanChoice = getHumanChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanChoice);humanChoice = getHumanChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanChoice);humanChoice = getHumanChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanChoice);
  
    console.log("Computer score:"+ computerScore+" Human Score:" + humanScore);
}
 playGame();
*/

/*const bod = document.querySelector(".bo");

const para = document.createElement("p");
para.textContent = "Hey I am red";
para.style.color = "red";

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3";
heading.style.cssText = "color: blue;";


const div1 = document.createElement("div");
const innerPara = document.createElement("p");
const innerHead = document.createElement("h1");

innerPara.textContent = "ME TOO!"
innerHead.textContent = "I'm in a div"

div1.appendChild(innerHead);
div1.appendChild(innerPara);
div1.style.cssText = "border-color: black; background : pink"

 
bod.appendChild(para);
bod.appendChild(heading);
bod.appendChild(div1);

*/