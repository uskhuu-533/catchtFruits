const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");

let score = 0;
let lives = 3;
let highestScore = 0;
const pointer = document.createElement("div");
const livesCont = document.createElement("div")
livesCont.classList.add("liveCont")
const liveIcon1 = document.createElement("img")
const liveIcon2 = document.createElement("img")
const liveIcon3 = document.createElement("img")
liveIcon1.classList.add("liveIcon")
liveIcon2.classList.add("liveIcon")
liveIcon3.classList.add("liveIcon")
pointer.classList.add("pointer")
document.getElementById("container").appendChild(pointer)
pointer.id  = "pointer"


function score_u(){
    score+=1;
    console.log(score);
    document.getElementById("pointer").innerHTML = "score:"+score
}

setInterval(score_u, 1000)
function lives_u(){
    lives -=1;
    console.log(lives);
    if (lives==3){
        document.getElementById()
    }else if (lives==2){
        
    }else if (lives==1){

    }else if (lives == 0){
        document.getElementById().
        gameOver()
    }
}


// document.getElementById("pointer").innerHTML = "score:"+score_u(score)
