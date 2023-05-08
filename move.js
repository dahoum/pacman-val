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
let redRowIndex = 11
let redColumnIndex = 14
let redWantedDirection

let pinkRowIndex = 14;
let pinkColumnIndex = 13;

let greenRowIndex = 14;
let greenColumnIndex = 15;

let yellowRowIndex = 14;
let yellowColumnIndex = 11;

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

pacman = document.getElementById('pacman');

pacman.style.top = 8 * (pacmanRowIndex+1);
pacman.style.left = 8 * (pacmanColumnIndex+1);

red = document.getElementById("red");

red.style.top = 8 * (redRowIndex+1)
red.style.left = 8 * (redColumnIndex+1)

pink = document.getElementById("pink");
pink.style.top = 8 * (pinkRowIndex+1)
pink.style.left = 8 * (pinkColumnIndex+1)

green = document.getElementById("green");
green.style.top = 8 * (greenRowIndex+1)
green.style.left = 8 * (greenColumnIndex+1)

yellow = document.getElementById("yellow");
yellow.style.top = 8 * (yellowRowIndex+1)
yellow.style.left = 8 * (yellowColumnIndex+1)

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
    pacman.style.top = 8 * (pacmanRowIndex+1)   ;
    pacman.style.left = 8 * (pacmanColumnIndex+1) ;
    red.style.top = 8 * (redRowIndex+1);
    red.style.left = 8 * (redColumnIndex+1);
    rightTurnIsAllowed = false;
    leftTurnIsAllowed = true;
    upTurnIsAllowed = false;
    downTurnIsAllowed = false;
    PacManDirection = "Left";
    redRightTurnIsAllowed = false;
    redLeftTurnIsAllowed = false;
    redUpTurnIsAllowed = false;
    redDownTurnIsAllowed = false;
    redDirection = undefined;
    redWantedDirection = undefined;
    idGameLoop = setInterval(gameLoop, 100);
    clearInterval(dieAn)
    red.style.visibility = "visible";
    pacman.style.visibility = "visible";   
    }
let dieAn
if(redIsBlue === false){
    if(pacmanColumnIndex === redColumnIndex && pacmanRowIndex === redRowIndex || 
        pacmanColumnIndex === redColumnIndex+1 && pacmanRowIndex === redRowIndex+1||
        pacmanColumnIndex === redColumnIndex-1 && pacmanRowIndex === redRowIndex-1){
        red.style.visibility = "hidden";
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
        
    }
}
     let gameOverIn;
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

let redDirection;
// red wanted direction 
setInterval(()=>{
       const directions = ["up", "down", "left", "right"];
    redWantedDirection = directions[Math.floor(Math.random() * 4)];
    
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
    console.log(redIsBlue);
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

// set the initial state and launch the game loop
function begin(){
    idGameLoop = setInterval(gameLoop, 100);
    setInterval(moveRed, 100);
}
document.addEventListener("DOMContentLoaded", createBoard)
// launch the game
document.addEventListener("DOMContentLoaded", begin);

