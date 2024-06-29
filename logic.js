const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;
 

function getComputerChoice()
{
 return choices[Math.round(Math.random() *2)];
  
}

function getHumanChoice()
{
   return prompt("Enter one of the available choices, rock, paper, scissors").toLocaleLowerCase() ;
    
}

function playRound(humanChoice , computerChoice)
{
    if(computerChoice == humanChoice)
    {
        console.log("Same choice, select again");
    }

    if(computerChoice == "rock" && humanChoice == "paper")
    {
        console.log("Selected paper, comp selected rock, you win this round");
        humanScore++;
    }
    if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("Selected scissors, comp selected rock, you lost this round");
        computerScore++;
    }
    if(computerChoice == "paper" && humanChoice == "rock")
        {
            console.log("Selected rock, comp selected paper, you lost this round");
            computerScore++;
        }
    if(computerChoice == "paper" && humanChoice == "scissors"){
            console.log("Selected scissors, comp selected paper, you won this round");
            humanScore++;
        }
    if(computerChoice == "scissors" && humanChoice == "rock")
        {
            console.log("Selected rock, comp selected scissors, you win this round");
            humanScore++;
        }
    if(computerChoice == "scissors" && humanChoice == "paper"){
            console.log("Selected paper, comp selected scissors, you lost this round");
            computerScore++;
        }
        
    
    
}   
function playGame()
{
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
  
    console.log("Computer score:"+ computerScore+" Human Score:" + humanScore);
}
 playGame();
