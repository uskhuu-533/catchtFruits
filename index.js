const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");

let score = 0;
let lives = 3;
let highestScore = 0;
const pointer = document.createElement("div");
pointer.classList.add("pointer")
document.getElementById("container").appendChild(pointer)
pointer.id  = "pointer";


function score_u(){
    score+=1;
    console.log(score);
    document.getElementById("pointer").innerHTML = "score:"+score
}

setInterval(score_u, 1000)


// document.getElementById("pointer").innerHTML = "score:"+score_u(score)
