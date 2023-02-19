//
//
// Here are constants
//
//

let layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 10, 10, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6],
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

    //
    //
    // Here are the Brains
    //
    //

    // CURRENT STATE

    // Where are we?
    if ((xpos % 8) === 0) {
        var PacManxcol = xpos / 8;

        // Logging
        // Show in which column we are
        document.getElementById("PacManxcol").innerHTML = PacManxcol;
        // console.log("x = " + PacManxcol);
        // alert(PacManxcol)
    }

    if ((ypos % 8) === 0) {
        var PacManycol = ypos / 8;

        // Logging
        // Show in which column we are
        document.getElementById("PacManycol").innerHTML = PacManycol;
        // console.log("y = " + PacManycol);
        // console.log(PacManycol);
        // alert(PacManycol)
    }

    // This code is not complete.
    // When we complete it, it will tell us what action is possible on the block we are.
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i] != 0) {
                // CAN I CONTINUE?
                // For this you need the direction? => var Direction

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
            }
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
    if (lastPressedKey == "ArrowUp"){

        PacManDirection = "Up";

    }else if(lastPressedKey == "ArrowDown"){

        PacManDirection = "Down";

    }else if(lastPressedKey == "ArrowLeft"){

        PacManDirection = "Left";

    }else if(lastPressedKey == "ArrowRight"){

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