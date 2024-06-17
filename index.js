

function RPS(){

    const choices = ["rock", "paper", "scissors"];

    
    choice = window.prompt("choose one (ROCK PAPER SCISSORS) :")

    computerChoice = choices[(Math.floor(Math.random() * 3 ) )]

    if (choice === choices[0]){
        comparison()
        document.getElementById("output").textContent = " you chose " + choice + " and computer chose " + computerChoice ;
    } 

    else if (choice !== choices[1]){
        comparison()
        document.getElementById("output").textContent = " you chose " + choice + " and computer chose " + computerChoice ;
    } 

    else if (choice !== choices[2]){
        comparison()
        document.getElementById("output").textContent = " you chose " + choice + " and computer chose " + computerChoice ;

    }
    else{
        alert("input the correct choice! ")
    }

    
}
function comparison(){

    if ( choice === "paper" && computerChoice === "scissors" ||
         choice === "rock" && computerChoice === "paper" || 
        choice === "scissors" && computerChoice === "rock")
        {
         document.getElementById("output2").textContent = "COMPUTER WINS!"
    }

    else if (choice === computerChoice){
        document.getElementById("output2").textContent = "ITS A TIE!"
    }

    else if
        (
        ( computerChoice === "paper" &&  choice === "scissors" ||
          computerChoice === "rock" && Choice === "paper" || 
          computerChoice === "scissors" && Choice === "rock")

       ){

        document.getElementById("output2").textContent = "YOU WIN!"
    }
    else{
        document.getElementById("output2").textContent = "INVALID CHOICE"
    }

}
function resetButton(){
    RPS()
}
function hoverEffect(){

        document.getElementById("buttonr").textContent = "↻"
}



