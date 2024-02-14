//Le jeu ne se lance pas tant que l'utilisateur n'a pas saisi de pseudo.

//Il faut que le bouton start soit cliquable uniquement toutes les 30 sec ou après avoir cliqué sur le bouton reset.

//Le bouton reset arrête la partie, le timer (en la remettant à 30s) et remet le score à 0.

// lorsqu'on clique sur une taupe "sortie", alors le score augmente de 1pts.

//À la fin du temps, la partie s'arrête.

//passer je sais plus quoi en parametre pour que les taupes qui disparaissaent soient connectés à celles déjà dehors.

//Une fois la partie finie, récupérer le score et le pseudo, les associer ensemble et le mettre dans le leaderboard (local storage).

//classer le leaderboard bar nombre de points 


/////////////////////////////////PSEUDO/////////////////////////////////////
submitPseudo.addEventListener("click", checkPseudo);

function checkPseudo () {
    let submitedPseudo = document.getElementById("pseudoInput").value;
    if (submitedPseudo != "") {
        alert("Le pseudo a bien été enregistré");
    } else {
        alert("Merci de saisir votre pseudo !")
    }
}
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////SCORE/////////////////////////////////////
mole = document.getElementById("mole");

mole.addEventListener("click", scoreUp);

function scoreUp() {
    console.log("score +1");
}
////////////////////////////////////////////////////////////////////////////


//////////////////////////////////GAME//////////////////////////////////////
function moleAppear () {
    const moles = document.getElementsByClassName('mole');
    const randomNumber = Math.floor(Math.random() * 8) + 1
    const randomMole = moles[randomNumber];
    randomMole.style.display = "flex";
}

function moleDisapear () {
    const moles = document.getElementsByClassName('mole');
    const randomNumber = Math.floor(Math.random() * 8) + 1
    const randomMole = moles[randomNumber];
    randomMole.style.display = "none";
}


function gameplay () {

        moleAppear();
        setInterval(moleAppear, 1000);

        moleDisapear();
        setInterval(moleDisapear, 600);
}
////////////////////////////////////////////////////////////////////////////


//////////////////////////////////TIMER/////////////////////////////////////
startButton.addEventListener("click", start);

let timer = document.getElementById("timer");
let time = 29;

function countdown () {
    timer.innerText = time;
    time = time <= 0 ? 0 : time -1;
}


function start () {

    gameplay()

    countdown()
    setInterval(countdown, 1000)
}


resetButton.addEventListener("click", restart);

function restart() {
    console.log("stop")
}
////////////////////////////////////////////////////////////////////////////