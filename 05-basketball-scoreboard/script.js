const actualTime  = document.querySelector("#actual-time")

const scoreHome = document.querySelector(".score-home")
const scoreAway = document.querySelector(".score-away")

const newGame = document.querySelector("#new-game")
const gameOver = document.querySelector("#game-over")

let addOneToHome = document.querySelector("#add-one-to-home")
let addTwoToHome = document.querySelector("#add-two-to-home")
let addThreeToHome = document.querySelector("#add-three-to-home")
let addOneToAway = document.querySelector("#add-one-to-away")
let addTwoToAway = document.querySelector("#add-two-to-away")
let addThreeToAway = document.querySelector("#add-three-to-away")

let countScoreHome = 0;
let countScoreAway  = 0;

let countLeft = 0;
let countRight = 0;
let timeID;
let gameFlag = false;

function currentTime (){
    gameFlag = true;
    countLeft = 0;
    countRight = 0; 
    timeID = setInterval(()=>{
        let countDown = `${String(countLeft).padStart(2, '0')}:${String(countRight).padStart(2, '0')}`;
        actualTime.textContent = countDown;
        countRight = countRight + 1;
        if(countRight >= 60){
            countLeft = countLeft + 1;
            countRight = 0;
        }
        if(countLeft >= 60){
            console.log(countLeft)
            gameFlag = false
            clearInterval(timeID)
        }
        console.log(countDown)
    },1000)

    return timeID
}

gameOver.addEventListener('click', ()=>{
    gameFlag = false
    clearInterval(timeID)
})

newGame.addEventListener('click', ()=>{
    if(gameFlag === true) return;
    scoreHome.textContent = 0;
    scoreAway.textContent = 0;
    currentTime()
})

addOneToHome.addEventListener('click', ()=>{
    countScoreHome =  countScoreHome + 1
    scoreHome.textContent = countScoreHome
})

addTwoToHome.addEventListener('click', ()=>{
    countScoreHome =  countScoreHome + 2
    scoreHome.textContent = countScoreHome
})

addThreeToHome.addEventListener('click', ()=>{
    countScoreHome =  countScoreHome + 3
    scoreHome.textContent = countScoreHome
})

addOneToAway.addEventListener('click', ()=>{
    countScoreAway =  countScoreAway + 1
    scoreAway.textContent = countScoreAway
})

addTwoToAway.addEventListener('click', ()=>{
    countScoreAway =  countScoreAway + 2
    scoreAway.textContent = countScoreAway
})

addThreeToAway.addEventListener('click', ()=>{
    countScoreAway =  countScoreAway + 3
    scoreAway.textContent = countScoreAway
})
