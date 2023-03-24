//
//
// Here are constants
//
//
let layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0
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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//18
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//19
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],//20
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],//21
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//22
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],//23
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],//24
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//25
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],//26
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//27
    [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1],//28
    [1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1],//29
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]//30
]

//
//
// Here are the initial states
//
//

// This is state of the PacMan
// TODO
// Move it in PacMan.js
var xpos = 116;
var ypos = 192;
var xspeed = 0;
var yspeed = 0;
var RequestPacManDirection;

function gameLoop() {

    //
    //
    // State of the Game
    //
    //

    // Get the PacMan
    pacman = document.getElementById('pacman')

    // Which key was pressed last?
    var lastPressedKey  = window.localStorage.getItem("lastPressedKey");
    var PacManDirection = window.localStorage.getItem("PacManDirection");

    // Current colums
    let PacManxcol = window.localStorage.getItem("PacManxcol");
    let PacManycol = window.localStorage.getItem("PacManycol");


    //Is direction is allowed
    let rightTurnIsAllowed = false;
    let leftTurnIsAllowed = false;
    let upTurnIsAllowed = false;
    let downTurnIsAllowed = false;

    //
    //
    // Here are the Brains
    //
    //

    // CURRENT STATE

    // Where are we?
    if ((xpos % 8) === 0) {
        PacManxcol = (xpos / 8) - 1;

        // Logging
        // Show in which column we are
        window.localStorage.setItem("PacManxcol", PacManxcol);
        document.getElementById("PacManxcol").innerHTML = PacManxcol;
    }

    if ((ypos % 8) === 0) {
        PacManycol = (ypos / 8) - 1;

        // Logging
        // Show in which column we are
        window.localStorage.setItem("PacManycol", PacManycol);
        document.getElementById("PacManycol").innerHTML = PacManycol;

    }
    document.getElementById("CurrentMatrixValue").innerHTML = "y: " + PacManycol + " x: " + PacManxcol;

    // This code is not complete.
    // When we complete it, it will tell us what action is possible on the block we are.
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {

            // i is a row
            // j is the colum in this row
            // I am [i][j|
            // left is i j-1
            // right is i j+1
            // top is i-1 j
            // botom is i+1 j

            // if direction is up and i-1 j = 0 i can continue up
            //  else i must stop
            //    we must see how to do the stop, may be with PacManStop = true/false

            // CAN I CONTINUE?
            // For this you need the direction? => var Direction
            if((i == PacManycol) &&
               (j == PacManxcol)){
                // alert(i-1 + " " + j + " " + layout[i-1][j]);
                if(layout[i][j+1] == 0){

                    rightTurnIsAllowed = true;

                }else if(layout[i][j-1] == 0){

                    leftTurnIsAllowed = true;

                }else if(parseInt(layout[i-1][j]) == parseInt(0)){

                    upTurnIsAllowed = true;

                }else if(layout[i+1][j] == 0){

                    downTurnIsAllowed = true;

                }
            }else{

                if(PacManDirection == "Left")  rightTurnIsAllowed = true;
                if(PacManDirection == "Right") leftTurnIsAllowed  = true;
                if(PacManDirection == "Down")  upTurnIsAllowed    = true;
                if(PacManDirection == "Up")    downTurnIsAllowed  = true;

            }

            document.getElementById("rightTurnIsAllowed").innerHTML = rightTurnIsAllowed;
            document.getElementById("leftTurnIsAllowed").innerHTML = leftTurnIsAllowed;
            document.getElementById("downTurnIsAllowed").innerHTML = downTurnIsAllowed;
            document.getElementById("upTurnIsAllowed").innerHTML = upTurnIsAllowed;

            window.localStorage.setItem("rightTurnIsAllowed", rightTurnIsAllowed);
            window.localStorage.setItem("leftTurnIsAllowed", leftTurnIsAllowed);
            window.localStorage.setItem("downTurnIsAllowed", downTurnIsAllowed);
            window.localStorage.setItem("upTurnIsAllowed", upTurnIsAllowed);

        }

        // So depending on the direction you can check the next square on the array
        // If not 0 you have to stop => var PacManStopped
        // B.
        // TURNING ON CROSSINGS
        // 1.
        // Is there a desired direction at all?
        // ...
        // How do we answer this?
        // The semantically cleanest answer is "Is there a pressed key?"
        // For this to work, after you process the pressed key, you must reset this variable
        // 2.
        // Can I turn here?
        // To answer this we must know which is the desired direction?
        // Also we must know if we are on a crossing:
        // — we have current coordinates which change w/ step 1 pixel
        // - we have the array w/ the docts which are on every 8 pixels
        // — so we should execute the turning logic only if the current x/8 is an integer
        // can I continue?

    }

    // Decide upon Direction
    // TODO
    // This must be enhanded w/ a condition "Can I turn in that direction?"
    console.log(window.localStorage.getItem("rightTurnIsAllowed"));
    if (lastPressedKey == "ArrowUp" && (upTurnIsAllowed == true)){
    // if (lastPressedKey == "ArrowUp" ){

        PacManDirection = "Up";

    }else if(lastPressedKey == "ArrowDown" && (downTurnIsAllowed == true)){
    // }else if(lastPressedKey == "ArrowDown" ){

        PacManDirection = "Down";

    // }else if(lastPressedKey == "ArrowLeft" && (leftTurnIsAllowed == true)){
    }else if(lastPressedKey == "ArrowLeft" ){
        PacManDirection = "Left";

    }else if((lastPressedKey == "ArrowRight") && (rightTurnIsAllowed == true) ){
    // }else if((lastPressedKey == "ArrowRight") ){

        PacManDirection = "Right";
    }

    document.getElementById("PacManDirection").innerHTML = PacManDirection;

    //
    //
    // Execution of the Decisions by the Brains
    //
    //

    //
    //
    // Move PacMan (later "if possible")
    //
    //

    // For now w/ ifs, later we can switch to cases when the Brain is more advanced
    // TODO
    // Replace lastPressedKey w/ Direction (Up, Down, Left, Right)
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
    }

    // New Position
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    // Apply the New Postion
    pacman.style.left = xpos;
    pacman.style.top = ypos;

} // END of gameloop()

// Here we capture the last pressed key and store it in the game state
document.addEventListener("keydown", (e) => {

        lastPressedKey = e.code;

        window.localStorage.setItem("lastPressedKey", lastPressedKey);

        document.getElementById("lastPressedKey").innerHTML = lastPressedKey;
    }
);

// This is the begin function which stets the initial state and launches the game loop
function begin(){

    // Initial State

    window.localStorage.setItem("lastPressedKey", "ArrowRight");

    // This is the Main Heartbeat
    var gameLoopTimeout = setInterval(gameLoop, 50);

}

// This launches the game
document.addEventListener("DOMContentLoaded", begin());