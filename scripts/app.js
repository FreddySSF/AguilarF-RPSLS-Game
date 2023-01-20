let btn2go = document.getElementById("btn2go");
let firstPBtn = document.getElementById("firstPBtn");
let twoPlayerBtn = document.getElementById("twoPlayerBtn");
let levelOneBtn = document.getElementById("levelOneBtn");
let levelTwoBtn = document.getElementById("levelTwoBtn");
let levelThreeBtn = document.getElementById("levelThreeBtn");
let chooseRock = document.getElementById("chooseRock");
let imageHere = document.getElementById("imageHere");
let startBtn = document.getElementById("startBtn");


let injectHere = document.getElementById("injectHere");
let injectHere2 = document.getElementById("injectHere2");
let injectHere3 = document.getElementById("injectHere3");
let userChoice = "";
let cpuChoice = "";
let h1;

function ClearScreen() {
    injectHere.innerHTML = "";
}

// When I click Start Button, this happens.

btn2go.addEventListener("click", function () {
    imageHere.className = "none";
    startBtn.className = "none";
    ClearScreen();
    let h1 = document.createElement("h1");
    injectHere.appendChild(h1);
    h1.textContent = "Choose Mode:";
    makefirstPBtn();
    let h2 = document.createElement("h2");
    injectHere.appendChild(h2);
    h2.textContent = "";
    makesecondPBtn();
})

// Single Player Mode Button 

function makefirstPBtn() {

    /* 
     <button id="btn2go" type="button" class="btn" style="background-color: #926e0a;">First Person Mode"</button>
    */

    // Create this button. ^^

    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Single Player Mode";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function(){
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        let h1 = document.createElement("h1");
        injectHere.appendChild(h1);
        h1.textContent = "Choose Number of Rounds:";
        makeLevelOneBtn();
        let h2 = document.createElement("h2");
        injectHere.appendChild(h2);
        h2.textContent = "";
        makeLevelTwoBtn();
        let h3 = document.createElement("h3");
        injectHere.appendChild(h3);
        h2.textContent = "";
        makeLevelThreeBtn();
    })
    injectHere.appendChild(buttonDiv);
}

// Multiplayer Mode Button 

function makesecondPBtn() {
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Multiplayer Mode";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function(){
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        let h1 = document.createElement("h1");
        injectHere.appendChild(h1);
        h1.textContent = "Choose Number of Rounds:";
        makeLevelOneBtn();
        let h2 = document.createElement("h2");
        injectHere.appendChild(h2);
        h2.textContent = "";
        makeLevelTwoBtn();
        let h3 = document.createElement("h3");
        injectHere.appendChild(h3);
        h2.textContent = "";
        makeLevelThreeBtn();
    })
    injectHere.appendChild(buttonDiv);
}

// One Round Button 

function makeLevelOneBtn() {
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "One Round";
    buttonDiv.id = "injectHere";
    buttonDiv.addEventListener("click", function(){
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        h1 = document.createElement("h1");
        injectHere2.appendChild(h1);
        h1.textContent = "Player 1 Choose Your Option:";
        pickRock();
        let h2 = document.createElement("h2");
        injectHere2.appendChild(h2);
        pickPaper();
        let h3 = document.createElement("h3");
        injectHere2.appendChild(h3);
        pickScissors();
        let h4 = document.createElement("h4");
        injectHere2.appendChild(h4);
        pickLizard();
        let h5 = document.createElement("h5");
        injectHere2.appendChild(h5);
        pickSpock();
        
        
        
    })
    injectHere.appendChild(buttonDiv);
}

// Best 3 out of 5 Button 

function makeLevelTwoBtn() {
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Best 3 out of 5";
    buttonDiv.id = "injectHere";
    buttonDiv.addEventListener("click", function(){
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        let h1 = document.createElement("h1");
        injectHere2.appendChild(h1);
        h1.textContent = "Player 1 Choose Your Option:";
        pickRock();
        let h2 = document.createElement("h2");
        injectHere2.appendChild(h2);
        pickPaper();
        let h3 = document.createElement("h3");
        injectHere2.appendChild(h3);
        pickScissors();
        let h4 = document.createElement("h4");
        injectHere2.appendChild(h4);
        pickLizard();
        let h5 = document.createElement("h5");
        injectHere2.appendChild(h5);
        pickSpock();
    })
    injectHere.appendChild(buttonDiv);
}

// Best 4 out of 7 Button

function makeLevelThreeBtn() {
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Best 4 out of 7";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function(){
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        h1 = document.createElement("h1");
        injectHere2.appendChild(h1);
        h1.textContent = "Player 1 Choose Your Option:";
        pickRock();
        let h2 = document.createElement("h2");
        injectHere2.appendChild(h2);
        pickPaper();
        let h3 = document.createElement("h3");
        injectHere2.appendChild(h3);
        pickScissors();
        let h4 = document.createElement("h4");
        injectHere2.appendChild(h4);
        pickLizard();
        let h5 = document.createElement("h5");
        injectHere2.appendChild(h5);
        pickSpock();

    })
    injectHere.appendChild(buttonDiv);
}

// Game Choice: Rock Button

function pickRock() {
    GetData();
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Rock";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function() {
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        userChoice = "Rock";
        getResult(userChoice, cpuChoice);
    })
    injectHere2.appendChild(buttonDiv);
}

// Game Choice: Paper Button

function pickPaper() {
    
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Paper";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function() {
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        userChoice = "Paper";
        getResult(userChoice, cpuChoice);
    })
    injectHere2.appendChild(buttonDiv);
}

// Game Choice: Scissors Button

function pickScissors() {
    
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Scissors";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function() {
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        userChoice = "Scissors";
        getResult(userChoice, cpuChoice);
    })
    injectHere2.appendChild(buttonDiv);
}

// Game Choice: Lizard Button

function pickLizard() {
    
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Lizard";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function() {
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        userChoice = "Lizard";
        getResult(userChoice, cpuChoice);
    })
    injectHere2.appendChild(buttonDiv);
}

// Game Choice: Spock Button

function pickSpock() {
    
    let buttonDiv = document.createElement("button");
    buttonDiv.className = "btn";
    buttonDiv.type = "button";
    buttonDiv.style = "background-color: #926e0a;";
    buttonDiv.textContent = "Spock";
    buttonDiv.id = "injectHere2";
    buttonDiv.addEventListener("click", function() {
        imageHere.className = "none";
        startBtn.className = "none";
        ClearScreen();
        userChoice = "Spock";
        getResult(userChoice, cpuChoice);
    })
    injectHere2.appendChild(buttonDiv);
}

function getResult(user, cpu) {
    if(user == "Rock"){
        if(cpu == "Rock") {
            console.log("Tie!");
            h1.textContent = "Tie Game!";         
        }else if(cpu == "Paper") {
            console.log("CPU Wins! Paper Beats Rock!");
            h1.textContent = "CPU Wins! Paper Beats Rock!";    
        }else if(cpu == "Scissors") {
            console.log("Player Wins! Rock Beats Scissors!")
            h1.textContent = "Player Wins! Rock Beats Scissors!";       
        }else if(cpu == "Lizard") {
            console.log("Player Wins! Rock Crushes Lizard!");
            h1.textContent = "Player Wins! Rock Crushes Lizard!";           
        }else{
            console.log("CPU Wins! Spock Vaporizes Rock!");
            h1.textContent = "CPU Wins! Spock Vaporizes Rock!";   
        }
    }else if(user == "Paper"){
        if(cpu == "Rock") {
            console.log("Player Wins! Paper Beats Rock!");
            h1.textContent = "Player Wins! Paper Beats Rock!";
        }else if(cpu == "Paper") {
            console.log("Tie!");
            h1.textContent = "Tie Game!";
        }else if(cpu == "Scissors!") {
            console.log("CPU Wins! Scissors Beats Paper!");
            h1.textContent = " CPU Wins! Scissors Beats Paper!";
        }else if(cpu == "Lizard") {
            console.log("CPU Wins! Lizard Eats Paper!");
            h1.textContent = "CPU Wins! Lizard Eats Paper!";
        }else{
            console.log("Player Wins! Paper Disproves Spock!");
            h1.textContent = "Player Wins! Paper Disproves Spock!";
        }
    }else if(user == "Scissors"){
        if(cpu == "Rock") {
            console.log("CPU Wins! Rock Beats Scissors!");
            h1.textContent = "CPU Wins! Rock Beats Scissors!";
        }else if(cpu == "Paper") {
            console.log("Player Wins! Scissors Beats Paper!");
            h1.textContent = "Player Wins! Scissors Beats Paper!";
        }else if(cpu == "Scissors!") {
            console.log("Tie!");
            h1.textContent = "Tie Game!";
        }else if(cpu == "Lizard") {
            console.log("Player Wins! Scissors Decapitates Lizard!");
            h1.textContent = " Player Wins! Scissors Decapitates Lizard!";
        }else{
            console.log("CPU Wins! Spock Smashes Scissors!");
            h1.textContent = "CPU Wins! Spock Smashes Scissors!";
        }
    }else if(user == "Lizard"){
        if(cpu == "Rock") {
            console.log("CPU Wins! Rock Crushes Lizard!");
            h1.textContent = " CPU Wins! Rock Crushes Lizard!";
        }else if(cpu == "Paper") {
            console.log("Player Wins! Lizard Eats Paper!");
            h1.textContent = "Player Wins! Lizard Eats Paper!";
        }else if(cpu == "Scissors!") {
            console.log("CPU Wins! Scissors Decapitates Lizard!");
            h1.textContent = "CPU Wins! Scissors Decapitates Lizard!";
        }else if(cpu == "Lizard") {
            console.log("Tie!");
            h1.textContent = "Tie Game!";
        }else{
            console.log("Player Wins! Lizard Poisons Spock!");
            h1.textContent = "Player Wins! Lizard Poisons Spock!";
        }
    }else if(user == "Spock"){
        if(cpu == "Rock") {
            console.log("Player Wins! Spock Vaporizes Rock!");
            h1.textContent = "Player Wins! Spock Vaporizes Rock!";
        }else if(cpu == "Paper") {
            console.log("CPU Wins! Paper Disproves Spock!");
            h1.textContent = "CPU Wins! Paper Disproves Spock!";
        }else if(cpu == "Scissors!") {
            console.log("Player Wins! Spock Smashes Scissors!");
            h1.textContent = "Player Wins! Spock Smashes Scissors!";
        }else if(cpu == "Lizard") {
            console.log("CPU Wins! Lizard Poisons Spock!");
            h1.textContent = "CPU Wins! Lizard Poisons Spock!";
        }else{
            console.log("Tie!");
            h1.textContent = "Tie Game!";
        }
    }
};



function GetData(){
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(
        response => response.text()
    ).then(
        data => cpuChoice = data
    )
}

















/* getData();
document.getElementById("btn").addEventListener("click", () => {
        console.log(test);

            let playerAns = "Rock";

            if(playerAns == test){
                alert("tie game!");
            }
})

let test;

setTimeout(() => console.log(test), 50);

function getData() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(response => response.text()).then(data => {
      test = data
});
}
getData(); */