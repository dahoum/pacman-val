//
//
// Here are constants
//
//
let layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0    //28
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//1
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//2
    [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],//3
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//4
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//5
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],//6
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],//7
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],//8
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],//9
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],//10
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//11
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 6, 6, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//12
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//13
    [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4],//14
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//15
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//16
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//17
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//18
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],//19
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//20
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//21
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//22
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],//23
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//24
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//25
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],//26
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//27
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//28
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//29
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//30
]
// 0 - move
//1 - wall
// 2 - ghost


var rowPos, columnPos;
var RequestPacManDirection;

//This is state of enemies
var redXpos = 113
var redYpos = 96
var pinkXpos = 113
var pinkYpos = 119
var greenXpos = 128
var greenYpos = 120
var yellowXpos = 98
var yellowYpos = 120

var countLives = 1;
var gameOver = false;

var lastPressedKey, PacManDirection;
var pacmanRowIndex = 23, pacmanColumnIndex = 13;

let rightTurnIsAllowed = false;
let leftTurnIsAllowed = false;
let upTurnIsAllowed = false;
let downTurnIsAllowed = false;

let isDeath = false;

pacman = document.getElementById('pacman');

pacman.style.top = 8 * (pacmanRowIndex+1) ;
pacman.style.left = 8 * (pacmanColumnIndex+1) ;

red = document.getElementById("red");
pink = document.getElementById("pink");
green = document.getElementById("green");
yellow = document.getElementById("yellow");

red.style.left = redXpos;
red.style.top = redYpos;
pink.style.left = pinkXpos;
pink.style.top = pinkYpos;
green.style.left = greenXpos;
green.style.top = greenYpos;
yellow.style.left = yellowXpos;
yellow.style.top = yellowYpos;


function gameLoop() {
    
  
    document.getElementById("CurrentMatrixValue").innerHTML = "col: " + pacmanColumnIndex + " row: " + pacmanRowIndex;

    if(layout[pacmanRowIndex][pacmanColumnIndex+1] == 0 || layout[pacmanRowIndex][pacmanColumnIndex+1] == 4 ){
        rightTurnIsAllowed = true
    }else{
        rightTurnIsAllowed=false
    }
     if(layout[pacmanRowIndex][pacmanColumnIndex-1] == 0 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 4 ){
        leftTurnIsAllowed = true
    } else{
        leftTurnIsAllowed = false
    }
    if(layout[pacmanRowIndex-1][pacmanColumnIndex] == 0 || layout[pacmanRowIndex-1][pacmanColumnIndex] == 4){
        upTurnIsAllowed = true
    }else if(layout[pacmanRowIndex-1][pacmanColumnIndex] == 1){
        upTurnIsAllowed = false
        
    }else{
        upTurnIsAllowed = false
    }
     if(layout[pacmanRowIndex+1][pacmanColumnIndex] == 0 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 4){
        downTurnIsAllowed = true
    }else{
        downTurnIsAllowed=false
    }

    
    document.getElementById("up").innerHTML ="Up " + layout[pacmanRowIndex-1][pacmanColumnIndex] ;
    document.getElementById("down").innerHTML = "Down " + layout[pacmanRowIndex+1][pacmanColumnIndex];
    document.getElementById("left").innerHTML ="Left " + layout[pacmanRowIndex][pacmanColumnIndex-1];
    document.getElementById("right").innerHTML =  "Right " + layout[pacmanRowIndex][pacmanColumnIndex+1];


    document.getElementById("rightTurnIsAllowed").innerHTML = rightTurnIsAllowed;
    document.getElementById("leftTurnIsAllowed").innerHTML = leftTurnIsAllowed;
    document.getElementById("downTurnIsAllowed").innerHTML = downTurnIsAllowed;
    document.getElementById("upTurnIsAllowed").innerHTML = upTurnIsAllowed;
    document.getElementById("PacManDirection").innerHTML = PacManDirection;

    if (lastPressedKey == "ArrowUp" && (upTurnIsAllowed == true)){
    // if (lastPressedKey == "ArrowUp" ){
        console.log("ArrowUp");
        PacManDirection = "Up";
        //Animating pacman when moving up
       frame = [
            '209px -32px',
            '225px -32px'
        ]

        let currentFrameIndex = 0;

        setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
        }, 200)


    }else if(lastPressedKey == "ArrowDown" && (downTurnIsAllowed == true)){
    //  }else if(lastPressedKey == "ArrowDown" ){
        console.log("ArrowDown");
        PacManDirection = "Down";

        //Animating pacman when moving down
        frame = [
            '209px -47px',
            '225px -47px'
        ]

        let currentFrameIndex = 0;
        setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
        }, 200)
    }else if(lastPressedKey == "ArrowLeft" && (leftTurnIsAllowed == true)){
    // }else if(lastPressedKey == "ArrowLeft" ){

        console.log("ArrowLeft");
        PacManDirection = "Left";

        //Animating pacman when moving left
       frame = [
            '209px -15px',
            '225px -15px'
        ]

        let currentFrameIndex = 0;
        
        setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
        }, 200)


    }else if((lastPressedKey == "ArrowRight") && (rightTurnIsAllowed == true) ){
    // }else if((lastPressedKey == "ArrowRight") ){

        console.log("ArrowRight");
        PacManDirection = "Right";

        //Animating pacman when moving right
          frame = [
            '209px 0px',
            '225px 0px'
        ]

        let currentFrameIndex = 0;

       setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
        }, 200)
    }

     if (PacManDirection == "Up"){
        pacman.style.top = parseInt(pacman.style.top) - 8 + "px";
        pacmanRowIndex--
    }else if(PacManDirection == "Down"){
        pacman.style.top = parseInt(pacman.style.top) + 8 + "px";
        pacmanRowIndex++
    }else if(PacManDirection == "Left"){
        pacman.style.left = parseInt(pacman.style.left) - 8 + "px";
        pacmanColumnIndex--
    }else if(PacManDirection == "Right"){
        pacman.style.left =  parseInt(pacman.style.left) + 8 + "px";
        pacmanColumnIndex++
    }else if(PacManDirection == "Stop"){
       
        

    }

    if(pacmanColumnIndex <= 0 || pacmanRowIndex <= 0){
    
    }
    if(pacman.style.left == undefined){
        pacmanColumnIndex++
        pacmanRowIndex++
        pacman.style.top = parseInt(pacman.style.top) + 8 + "px";
    }

   
//Movement of red ghost
     setInterval(() => {
        if((redXpos  > 0 && redXpos + 10 <= 200 ) || (redYpos > 0 && redYpos + 10 <= 200)){
        let currentRedFrameIndex = 0;
   let direction = Math.floor(Math.random() * 4) ;
    switch(direction){
        case 1:
            // up
            redYpos -= 5;
            redFrame = [
                '160px -65px',
                '143px -65px'
            ]
    
             currentRedFrameIndex = 0;
    
            setInterval(() => {
                 red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                 currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
            }, 20)
    
            break;
        case 2:
            //right
            redXpos += 5;
            redFrame = [
                '223px -65px',
                '208px -65px'
            ]
            currentRedFrameIndex = 0;
    
            setInterval(() => {
                 red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                 currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
            }, 20)
            break;
        case 3:
            //down
            redYpos += 5;
            redFrame = [
                '128px -65px',
                '111px -65px'
            ]
    
            currentRedFrameIndex = 0;
    
            setInterval(() => {
                 red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                 currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
            }, 20)
            break;
        case 4:
            //left
            redXpos += 5;
            redFrame = [
                '208px -65px',
                '192px -65px'
            ]
    
            currentRedFrameIndex = 0;
    
            setInterval(() => {
                 red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                 currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
            }, 20)
    
            break;
    }
red.style.left = redXpos;
        red.style.top = redYpos;
    }
     }, 300);
    
    function reset(){
    pacman.style.top = 8 * (pacmanRowIndex+1)   ;
    pacman.style.left = 8 * (pacmanColumnIndex+1) ;
    PacManDirection = null
    lastPressedKey = null
    redXpos = 113
    redYpos = 96
       
    }

     if(pinkXpos === rowPos && pinkYpos === columnPos){
        console.log(rowPos + " + " + columnPos);
        isDeath = true;
        console.log("death");

         if(isDeath === true){
        countLives++;
        isDeath = false;
        Dframe = [
            '176px 0px',
            '160px 0px',
            '144px 0px',
            '128px 0px',
            '113px 0px',
            '97px 0px',
            '81px 0px',
            '65px 0px',
            '50px 0px',
            '35px 0px',
            '16px -4px'
        ]
           for(let i = 0; i < Dframe.length; i++){
             pacman.style.backgroundPosition = Dframe[i];
            
            }
        
       setTimeout(reset, 300)
        }
    }
    //Count lives
    setTimeout(() => {
         if(countLives === 1){
        document.getElementById("lives2").style.visibility = "hidden";
    }else if(countLives === 2){
        document.getElementById("lives1").style.visibility = "hidden";
    }else if(countLives === 3){
        document.getElementById("lives").style.visibility = "hidden";
    }else if(countLives === 4){
        gameOver = true;
    }
    }, 30)
    //game over
    setTimeout(() => {
        if(gameOver === true){
        document.getElementById("lives1").style.visibility = "visible";
       document.getElementById("lives2").style.visibility = "visible";
       document.getElementById("lives").style.visibility = "visible";
   }
}, 30);

document.addEventListener("keydown", (e) => {
        lastPressedKey = e.code;
        document.getElementById("lastPressedKey").innerHTML = lastPressedKey;
    }
);
}
// set the initial state and launch the game loop
function begin(){
    setInterval(gameLoop, 900);
}

// launch the game
document.addEventListener("DOMContentLoaded", begin);



