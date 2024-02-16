//On récupère le leader board à partir du local storage
let leaderBoard = JSON.parse(localStorage.getItem('gameLeaderBoard'));
//On récupères les containers
let containerPosition = document.getElementById("containerPositionLeaderBoard");
let containerPseudo = document.getElementById("containerPseudoLeaderBoard");
let containerScore = document.getElementById("containerScoreLeaderBoard");


//On tri les joueurs, du plus fort au plus faible (par rapport à leur score)
leaderBoard.sort(function (a, b) {
    return b.score - a.score;
  });

//On génère une ligne pour chaque joueur
for (i=0; i<leaderBoard.length; i++) {
    //La position du joueur 
    let player = leaderBoard[i];
    let positionDiv = document.createElement('div');
    containerPosition.appendChild(positionDiv);
    let p = document.createElement("p");
    positionDiv.classList.add("positionLeaderBoard");
    positionDiv.appendChild(p);
    p.innerText = i+1

    //Le pseudo du joueur
    let pseudoDiv = document.createElement('div');
    containerPseudo.appendChild(pseudoDiv);
    pseudoDiv.classList.add("positionLeaderBoard");
    pseudoDiv.innerText = player.pseudo;

    //Le score du joueur
    let scoreDiv = document.createElement('div');
    containerScore.appendChild(scoreDiv);
    scoreDiv.classList.add("positionLeaderBoard");
    scoreDiv.innerText = player.score;

}