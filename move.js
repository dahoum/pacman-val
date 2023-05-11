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

let idGameLoop;
let divArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[]
];

let spritesheet = document.getElementById("spritesheet");
let eatDiv;

var RequestPacManDirection;

let gameStart = false;

//This is state of enemies
let redRowIndex = 11;
let redColumnIndex = 14;
let redWantedDirection;

let pinkRowIndex = 14;
let pinkColumnIndex = 13;
let pinkWantedDirection;

let greenRowIndex = 14;
let greenColumnIndex = 15;
let greenWantedDirection;

let yellowRowIndex = 14;
let yellowColumnIndex = 11;
let yellowWantedDirection;

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

let pinkRightTurnIsAllowed = false;
let pinkLeftTurnIsAllowed = false;
let pinkUpTurnIsAllowed = false;
let pinkDownTurnIsAllowed = false;

pacman = document.getElementById('pacman');
pacman.style.top = 8 * (pacmanRowIndex+1);
pacman.style.left = 8 * (pacmanColumnIndex+1);

red = document.getElementById("red");
red.style.top = 8 * (redRowIndex+1)
red.style.left = 8 * (redColumnIndex+1)
let redDirection;

pink = document.getElementById("pink");
pink.style.top = 8 * (pinkRowIndex+1)
pink.style.left = 8 * (pinkColumnIndex+1)
let pinkDirection;

green = document.getElementById("green");
green.style.top = 8 * (greenRowIndex+1)
green.style.left = 8 * (greenColumnIndex+1)
let greenDirection;

yellow = document.getElementById("yellow");
yellow.style.top = 8 * (yellowRowIndex+1)
yellow.style.left = 8 * (yellowColumnIndex+1)
let yellowDirection;

let gameOverSign = document.getElementById("gameOver")
gameOverSign.style.top = 146
gameOverSign.style.left = 80
gameOverSign.style.visibility = "hidden";

let readySign = document.getElementById("ready")
readySign.style.top = 146
readySign.style.left = 90


let eatCoins = 0;

let upAnimation, downAnimation, leftAnimation, rightAnimation;

let redIsBlue = false;
let pinkIsBlue = false


function gameLoop() {
    
//   movement in matrix
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
      upAnimation =  setInterval(() => {
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
      downAnimation = setInterval(() => {
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
        
     leftAnimation =   setInterval(() => {
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

      rightAnimation = setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
        }, 200)
    }

     if (PacManDirection == "Up" && upTurnIsAllowed ){
        pacman.style.top = parseInt(pacman.style.top) - 8 + "px";
        pacmanRowIndex--
        
        if(layout[pacmanRowIndex][pacmanColumnIndex] === 0 || layout[pacmanRowIndex][pacmanColumnIndex] === 3){
            eatCoins+= 10
            eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
        }
        
    }else if(PacManDirection == "Down" && downTurnIsAllowed ){
        pacman.style.top = parseInt(pacman.style.top) + 8 + "px";
        pacmanRowIndex++
        
        if(layout[pacmanRowIndex][pacmanColumnIndex] === 0 || layout[pacmanRowIndex][pacmanColumnIndex] === 3){
            eatCoins+= 10
            eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
        }
        
    }else if(PacManDirection == "Left" && leftTurnIsAllowed){
        pacman.style.left = parseInt(pacman.style.left) - 8 + "px";
        pacmanColumnIndex--
        
        if(layout[pacmanRowIndex][pacmanColumnIndex] === 0 || layout[pacmanRowIndex][pacmanColumnIndex] === 3){
            eatCoins+= 10
            eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
        }
        
    }else if(PacManDirection == "Right" && rightTurnIsAllowed){
        pacman.style.left =  parseInt(pacman.style.left) + 8 + "px";
        pacmanColumnIndex++
        
        if(layout[pacmanRowIndex][pacmanColumnIndex] === 0 || layout[pacmanRowIndex][pacmanColumnIndex] === 3){
            eatCoins+=10
             eatDiv =  divArr[pacmanRowIndex][pacmanColumnIndex];
        eatDiv.style.backgroundPositionX = '223px'
        eatDiv.style.backgroundPositionY =  '-200px';
        layout[pacmanRowIndex][pacmanColumnIndex] = 4;
        }
       
    }
    // tunel logic
    if(pacmanRowIndex === 14 &&  pacmanColumnIndex === 0){
        pacmanColumnIndex = 27
        pacmanRowIndex = 14
        pacman.style.top = 8 * (pacmanRowIndex+1);
        pacman.style.left = 8 * (pacmanColumnIndex+1);
    }else if(pacmanRowIndex === 14 &&  pacmanColumnIndex === 27){
        pacmanColumnIndex = 0
        pacmanRowIndex = 14
        pacman.style.top = 8 * (pacmanRowIndex+1);
        pacman.style.left = 8 * (pacmanColumnIndex+1);
    }
    document.getElementById('liveCount').textContent = eatCoins

         
    // reset 
    function reset(){
    
    pacmanRowIndex = 23
    pacmanColumnIndex = 13;
    redRowIndex = 11
    redColumnIndex = 14
    pinkColumnIndex = 13;
    pinkRowIndex = 14;
    pacman.style.top = 8 * (pacmanRowIndex+1)   ;
    pacman.style.left = 8 * (pacmanColumnIndex+1) ;
    red.style.top = 8 * (redRowIndex+1);
    red.style.left = 8 * (redColumnIndex+1);
    pink.style.top = 8 * (pinkRowIndex+1);
    pink.style.left = 8 * (pinkColumnIndex+1);
    rightTurnIsAllowed = false;
    leftTurnIsAllowed = true;
    upTurnIsAllowed = false;
    downTurnIsAllowed = false;
    PacManDirection = "Left";
    redRightTurnIsAllowed = false;
    redLeftTurnIsAllowed = false;
    redUpTurnIsAllowed = false;
    redDownTurnIsAllowed = false;
    // isDeath = false;
    
    // redXpos = 113
    // redYpos = 96
       
    }

     if(pacmanColumnIndex === redColumnIndex && pacmanRowIndex === redRowIndex){
        isDeath = true;
        
         if(isDeath === true){
        countLives++;
        clearInterval(idGameLoop);   
        frame = [
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

        
         let currentFrameIndex = 0;
       dieAn = setInterval(() => {
             pacman.style.backgroundPosition = frame[currentFrameIndex];
             currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
             console.log(currentFrameIndex);
             if(currentFrameIndex === 5){
                pacman.style.visibility = "hidden";
             }
        },400)
        
       
         
        //  
        setTimeout(reset, 2000);
        
       setTimeout(reset, 30)
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
            gameOverSign.style.visibility = "visible";
        
        setTimeout(()=>{
            gameOverSign.style.visibility = "hidden";
        }, 2000)
        gameOver = true;
        countLives = 1
    }
    }, 1000)
    //game over
    setTimeout(() => {
        if(gameOver === true){
            eatCoins = 0;
        document.getElementById("lives1").style.visibility = "visible";
       document.getElementById("lives2").style.visibility = "visible";
       document.getElementById("lives").style.visibility = "visible";
       clearInterval(gameOverIn)
       gameOver = false;
       setTimeout(() => {
        location.reload();
       }, 2000)
  
       
       lastPressedKey = undefined;
   }
}, 30);

document.addEventListener("keydown", (e) => {
        lastPressedKey = e.code;
        gameStart = true
        readySign.style.visibility = "hidden";
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


// red wanted direction 
setInterval(()=>{
       const directions = ["up", "down", "left", "right"];
    redWantedDirection = directions[Math.floor(Math.random() * 4)];
    pinkWantedDirection = directions[Math.floor(Math.random() * 4)];
    }, 100)


function moveRed(){
      let currentRedFrameIndex = 0;
      if(gameStart == true){
        
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
   upRed = setInterval(() => {
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
        
      downRed = setInterval(() => {
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
              leftRed =  setInterval(() => {
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
        
            rightRed =   setInterval(() => {
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

        if(layout[pacmanRowIndex][pacmanColumnIndex+1] == 3 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 3 ||  layout[pacmanRowIndex-1][pacmanColumnIndex] == 3 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 3 ){
        
            redFrameP = [
            '80px -65px',
            '94px -65px'
        ]
       redIsBlue = true
       let currentRedFrameIndexP = 0;
      
       
      rrrr = setInterval(() => {
        redFrame = redFrameP
        currentRedFrameIndex = currentRedFrameIndexP
        red.style.backgroundPosition = redFrameP[currentRedFrameIndexP];
             currentRedFrameIndexP = (currentRedFrameIndexP + 1)  % redFrameP.length;
             
        }, 10)
          function clearInS(){ 
            redFrameP = redFrame
            currentRedFrameIndexP = currentRedFrameIndex
            redIsBlue = false
        clearInterval(rrrr)
    }
    
   redIsBlueTimeOut = setTimeout(clearInS, 10000)
    }
   if(redIsBlue === true){
        if(pacmanColumnIndex === redColumnIndex && pacmanRowIndex === redRowIndex || 
            pacmanColumnIndex === redColumnIndex+1 && pacmanRowIndex === redRowIndex+1||
            pacmanColumnIndex === redColumnIndex-1 && pacmanRowIndex === redRowIndex-1){
        redRowIndex = 11
        redColumnIndex = 14
        red.style.top = 8 * (redRowIndex+1);
        red.style.left = 8 * (redColumnIndex+1);
        clearInterval(rrrr)
        redIsBlue = false
        eatCoins += 200
       }
    }
      }
   
}


let cntP = 0;
function movePink(){
   upAndDown= setTimeout(() => {
if(layout[pinkRowIndex-1][pinkColumnIndex] ==  2 && layout[pinkRowIndex+1][pinkColumnIndex] == 2 ){
        
        if(cntP % 2 == 1){
            pinkUpTurnIsAllowed = true
            pinkDownTurnIsAllowed = false
            cntP++
        }else if(cntP % 2 == 0){
            pinkUpTurnIsAllowed = false
            pinkDownTurnIsAllowed = true
            cntP++
        }
        
    } 
    else if(layout[pinkRowIndex-1][pinkColumnIndex] ==  1 || layout[pinkRowIndex-1][pinkColumnIndex] ==  6){
        pinkUpTurnIsAllowed = false
        pinkDownTurnIsAllowed = true
    } else if(layout[pinkRowIndex+1][pinkColumnIndex] ==  1 || layout[pinkRowIndex+1][pinkColumnIndex] ==  6){
        pinkUpTurnIsAllowed = true
        pinkDownTurnIsAllowed = false
    }


    if ( pinkUpTurnIsAllowed ){
        pink.style.top = parseInt(pink.style.top) - 8 + "px";
        pinkRowIndex--   
        pinkFrame = ['143px -80px', '159px -80px']
          currentPinkFrameIndex = 0;
            setInterval(() => {
              pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
              currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
          }, 20)
    }
    if( pinkDownTurnIsAllowed ){
        pink.style.top = parseInt(pink.style.top) + 8 + "px";
        pinkRowIndex++

        pinkFrame = ['127px -80px', '111px -80px' ]
        currentPinkFrameIndex = 0;
                  
         setInterval(() => {
             pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
            currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
        }, 20)
    }

    }, 10)
    

  cl =  setTimeout(() => {
        clearTimeout(upAndDown)
        if(layout[pinkRowIndex-1][pinkColumnIndex] ==  6){
            pinkUpTurnIsAllowed = true
            if ( pinkUpTurnIsAllowed ){
                pink.style.top = parseInt(pink.style.top) - 8 + "px";
                pinkRowIndex--   
                pinkFrame = ['143px -80px', '159px -80px']
                  currentPinkFrameIndex = 0;
                    setInterval(() => {
                      pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
                      currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
                  }, 20)
            }
        }


       






    
    }, 5000)
    // clearTimeout(cl)
//  setInterval(movePinkRandom, 100)
//     function movePinkRandom(){
//           let currentPinkFrameIndex = 0;
    
      
//   if(layout[pinkRowIndex][pinkColumnIndex+1] == 0 || layout[pinkRowIndex][pinkColumnIndex+1] == 4 ){
//       pinkRightTurnIsAllowed = true
//   }else{
//       pinkRightTurnIsAllowed=false
//   }
//    if(( layout[pinkRowIndex][pinkColumnIndex-1] == 0 || layout[pinkRowIndex][pinkColumnIndex-1] == 4  )){
//       pinkLeftTurnIsAllowed = true
//   } else{
//       pinkLeftTurnIsAllowed = false
//   }
//   if((layout[pinkRowIndex-1][pinkColumnIndex] == 0 || layout[pinkRowIndex-1][pinkColumnIndex] == 4)){
//       pinkUpTurnIsAllowed = true
//   }else{
//       pinkUpTurnIsAllowed = false
//   }
//    if((layout[pinkRowIndex+1][pinkColumnIndex] == 0 || layout[pinkRowIndex+1][pinkColumnIndex] == 4 )){
//       pinkDownTurnIsAllowed = true  
//   }else{
//       pinkDownTurnIsAllowed=false
//   }

//  if (pinkWantedDirection == "up" && (pinkUpTurnIsAllowed == true)){
//   pinkDirection = "up";
//   //Animating pacman when moving up
//   pinkFrame = ['143px -80px', '159px -80px']
//   currentPinkFrameIndex = 0;
//     setInterval(() => {
//       pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
//       currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
//   }, 20)
      
// }else if(pinkWantedDirection == "down" && (pinkDownTurnIsAllowed == true)){
//   pinkDirection = "down";

//   //Animating pacman when moving down
//   pinkFrame = [
//                   '127px -80px',
//                   '111px -80px'
//               ]
//     //           127px -80px; */
//     // background-position: 111px -80px;
      
//               currentPinkFrameIndex = 0;
      
//         setInterval(() => {
//          pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
//           currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
//       }, 20)
// }else if(pinkWantedDirection == "left" && (pinkLeftTurnIsAllowed == true)){
// pinkDirection = "left";
//   //Animating pacman when moving left
//   pinkFrame = [
//                   '191px -80px',
//                   '175px -80px' 
//               ]
//               currentPinkFrameIndex = 0;
//                 setInterval(() => {
//                    pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
//                    currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
//               }, 20)


// }else if((pinkWantedDirection == "right") && (pinkRightTurnIsAllowed == true) ){
//     pinkDirection = "right";

//   //Animating pacman when moving right
//   pinkFrame = [
//       '223px -80px',
//       '207px -80px' 
//               ]
//               currentPinkFrameIndex = 0;
//               setInterval(() => {
//                  pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
//                  currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
//             }, 20)
// }


//   if(pinkDirection == "right" && pinkRightTurnIsAllowed == true){
//       pink.style.left =  parseInt(pink.style.left) + 8 + "px";
//       pinkColumnIndex++
//   }else if(pinkDirection == "left" && pinkLeftTurnIsAllowed == true){
//       pink.style.left =  parseInt(pink.style.left) - 8 + "px";
//       pinkColumnIndex--
//   } else if(pinkDirection == "up" && pinkUpTurnIsAllowed == true){
//       pink.style.top = parseInt(pink.style.top) - 8 + "px";
//       pinkRowIndex--
//   }else if(pinkDirection == "down" && pinkDownTurnIsAllowed == true){
//       pink.style.top = parseInt(pink.style.top) + 8 + "px";
//       pinkRowIndex++
//   }

//       if(layout[pacmanRowIndex][pacmanColumnIndex+1] == 3 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 3 ||  layout[pacmanRowIndex-1][pacmanColumnIndex] == 3 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 3 ){
      
//           pinkFrameP = [
//           '80px -65px',
//           '94px -65px'
//       ]
//      let currentPinkFrameIndexP = 0;
//     pinkIsBlue = true;
     
//     rrrrp = setInterval(() => {
//       pinkFrame = pinkFrameP
//       currentPinkFrameIndex = currentPinkFrameIndexP
//       pink.style.backgroundPosition = pinkFrameP[currentPinkFrameIndexP];
//            currentPinkFrameIndexP = (currentPinkFrameIndexP + 1)  % pinkFrameP.length;
//       }, 10)
//         function clearInP(){ 
//           pinkFrameP = pinkFrame
//           currentPinkFrameIndexP = currentPinkFrameIndex
//           pinkIsBlue = false
//       clearInterval(rrrrp)
//   }
  
//  pinkIsBlueTimeOut = setTimeout(clearInP, 10000)
//   }
//  if(pinkIsBlue === true){
//       if(pacmanColumnIndex === pinkColumnIndex && pacmanRowIndex === pinkRowIndex || 
//           pacmanColumnIndex === pinkColumnIndex+1 && pacmanRowIndex === pinkRowIndex+1||
//           pacmanColumnIndex === pinkColumnIndex-1 && pacmanRowIndex === pinkRowIndex-1){
//       pinkRowIndex = 14
//       pinkColumnIndex = 13
//       pink.style.top = 8 * (pinkRowIndex+1);
//       pink.style.left = 8 * (pinkColumnIndex+1);
//       clearInterval(rrrrp)
//       pinkIsBlue = false
//       eatCoins += 200
//      }
//   }
    
// //   
//     }
 
}
let greenUpTurnIsAllowed
let greenDownTurnIsAllowed
let cntG = 0;
function moveGreen(){

    if(layout[greenRowIndex-1][greenColumnIndex] ==  2 && layout[greenRowIndex+1][greenColumnIndex] == 2 ){
        
        if(cntG % 2 == 0){
            greenUpTurnIsAllowed = true
            greenDownTurnIsAllowed = false
            cntG++
        }else if(cntG % 2 == 1){
            greenUpTurnIsAllowed = false
            greenDownTurnIsAllowed = true
            cntG++
        }
        
    } 
    else if(layout[greenRowIndex-1][greenColumnIndex] ==  1){
        greenUpTurnIsAllowed = false
        greenDownTurnIsAllowed = true
    } else if(layout[greenRowIndex+1][greenColumnIndex] ==  1){
        greenUpTurnIsAllowed = true
        greenDownTurnIsAllowed = false
    }


    if ( greenUpTurnIsAllowed ){
        green.style.top = parseInt(green.style.top) - 8 + "px";
        greenRowIndex--   
        greenFrame = ['160px -97px', '144px -97px']
        
        currentGreenFrameIndex = 0;
          setInterval(() => {
            green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
            currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
        }, 20)
    }
    if( greenDownTurnIsAllowed ){
        green.style.top = parseInt(green.style.top) + 8 + "px";
        greenRowIndex++

        greenFrame = ['128px -97px', '112px -97px']
        currentGreenFrameIndex = 0;
          setInterval(() => {
            green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
            currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
        }, 20)
    }
}


let yellowUpTurnIsAllowed
let yellowDownTurnIsAllowed
let cntY = 0;
function moveYellow(){

    if(layout[yellowRowIndex-1][yellowColumnIndex] ==  2 && layout[yellowRowIndex+1][yellowColumnIndex] == 2 ){
        
        if(cntY % 2 == 0){
            yellowUpTurnIsAllowed = true
            yellowDownTurnIsAllowed = false
            cntY++
        }else if(cntY % 2 == 1){
            yellowUpTurnIsAllowed = false
            yellowDownTurnIsAllowed = true
            cntY++
        }
        
    } 
    else if(layout[yellowRowIndex-1][yellowColumnIndex] ==  1){
        yellowUpTurnIsAllowed = false
        yellowDownTurnIsAllowed = true
    } else if(layout[yellowRowIndex+1][yellowColumnIndex] ==  1){
        yellowUpTurnIsAllowed = true
        yellowDownTurnIsAllowed = false
    }


    if ( yellowUpTurnIsAllowed ){
        yellow.style.top = parseInt(yellow.style.top) - 8 + "px";
        yellowRowIndex--   
        yellowFrame = ['160px -113px', '144px -113px']
        
        currentYellowFrameIndex = 0;
          setInterval(() => {
            yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
            currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
        }, 20)
    }
    if( yellowDownTurnIsAllowed ){
        yellow.style.top = parseInt(yellow.style.top) + 8 + "px";
        yellowRowIndex++

        yellowFrame = ['128px -113px', '112px -113px']
        currentYellowFrameIndex = 0;
          setInterval(() => {
            yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
            currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
        }, 20)
    }
}

// set the initial state and launch the game loop
function begin(){
    idGameLoop = setInterval(gameLoop, 100);
    setInterval(moveRed, 100);
    setInterval(movePink, 400);
    setInterval(moveGreen, 400);
    setInterval(moveYellow, 400);
}
document.addEventListener("DOMContentLoaded", createBoard)
// launch the game
document.addEventListener("DOMContentLoaded", begin);

