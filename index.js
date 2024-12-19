const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");

let score = 0;
let lives = 3;
let highestScore = 0;
const pointer = document.createElement("div");
const livesCont = document.createElement("div")
livesCont.classList.add("liveCont")
livesCont.id = "liveCont"
const liveIcon1 = document.createElement("div")
const liveIcon2 = document.createElement("div")
const liveIcon3 = document.createElement("div")
liveIcon1.classList.add("liveIcon")
liveIcon2.classList.add("liveIcon")
liveIcon3.classList.add("liveIcon")
pointer.classList.add("pointer")
pointer.id  = "pointer"
document.getElementById("container").appendChild(pointer)
document.getElementById("container").appendChild(livesCont)
document.getElementById("liveCont").appendChild(liveIcon1);
document.getElementById("liveCont").appendChild(liveIcon2);
document.getElementById("liveCont").appendChild(liveIcon3);

function score_u(){
    score+=1;
    console.log(score);
    document.getElementById("pointer").innerHTML = "score:"+score
}

setInterval(score_u, 1000)
function lives_u(){
    lives -=1;
    console.log(lives);
    if (lives==2){
        document.getElementById("liveCont").removeChild(liveIcon2);
        
    }else if (lives==1){
        document.getElementById("liveCont").removeChild(liveIcon3)
        ;
    }else if (lives == 0){
        document.getElementById("liveCont").removeChild(liveIcon1)
        gameOver();
        
    }
}
setInterval(lives_u, 5000)

// document.getElementById("pointer").innerHTML = "score:"+score_u(score)
