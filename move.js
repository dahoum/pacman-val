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

let greenRightTurnIsAllowed = false;
let greenLeftTurnIsAllowed = false;
let greenUpTurnIsAllowed = false;
let greenDownTurnIsAllowed = false;

let yellowRightTurnIsAllowed = false;
let yellowLeftTurnIsAllowed = false;
let yellowUpTurnIsAllowed = false;
let yellowDownTurnIsAllowed = false;

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
let movePinkId;

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
let yellowIsBlue = false;
let greenIsBlue = false;

let redFrame;
let currentRedFrameIndex = 0;
let currentPinkFrameIndex = 0;
let currentYellowFrameIndex;
let currentGreenFrameIndex;
let animationOfRedGhostBlue;
let greenFrame;
let movePinkUpandDown;


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
      

        if(layout[pacmanRowIndex][pacmanColumnIndex+1] == 3 || layout[pacmanRowIndex][pacmanColumnIndex-1] == 3 ||  layout[pacmanRowIndex-1][pacmanColumnIndex] == 3 || layout[pacmanRowIndex+1][pacmanColumnIndex] == 3 ){
        //animation red in blue
        redIsBlue = true;
        blueAnimate = setInterval(() => {
            if(redIsBlue === true){
                redFrame = [
                    '80px -65px',
                    '94px -65px'
                ]
            }
        }, 30)
        setInterval(() => {
             setTimeout(()=>{
            if(redIsBlue === true){
        redFrame = [
                '80px -65px',
                '94px -65px',
                '47px -65px',
                '63px -65px'
                ]
             }
            
        }, 9000)
        }, 30)
        let currentRedFrameIndex = 0;
        animationOfRedGhostBlue = setInterval(() => {
        red.style.backgroundPosition = redFrame[currentRedFrameIndex];
        currentRedFrameIndex = (currentRedFrameIndex + 1)  % redFrame.length;
        }, 10)

        // animation pink in blue
        pinkIsBlue = true;

        blueAnimateP = setInterval(() => {
            if(pinkIsBlue === true){
                pinkFrame = [
                    '80px -65px',
                    '94px -65px'
                ]
            }
        }, 30)

        setInterval(() => {
            setTimeout(()=>{
           if(pinkIsBlue === true){
                redFrame = [
               '80px -65px',
               '94px -65px',
               '47px -65px',
               '63px -65px'
                ]
            }
           
       }, 9000)
       }, 30)

       currentPinkFrameIndex = 0;
          
         setInterval(() => {
             pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
              currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
          }, 20)

        //   animation yellow in blue
        yellowIsBlue = true;


        blueAnimateY = setInterval(() => {
            if(yellowIsBlue === true){
                yellowFrame = [
                    '80px -65px',
                    '94px -65px'
                ]
            }
        }, 30)

        setInterval(() => {
            setTimeout(()=>{
           if(yellowIsBlue === true){
                yellowFrame = [
               '80px -65px',
               '94px -65px',
               '47px -65px',
               '63px -65px'
                ]
            }
           
       }, 9000)
       }, 30)

       currentYellowFrameIndex = 0;
       setInterval(() => {
        yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
        currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
   }, 20)
       

   //   animation green in blue
   greenIsBlue = true;

   blueAnimateG = setInterval(() => {
    if(greenIsBlue === true){
        greenFrame = [
            '80px -65px',
            '94px -65px'
        ]
    }
    }, 30)

    setInterval(() => {
        setTimeout(()=>{
       if(greenIsBlue === true){
            greenFrame = [
           '80px -65px',
           '94px -65px',
           '47px -65px',
           '63px -65px'
            ]
        }
   }, 9000)
   }, 30)

   setInterval(() => {
    green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
     currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
 }, 20)
   

    function clearInS(){ 
        redIsBlue = false
        pinkIsBlue = false
        yellowIsBlue = false
        greenIsBlue = false        
    }
     setTimeout(clearInS, 10000)
}


if((pacmanColumnIndex === redColumnIndex && pacmanRowIndex === redRowIndex || 
        pacmanColumnIndex === redColumnIndex+1 && pacmanRowIndex === redRowIndex+1||
        pacmanColumnIndex === redColumnIndex-1 && pacmanRowIndex === redRowIndex-1 )
        && redIsBlue == true){
            // if(!(redColumnIndex === 14 && redRowIndex == 11)){
            //     setInterval(() => {
            //         if(redColumnIndex < 14 ){
            //             redWantedDirection == "up"

            //         }else if(redColumnIndex > 14){
            //             redWantedDirection == "down"
            //         }
            //     }, 20)
            // }
        redRowIndex = 11
        redColumnIndex = 14
        red.style.top = 8 * (redRowIndex+1);
        red.style.left = 8 * (redColumnIndex+1);
        eatCoins += 200
        redIsBlue = false
        clearInterval(blueAnimate)
   }

if((pacmanColumnIndex === pinkColumnIndex && pacmanRowIndex === pinkRowIndex || 
    pacmanColumnIndex === pinkColumnIndex+1 && pacmanRowIndex === pinkRowIndex+1||
    pacmanColumnIndex === pinkColumnIndex-1 && pacmanRowIndex === pinkRowIndex-1) &&
    pinkIsBlue == true){
        pinkRowIndex = 11
        pinkColumnIndex = 14
        pink.style.top = 8 * (pinkRowIndex+1);
        pink.style.left = 8 * (pinkColumnIndex+1);
        pinkIsBlue = false
        eatCoins += 200
        clearInterval(blueAnimateP)
       }

if((pacmanColumnIndex === yellowColumnIndex && pacmanRowIndex === yellowRowIndex || 
    pacmanColumnIndex === yellowColumnIndex+1 && pacmanRowIndex === yellowRowIndex+1||
    pacmanColumnIndex === yellowColumnIndex-1 && pacmanRowIndex === yellowRowIndex-1) &&
    yellowIsBlue == true){
        yellowRowIndex = 11
        yellowColumnIndex = 14
        yellow.style.top = 8 * (yellowRowIndex+1);
        yellow.style.left = 8 * (yellowColumnIndex+1);
        yellowIsBlue = false
        eatCoins += 200
        clearInterval(blueAnimateY)
       }
    

if((pacmanColumnIndex === greenColumnIndex && pacmanRowIndex === greenRowIndex || 
    pacmanColumnIndex === greenColumnIndex+1 && pacmanRowIndex === greenRowIndex+1||
    pacmanColumnIndex === greenColumnIndex-1 && pacmanRowIndex === greenRowIndex-1)
    && greenIsBlue === true){
    greenRowIndex = 11
    greenColumnIndex = 14
    green.style.top = 8 * (greenRowIndex+1);
    green.style.left = 8 * (greenColumnIndex+1);
    clearInterval(blueAnimateG)
    greenIsBlue = false
    eatCoins += 200
}

    // reset 
    function reset(){
        clearInterval(movePinkId)
        clearInterval(movePinkUpandDown)
        clearInterval(moveYellowId)
        clearInterval(moveYellowUpandDown)
        clearInterval(moveGreenId)
        clearInterval(moveGreenUpandDown)
        pacmanRowIndex = 23
        pacmanColumnIndex = 13;
        redRowIndex = 11
        redColumnIndex = 14
        pinkColumnIndex = 13;
        pinkRowIndex = 14;
        yellowRowIndex = 14;
        yellowColumnIndex = 11;
        greenRowIndex = 14;
        greenColumnIndex = 15;
        pacman.style.top = 8 * (pacmanRowIndex+1)   ;
        pacman.style.left = 8 * (pacmanColumnIndex+1) ;
        red.style.top = 8 * (redRowIndex+1);
        red.style.left = 8 * (redColumnIndex+1);
        pink.style.top = 8 * (pinkRowIndex+1);
        pink.style.left = 8 * (pinkColumnIndex+1);
        yellow.style.top = 8 * (yellowRowIndex+1)
        yellow.style.left = 8 * (yellowColumnIndex+1)
        green.style.top = 8 * (greenRowIndex+1)
        green.style.left = 8 * (greenColumnIndex+1)
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
        pink.style.visibility = "visible";
        green.style.visibility = "visible";
        yellow.style.visibility = "visible";
        pacman.style.visibility = "visible";
        pinkFunction()
        yellowFunction()
        greenFunction()

        redIsBlue = false;
        pinkIsBlue = false;
        yellowIsBlue = false;
        greenIsBlue = false;
       
    }



    let dieAn
    if(redIsBlue === false || pinkIsBlue === false  || yellowIsBlue === false || greenIsBlue === false ){
        if(pacmanColumnIndex === redColumnIndex && pacmanRowIndex === redRowIndex || 
            pacmanColumnIndex === redColumnIndex+1 && pacmanRowIndex === redRowIndex+1||
            pacmanColumnIndex === redColumnIndex-1 && pacmanRowIndex === redRowIndex-1 ||
            pacmanColumnIndex === pinkColumnIndex && pacmanRowIndex === pinkRowIndex || 
            pacmanColumnIndex === pinkColumnIndex+1 && pacmanRowIndex === pinkRowIndex+1||
            pacmanColumnIndex === pinkColumnIndex-1 && pacmanRowIndex === pinkRowIndex-1 ||
            pacmanColumnIndex === yellowColumnIndex && pacmanRowIndex === yellowRowIndex || 
            pacmanColumnIndex === yellowColumnIndex+1 && pacmanRowIndex === yellowRowIndex+1||
            pacmanColumnIndex === yellowColumnIndex-1 && pacmanRowIndex === yellowRowIndex-1 ||

            pacmanColumnIndex === greenColumnIndex && pacmanRowIndex === greenRowIndex || 
            pacmanColumnIndex === greenColumnIndex+1 && pacmanRowIndex === greenRowIndex+1||
            pacmanColumnIndex === greenColumnIndex-1 && pacmanRowIndex === greenRowIndex-1 
            ){
            red.style.visibility = "hidden";
            pink.style.visibility = "hidden";
            green.style.visibility = "hidden";
            yellow.style.visibility = "hidden";
            green.style.visibility = "hidden";
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



startTimeOut = setTimeout(()=> {
document.addEventListener("keydown", (e) => {
        lastPressedKey = e.code;
         }
);
}, 2000)
}
function startOfTheGame(){
    startTimeOut = setTimeout(()=> {
     gameStart = true
     PacManDirection = "Left"
     leftTurnIsAllowed = true
     lastPressedKey = "ArrowLeft"
     readySign.style.visibility = "hidden";
}, 2000)
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

// ghosts wanted direction 
setInterval(()=>{
       const directions = ["up", "down", "left", "right"];
    redWantedDirection = directions[Math.floor(Math.random() * 4)];
    pinkWantedDirection = directions[Math.floor(Math.random() * 4)];
    yellowWantedDirection = directions[Math.floor(Math.random() * 4)];
    greenWantedDirection = directions[Math.floor(Math.random() * 4)];
    }, 100)


function moveRed(){
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

      }
   
}


let cntP = 0;
function movePink(){
    if(gameStart == true){

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
}
}
function movePinkRandom(){
        
        let currentPinkFrameIndex = 0;
        if(gameStart == true){
          
      if((layout[pinkRowIndex][pinkColumnIndex+1] == 0 || layout[pinkRowIndex][pinkColumnIndex+1] == 4 )){
          pinkRightTurnIsAllowed = true
      }else{
          pinkRightTurnIsAllowed=false
      }
       if(( layout[pinkRowIndex][pinkColumnIndex-1] == 0 || layout[pinkRowIndex][pinkColumnIndex-1] == 4 )){
          pinkLeftTurnIsAllowed = true
      } else{
          pinkLeftTurnIsAllowed = false
      }
      if((layout[pinkRowIndex-1][pinkColumnIndex] == 0 || layout[pinkRowIndex-1][pinkColumnIndex] == 4 )){
          pinkUpTurnIsAllowed = true
      }else{
          pinkUpTurnIsAllowed = false
      }
       if((layout[pinkRowIndex+1][pinkColumnIndex] == 0 || layout[pinkRowIndex+1][pinkColumnIndex] == 4 )){
          pinkDownTurnIsAllowed = true  
      }else{
          pinkDownTurnIsAllowed=false
      }
  
    if (pinkWantedDirection == "up" && (pinkUpTurnIsAllowed == true)){
      pinkDirection = "up";
      //Animating pacman when moving up
      pinkFrame = ['143px -80px', '159px -80px']
      currentPinkFrameIndex = 0;
     setInterval(() => {
          pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
          currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
      }, 20)
          
  }else if(pinkWantedDirection == "down" && (pinkDownTurnIsAllowed == true)){
      pinkDirection = "down";
  
      //Animating pacman when moving down
      pinkFrame = [  '127px -80px', '111px -80px']
          
                  currentPinkFrameIndex = 0;
          
         setInterval(() => {
             pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
              currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
          }, 20)
  }else if(pinkWantedDirection == "left" && (pinkLeftTurnIsAllowed == true)){
    pinkDirection = "left";
      //Animating pacman when moving left
      pinkFrame = [ '191px -80px',  '175px -80px'  ]
                  currentPinkFrameIndex = 0;
                 setInterval(() => {
                       pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
                       currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
                  }, 20)
  
  
  }else if((pinkWantedDirection == "right") && (pinkRightTurnIsAllowed == true) ){
   pinkDirection = "right";
  
      //Animating pacman when moving right
      pinkFrame = [  '223px -80px',  '207px -80px' ]
                  currentPinkFrameIndex = 0;
          
               setInterval(() => {
                       pink.style.backgroundPosition = pinkFrame[currentPinkFrameIndex];
                       currentPinkFrameIndex = (currentPinkFrameIndex + 1)  % pinkFrame.length;
                  }, 20)
  }
  
  
      if(pinkDirection == "right" && pinkRightTurnIsAllowed == true){
          pink.style.left =  parseInt(pink.style.left) + 8 + "px";
          pinkColumnIndex++
      }else if(pinkDirection == "left" && pinkLeftTurnIsAllowed == true){
          pink.style.left =  parseInt(pink.style.left) - 8 + "px";
          pinkColumnIndex--
      } else if(pinkDirection == "up" && pinkUpTurnIsAllowed == true){
          pink.style.top = parseInt(pink.style.top) - 8 + "px";
          pinkRowIndex--
      }else if(pinkDirection == "down" && pinkDownTurnIsAllowed == true){
          pink.style.top = parseInt(pink.style.top) + 8 + "px";
          pinkRowIndex++
      }
  
        }
     
  }
function pinkFunction(){
     movePinkUpandDown = setInterval(movePink, 400);
   
    setTimeout(() => {
        clearInterval(movePinkUpandDown)
        
        // if(layout[pinkRowIndex+1][pinkColumnIndex] == 6){
            pinkColumnIndex = 14
            pinkRowIndex = 11
            pink.style.top = 8 * (pinkRowIndex+1)
            pink.style.left = 8 * (pinkColumnIndex+1)  
            movePinkId = setInterval(movePinkRandom, 100);
        // }
     
        
    } , 5000)

} 
let cntG = 0;
function moveGreen(){
    if(gameStart == true){
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
}
function moveGreenRandom(){
    let currentGreenFrameIndex = 0;
    if(gameStart == true){
      
  if((layout[greenRowIndex][greenColumnIndex+1] == 0 || layout[greenRowIndex][greenColumnIndex+1] == 4 || layout[greenRowIndex][greenColumnIndex+1] == 3)){
      greenRightTurnIsAllowed = true
  }else{
      greenRightTurnIsAllowed=false
  }
   if(( layout[greenRowIndex][greenColumnIndex-1] == 0 || layout[greenRowIndex][greenColumnIndex-1] == 4 || layout[greenRowIndex][greenColumnIndex-1] == 3 )){
      greenLeftTurnIsAllowed = true
  } else{
      greenLeftTurnIsAllowed = false
  }
  if((layout[greenRowIndex-1][greenColumnIndex] == 0 || layout[greenRowIndex-1][greenColumnIndex] == 4 || layout[greenRowIndex-1][greenColumnIndex] == 3)){
      greenUpTurnIsAllowed = true
  }else{
      greenUpTurnIsAllowed = false
  }
   if((layout[greenRowIndex+1][greenColumnIndex] == 0 || layout[greenRowIndex+1][greenColumnIndex] == 4 || layout[greenRowIndex+1][greenColumnIndex] == 3)){
      greenDownTurnIsAllowed = true  
  }else{
      greenDownTurnIsAllowed=false
  }
  
 if (greenWantedDirection == "up" && (greenUpTurnIsAllowed == true)){
  greenDirection = "up";
  //Animating pacman when moving up
  greenFrame = ['160px -97px', '144px -97px']
  currentGreenFrameIndex = 0;
    setInterval(() => {
      green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
      currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
  }, 20)
      
}else if(greenWantedDirection == "down" && (greenDownTurnIsAllowed == true)){
  greenDirection = "down";

  //Animating pacman when moving down
  greenFrame = ['128px -97px', '112px -97px']
      
              currentGreenFrameIndex = 0;
      
    setInterval(() => {
         green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
          currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
      }, 20)
}else if(greenWantedDirection == "left" && (greenLeftTurnIsAllowed == true)){
greenDirection = "left";
  //Animating pacman when moving left
  greenFrame = ['192px -97px', '176px -97px' ]
              currentGreenFrameIndex = 0;
                setInterval(() => {
                   green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
                   currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
              }, 20)


}else if((greenWantedDirection == "right") && (greenRightTurnIsAllowed == true) ){
greenDirection = "right";

  //Animating pacman when moving right
  greenFrame = ['223px -97px','208px -97px' ]
              currentGreenFrameIndex = 0;
      
            setInterval(() => {
                green.style.backgroundPosition = greenFrame[currentGreenFrameIndex];
                currentGreenFrameIndex = (currentGreenFrameIndex + 1)  % greenFrame.length;
              }, 20)
}


  if(greenDirection == "right" && greenRightTurnIsAllowed == true){
      green.style.left =  parseInt(green.style.left) + 8 + "px";
      greenColumnIndex++
  }else if(greenDirection == "left" && greenLeftTurnIsAllowed == true){
      green.style.left =  parseInt(green.style.left) - 8 + "px";
      greenColumnIndex--
  } else if(greenDirection == "up" && greenUpTurnIsAllowed == true){
      green.style.top = parseInt(green.style.top) - 8 + "px";
      greenRowIndex--
  }else if(greenDirection == "down" && greenDownTurnIsAllowed == true){
      green.style.top = parseInt(green.style.top) + 8 + "px";
      greenRowIndex++
  }
    }
}
let moveGreenUpandDown;
let moveGreenId;
function greenFunction(){
    moveGreenUpandDown = setInterval(moveGreen, 400);

   setTimeout(() => {
       clearInterval(moveGreenUpandDown)
           greenColumnIndex = 14
           greenRowIndex = 11
           green.style.top = 8 * (greenRowIndex+1)
           green.style.left = 8 * (greenColumnIndex+1)  
           moveGreenId = setInterval(moveGreenRandom, 100);
       
   } , 10000)
} 


let cntY = 0;
function moveYellow(){
    if(gameStart == true){
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
}
function moveYellowRandom(){
    let currentYellowFrameIndex = 0;
    if(gameStart == true){
      
  if((layout[yellowRowIndex][yellowColumnIndex+1] == 0 || layout[yellowRowIndex][yellowColumnIndex+1] == 4 || layout[yellowRowIndex][yellowColumnIndex+1] == 3)){
      yellowRightTurnIsAllowed = true
  }else{
      yellowRightTurnIsAllowed=false
  }
   if(( layout[yellowRowIndex][yellowColumnIndex-1] == 0 || layout[yellowRowIndex][yellowColumnIndex-1] == 4 || layout[yellowRowIndex][yellowColumnIndex-1] == 3 )){
      yellowLeftTurnIsAllowed = true
  } else{
      yellowLeftTurnIsAllowed = false
  }
  if((layout[yellowRowIndex-1][yellowColumnIndex] == 0 || layout[yellowRowIndex-1][yellowColumnIndex] == 4 || layout[yellowRowIndex-1][yellowColumnIndex] == 3)){
      yellowUpTurnIsAllowed = true
  }else{
      yellowUpTurnIsAllowed = false
  }
   if((layout[yellowRowIndex+1][yellowColumnIndex] == 0 || layout[yellowRowIndex+1][yellowColumnIndex] == 4 || layout[yellowRowIndex+1][yellowColumnIndex] == 3)){
      yellowDownTurnIsAllowed = true  
  }else{
      yellowDownTurnIsAllowed=false
  }

  
 if (yellowWantedDirection == "up" && (yellowUpTurnIsAllowed == true)){
  yellowDirection = "up";
  //Animating pacman when moving up
  yellowFrame = ['160px -113px', '144px -113px']
  currentYellowFrameIndex = 0;
    setInterval(() => {
      yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
      currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
  }, 20)
      
}else if(yellowWantedDirection == "down" && (yellowDownTurnIsAllowed == true)){
  yellowDirection = "down";

  //Animating pacman when moving down
  yellowFrame = ['128px -113px', '112px -113px']
      
              currentYellowFrameIndex = 0;
      
    setInterval(() => {
         yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
          currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
      }, 20)
}else if(yellowWantedDirection == "left" && (yellowLeftTurnIsAllowed == true)){
yellowDirection = "left";
  //Animating pacman when moving left
  yellowFrame = ['292px -113px', '176px -113px' ]
              currentYellowFrameIndex = 0;
                setInterval(() => {
                   yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
                   currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
              }, 20)


}else if((yellowWantedDirection == "right") && (yellowRightTurnIsAllowed == true) ){
yellowDirection = "right";

  //Animating pacman when moving right
  yellowFrame = ['223px -113px','208px -113px' ]
              currentYellowFrameIndex = 0;
      
            setInterval(() => {
                yellow.style.backgroundPosition = yellowFrame[currentYellowFrameIndex];
                currentYellowFrameIndex = (currentYellowFrameIndex + 1)  % yellowFrame.length;
              }, 20)
}


  if(yellowDirection == "right" && yellowRightTurnIsAllowed == true){
      yellow.style.left =  parseInt(yellow.style.left) + 8 + "px";
      yellowColumnIndex++
  }else if(yellowDirection == "left" && yellowLeftTurnIsAllowed == true){
      yellow.style.left =  parseInt(yellow.style.left) - 8 + "px";
      yellowColumnIndex--
  } else if(yellowDirection == "up" && yellowUpTurnIsAllowed == true){
      yellow.style.top = parseInt(yellow.style.top) - 8 + "px";
      yellowRowIndex--
  }else if(yellowDirection == "down" && yellowDownTurnIsAllowed == true){
      yellow.style.top = parseInt(yellow.style.top) + 8 + "px";
      yellowRowIndex++
  }

    }
}
let moveYellowUpandDown;
let moveYellowId;



function yellowFunction(){
    moveYellowUpandDown = setInterval(moveYellow, 400);
      setTimeout(() => {
        clearInterval(moveYellowUpandDown)
            yellowColumnIndex = 14
            yellowRowIndex = 11
            yellow.style.top = 8 * (yellowRowIndex+1)
            yellow.style.left = 8 * (yellowColumnIndex+1)  
            moveYellowId = setInterval(moveYellowRandom, 100);     
    } , 8000)
}


// get score from sprite sheet
  setInterval(() => {
    d =String(eatCoins)[0]
    r =String(eatCoins)[1]
    k =String(eatCoins)[2]
    document.getElementById('coin2').style.visibility = "hidden"
    document.getElementById('coin3').style.visibility = "hidden"
   if(String(eatCoins).length == 2){
    const coin = document.getElementById('coin0');
    coin.style.backgroundPosition = `-${10 +(d * 10)}px  -453px`; 
   }else if(String(eatCoins).length == 3){ 
    document.getElementById('coin2').style.visibility = "visible";
    
    const coin = document.getElementById('coin0');
    coin.style.backgroundPosition = `-${10 +(d * 10)}px  -453px`; 
    const coin0 = document.getElementById('coin1');
    coin0.style.backgroundPosition = `-${10 +(r * 10)}px  -453px`; 
   }else if(String(eatCoins).length == 4){
    document.getElementById('coin2').style.visibility = "visible";
    document.getElementById('coin3').style.visibility = "visible"
    const coin = document.getElementById('coin0');
    coin.style.backgroundPosition = `-${10 +(d * 10)}px  -453px`; 
    const coin0 = document.getElementById('coin1');
    coin0.style.backgroundPosition = `-${10 +(r * 10)}px  -453px`; 
    const coin1 = document.getElementById('coin2');
    coin1.style.backgroundPosition = `-${10 +(k * 10)}px  -453px`; 
    
   }
        
  }, 20)

// set the initial state and launch the game loop
function begin(){
    idGameLoop = setInterval(gameLoop, 100);
    setInterval(moveRed, 100);
       yellowFunction()
        pinkFunction()
        greenFunction()
        startOfTheGame()
}
document.addEventListener("DOMContentLoaded", createBoard)
// launch the game
document.addEventListener("DOMContentLoaded", begin);

