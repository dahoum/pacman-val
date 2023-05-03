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

let divArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[]
];

let spritesheet = document.getElementById("spritesheet");
let eatDiv;

var rowPos, columnPos;
var RequestPacManDirection;

//This is state of enemies
let redRowIndex = 11
let redColumnIndex = 14
let redWantedDirection
// var redXpos = 113
// var redYpos = 96
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

let redRightTurnIsAllowed = false;
let redLeftTurnIsAllowed = false;
let redUpTurnIsAllowed = false;
let redDownTurnIsAllowed = false;

let isDeath = false;

pacman = document.getElementById('pacman');

pacman.style.top = 8 * (pacmanRowIndex+1);
pacman.style.left = 8 * (pacmanColumnIndex+1);

red = document.getElementById("red");

red.style.top = 8 * (redRowIndex+1)
red.style.left = 8 * (redColumnIndex+1)
pink = document.getElementById("pink");
green = document.getElementById("green");
yellow = document.getElementById("yellow");

// red.style.left = redXpos;
// red.style.top = redYpos;
pink.style.left = pinkXpos;
pink.style.top = pinkYpos;
green.style.left = greenXpos;
green.style.top = greenYpos;
yellow.style.left = yellowXpos;
yellow.style.top = yellowYpos;

let eatCoins = 0;


function gameLoop() {
    
  
    if(layout[pacmanRowIndex][pacmanColumnIndex+1] == 0 || layout[pacmanRowIndex][pacmanColumnIndex+1] == 4 || layout[pacmanRowIndex][pacmanColumnIndex+1] == 3){
        rightTurnIsAllowed = true

    }else{
        rightTurnIsAllowed=false
    }
     if(layout[pacmanRowIndex][pacmanColumnIndex-1] == 0 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 4 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 3 ){
        leftTurnIsAllowed = true
    } else{
        leftTurnIsAllowed = false
    }
    if(layout[pacmanRowIndex-1][pacmanColumnIndex] == 0 || layout[pacmanRowIndex-1][pacmanColumnIndex] == 4 || layout[pacmanRowIndex-1][pacmanColumnIndex] == 3){
        upTurnIsAllowed = true
    }else{
        upTurnIsAllowed = false
    }
     if(layout[pacmanRowIndex+1][pacmanColumnIndex] == 0 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 4 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 3){
        downTurnIsAllowed = true
    }else{
        downTurnIsAllowed=false
    }

  
    if (lastPressedKey == "ArrowUp" && (upTurnIsAllowed == true)){
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

     if (PacManDirection == "Up" && upTurnIsAllowed ){
        pacman.style.top = parseInt(pacman.style.top) - 8 + "px";
        pacmanRowIndex--
        eatCoins+= 10
        eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
    }else if(PacManDirection == "Down" && downTurnIsAllowed ){
        pacman.style.top = parseInt(pacman.style.top) + 8 + "px";
        pacmanRowIndex++
        eatCoins+= 10
        eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
    }else if(PacManDirection == "Left" && leftTurnIsAllowed){
        pacman.style.left = parseInt(pacman.style.left) - 8 + "px";
        pacmanColumnIndex--
        eatCoins+= 10
        eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
    }else if(PacManDirection == "Right" && rightTurnIsAllowed){
        pacman.style.left =  parseInt(pacman.style.left) + 8 + "px";
        pacmanColumnIndex++
        eatCoins+=10
        eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
    }

    document.getElementById('liveCount').textContent = eatCoins
    
    if(pacman.style.left == undefined){
        pacmanColumnIndex++
        pacmanRowIndex++
        pacman.style.top = parseInt(pacman.style.top) + 8 + "px";
    }
//movement

      
   
    
    function reset(){
    pacman.style.top = 8 * (pacmanRowIndex+1)   ;
    pacman.style.left = 8 * (pacmanColumnIndex+1) ;
    PacManDirection = null
    lastPressedKey = null
    // redXpos = 113
    // redYpos = 96
       
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
         }
);
}


function createBoard() {
    let posy = 0;
    for (let i = 0; i < layout.length; i++) {
        let posx = 0;
        for (let j = 0; j < layout[i].length; j++) {
            var element = document.createElement("div");
            element.style.height = "8px";
            element.style.width = "8px";
            divArr[i].push(element);
            let counter = 0;
            if (counter <= j) {
                element.style.backgroundImage = "url('./images/img.png')"
                element.classList.add('container')
               
                     element.style.backgroundPositionX = `${posx}px`
                    element.style.backgroundPositionY = `${posy}px`
                
               
               
                 if(posx === -8 && posy === -24  ){
                    element.id = 'pellets'
                    element.classList.add('pellets');
                   
                    
                }
                else if(posx === -208 && posy === -24){
                    element.id = 'pellets'
                    element.classList.add('pellets');
                    
                }else if(posx === -8 && posy === -184 ){
                   
                    element.id = 'pellets'
                    element.classList.add('pellets');
                }else if(posx === -208 && posy === -184){
                    element.id = 'pellets'
                    element.classList.add('pellets');
                }
              
                
                     
                posx -= 8
                counter++
               
            }
           
            spritesheet.appendChild(element);
        }
        posy -= 8

    }
    console.log(divArr);

    //Animate pellets
    el = document.querySelectorAll('[id=pellets]');
    count = 0;
    setInterval(() => {
        for(let i = 0; i < el.length; i++){
            if(count % 2 == 0){
            el[i].style.opacity = '1'
        }else{
            el[i].style.opacity = '0'
        }
        }
        
        count++;
    }, 100)
                    
}

let redDirection;
setInterval(()=>{
       const directions = ["up", "down", "left", "right"];
    redWantedDirection = directions[Math.floor(Math.random() * 4)];
    
    }, 2000)


function moveRed(){
      let currentRedFrameIndex = 0;
    document.getElementById('up').textContent = "Up: " + redUpTurnIsAllowed
    document.getElementById('down').textContent = "Down: " + redDownTurnIsAllowed
    document.getElementById('left').textContent = "Left: " + redLeftTurnIsAllowed
    document.getElementById('right').textContent = "Right: " + redRightTurnIsAllowed

    if((layout[redRowIndex][redColumnIndex+1] == 0 || layout[redRowIndex][redColumnIndex+1] == 4 || layout[redRowIndex][redColumnIndex+1] == 3)){
        redRightTurnIsAllowed = true
    }else{
        redRightTurnIsAllowed=false
    }
     if(( layout[redRowIndex][redColumnIndex-1] == 0 || layout[redRowIndex][redColumnIndex-1] == 4 || layout[redRowIndex][redColumnIndex-1] == 3 )){
        redLeftTurnIsAllowed = true
    } else{
        redLeftTurnIsAllowed = false
    }
    if((layout[redRowIndex-1][redColumnIndex] == 0 || layout[redRowIndex-1][redColumnIndex] == 4 || layout[redRowIndex-1][redColumnIndex] == 3)){
        redUpTurnIsAllowed = true
    }else{
        redUpTurnIsAllowed = false
    }
     if((layout[redRowIndex+1][redColumnIndex] == 0 || layout[redRowIndex+1][redColumnIndex] == 4 || layout[redRowIndex+1][redColumnIndex] == 3)){
        redDownTurnIsAllowed = true  
    }else{
        redDownTurnIsAllowed=false
    }
   console.log(redWantedDirection);


   if (redWantedDirection == "up" && (redUpTurnIsAllowed == true)){
    redDirection = "up";
    //Animating pacman when moving up
    redFrame = ['160px -65px', '143px -65px']
    currentRedFrameIndex = 0;
    setInterval(() => {
        red.style.backgroundPosition = redFrame[currentRedFrameIndex];
        currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
    }, 20)
        
}else if(redWantedDirection == "down" && (redDownTurnIsAllowed == true)){
    redDirection = "down";

    //Animating pacman when moving down
    redFrame = [
                    '128px -65px',
                    '111px -65px'
                ]
        
                currentRedFrameIndex = 0;
        
                setInterval(() => {
                     red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                     currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
                }, 20)
}else if(redWantedDirection == "left" && (redLeftTurnIsAllowed == true)){
  redDirection = "left";
    //Animating pacman when moving left
    redFrame = [
                    '174px -65px',
                    '192px -65px' 
                ]
                currentRedFrameIndex = 0;
                setInterval(() => {
                     red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                     currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
                }, 20)


}else if((redWantedDirection == "right") && (redRightTurnIsAllowed == true) ){
 redDirection = "right";

    //Animating pacman when moving right
    redFrame = [
        '208px -65px',
        '223px -65px'   
                ]
                currentRedFrameIndex = 0;
        
                setInterval(() => {
                     red.style.backgroundPosition = redFrame[currentRedFrameIndex];
                     currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
                }, 20)
}


    if(redDirection == "right" && redRightTurnIsAllowed == true){
        red.style.left =  parseInt(red.style.left) + 8 + "px";
        redColumnIndex++
    }else if(redDirection == "left" && redLeftTurnIsAllowed == true){
        red.style.left =  parseInt(red.style.left) - 8 + "px";
        redColumnIndex--
    } else if(redDirection == "up" && redUpTurnIsAllowed == true){
        red.style.top = parseInt(red.style.top) - 8 + "px";
        redRowIndex--
    }else if(redDirection == "down" && redDownTurnIsAllowed == true){
        red.style.top = parseInt(red.style.top) + 8 + "px";
        redRowIndex++
    }
    console.log("Col: " + redColumnIndex);
    console.log("Row: " + redRowIndex);
}


// set the initial state and launch the game loop
function begin(){
    setInterval(gameLoop, 100);
    setInterval(moveRed, 100);
}
document.addEventListener("DOMContentLoaded", createBoard)
// launch the game
document.addEventListener("DOMContentLoaded", begin);

