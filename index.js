//////////////////////////////GLOBAL VARIABLES//////////////////////////////
let pseudo = document.getElementById('pseudoInput').value;
let intervalId = null;
let score = 0;
let leaderBoard = [];

//Lorsqu'on rafraîchit la page, on vérifie si il y a déjà un leader board dans le local storage, si oui : on synchronise notre variable JS leaderBoard
if (localStorage.getItem("gameLeaderBoard") != null) {
    leaderBoard = JSON.parse(localStorage.getItem("gameLeaderBoard"));
}
////////////////////////////////////////////////////////////////////////////

///////////////////////////////LOCAL STORAGE////////////////////////////////
function storeData() {
    let playerIndex = leaderBoard.findIndex(element => element.pseudo == pseudo);
    if (playerIndex == -1) {
        //Dans le cas où le joueur n'existe pas.
        leaderBoard.push({
            pseudo : pseudo,
            score : score,
        })
    } else {
        //Dans le cas où le joueur existe déjà.
        leaderBoard[playerIndex] = {
            pseudo : pseudo,
            score : score, 
        }
    }
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("gameLeaderBoard", JSON.stringify(leaderBoard));
}
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////PSEUDO////////////////////////////////////
submitPseudo.addEventListener("click", checkPseudo);

function checkPseudo () {
    pseudo = document.getElementById('pseudoInput').value;
    if (pseudo != "") {
        alert("Le pseudo a bien été enregistré");
    } else {
        alert("Merci de saisir votre pseudo !")
    }
}
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////SCORE////////////////////////////////////
mole = document.querySelectorAll(".mole");

mole.forEach(element => {
    element.addEventListener("click", scoreUp); 
});

function scoreUp() {
    score += 1;
    document.getElementById('score').innerHTML = score;
}
////////////////////////////////////////////////////////////////////////////


///////////////////////////////////GAME/////////////////////////////////////
function moleAppear() {
    if (time <= 0) {
        return;
    }

    const moles = document.getElementsByClassName('mole');
    const numMoles = moles.length;
    const randomNumber = Math.floor(Math.random() * numMoles);
    const randomMole = moles[randomNumber];
    randomMole.style.display = 'flex';
    randomMole.addEventListener("click", killed);

    function killed() {
        randomMole.style.display = "none";
    }

    let displayDuration = 1000;
    displayDuration -= Math.floor(score / 5) * 100;
    displayDuration = Math.max(displayDuration, 400);

    setTimeout(() => {
        randomMole.style.display = 'none';
    }, displayDuration);
}
////////////////////////////////////////////////////////////////////////////


//////////////////////////////////PLAYABLES/////////////////////////////////
startButton.addEventListener("click", start);

let timer = document.getElementById("timer");
let time = 30;

function countdown () {
    timer.innerText = time;
    time = time <= 0 ? 0 : time -1;
}

function start() {
    if(pseudo == "") {
        alert("Merci de saisir votre pseudo !");
        return;
    }

    if(intervalId != null) {
        alert("Il y a déjà une partie en cours (spam pas stp)")
        return;
    }

    countdown();

    document.getElementById('score').innerHTML = score;

    moleAppear();
    intervalId = setInterval(updateGameplay, 1000);

    setTimeout(()=> {
        reset();
    }, 30000)
}

function updateGameplay() {
    countdown() 
    moleAppear()     
}

resetButton.addEventListener("click", reset);

function reset() {
    time = 30;
    timer.innerText = 30
    clearInterval(intervalId);
    intervalId = null;
    storeData();
    score = 0;
}
////////////////////////////////////////////////////////////////////////////