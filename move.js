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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//18
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//19
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//20
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],//21
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//22
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//23
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],//24
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//25
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//26
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],//27
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//28
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//29
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//30
]
// 0 - move
//1 - wall
// 2 - ghost



//
//
// Here are the initial states
//
//

// This is state of the PacMan
// var xpos = 116;
// var ypos = 192;
var xpos = 112;
var ypos = 192;
var xspeed = 0;
var yspeed = 0;
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

var lastPressedKey, PacManDirection, PacManxcol, PacManycol;

let rightTurnIsAllowed = true;
let leftTurnIsAllowed = true;
let upTurnIsAllowed = false;
let downTurnIsAllowed = false;



function gameLoop() {
    pacman = document.getElementById('pacman');

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

    // Where are we?
    if ((xpos % 8) === 0 ) {
        PacManxcol = Math.floor(xpos / 8) ;

        document.getElementById("PacManxcol").innerHTML = PacManxcol;
    }

    if ((ypos % 8) === 0) {
        PacManycol = Math.floor(ypos / 8) - 2;

        document.getElementById("PacManycol").innerHTML = PacManycol;

    }
    document.getElementById("CurrentMatrixValue").innerHTML = "y: " + PacManycol + " x: " + PacManxcol;

    // This code is not complete.
// When we complete it, it will tell us what action is possible on the block we are.
                if(layout[PacManxcol][PacManycol+1] == 0 || layout[PacManxcol][PacManycol+1] == 4){

                    rightTurnIsAllowed = true;

                } else if(layout[PacManxcol][PacManycol-1] == 0 || layout[PacManxcol][PacManycol-1] == 4){

                    leftTurnIsAllowed = true;

                } else if(layout[PacManxcol-1][PacManycol] == 0 || layout[PacManxcol-1][PacManycol] == 4){

                    upTurnIsAllowed = true;

                } else if(layout[PacManxcol+1][PacManycol] == 0 || layout[PacManxcol+1][PacManycol] == 4){

                    downTurnIsAllowed = true;

                }

            document.getElementById("rightTurnIsAllowed").innerHTML = rightTurnIsAllowed;
            document.getElementById("leftTurnIsAllowed").innerHTML = leftTurnIsAllowed;
            document.getElementById("downTurnIsAllowed").innerHTML = downTurnIsAllowed;
            document.getElementById("upTurnIsAllowed").innerHTML = upTurnIsAllowed;

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
document.getElementById("PacManDirection").innerHTML = PacManDirection;

    if (PacManDirection == "Up"){
        yspeed = -1;
        xspeed = 0;
        
        
    }else if(PacManDirection == "Down"){
        yspeed = 1;
        xspeed = 0;
         
    }else if(PacManDirection == "Left"){
        xspeed = -1;
        yspeed = 0;
     

    }else if(PacManDirection == "Right"){
        xspeed = 1;
        yspeed = 0;
       
    }else if(PacManDirection == "Stop"){
        xspeed = 0;
        yspeed = 0; 
    }

    // New Position
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    pacman.style.left = xpos;
    pacman.style.top = ypos;
//Movement of red ghost
   function  moveRed(){
     
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
    
    }

     setInterval(moveRed, 300);
    
function reset(){
    xpos = 112
    ypos = 192 
    xspeed = 0
    yspeed = 0
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;
    PacManDirection = null
    lastPressedKey = null
    redXpos = 113
    redYpos = 96
       
}
let isDeath = false;
let r;


     if(pinkXpos === xpos && pinkYpos === ypos){
        console.log(xpos + " + " + ypos);
        isDeath = true;
        console.log("death");
        
//  setTimeout(d, 2000)

    if(isDeath === true){
        
        countLives++;
        xspeed = 1;
        yspeed = -1;
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

    setInterval(gameLoop, 50);
}

// launch the game
document.addEventListener("DOMContentLoaded", begin());
