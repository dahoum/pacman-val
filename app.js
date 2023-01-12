let layout = []
document.addEventListener('DOMContentLoaded', () => {

    //
    // layout = [
    //           [
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [5,on,"0 0, 100 100, 100 0, 0 100"], // THIS IS A CHERRY ON THE SAME COORDINATES
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [1,on,"0 0, 100 100, 100 0, 0 100"]
    //           ]
    //           [
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [1,on,"0 0, 100 100, 100 0, 0 100"],
    //            [1,on,"0 0, 100 100, 100 0, 0 100"]
    //           ]
    layout = [
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
            [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6],
        ]
        // 0 - dots
        // 1 - wall
        // 2 - ghost-line
        // 3 - power
        // 4 - empty
        // 6 - bottom right corners
        // 7 - bottom walls
        // 8 - bottom left corners
        // 9 - left corners
        //10 - ghost magic line

    // TODO
    // You will need more elements
    // 4 x corners
    // etc.
    var spritesheet = document.getElementById("spritesheet");

    function createBoard() {
        let posy = 0;
        for (let i = 0; i < layout.length; i++) {

            let posx = 0;
            for (let j = 0; j < layout[i].length; j++) {
                var element = document.createElement("div");
                element.style.height = "8.82px";
                element.style.width = "8px";
                element.classList.add('container')
                element.style.backgroundImage = "url('./img.png')"

                let counter = 0;
                if (counter <= j) {
                    element.style.backgroundPositionX = `${posx}px`
                    element.style.backgroundPositionY = `${posy}px`
                    posx -= 8
                    counter++
                }

                spritesheet.appendChild(element);
            }
            posy -= 8.82

        }

    }
    createBoard()

    var xpos = 100;
    var ypos = 100;
    var xspeed = 1;
    var yspeed = 0;
    var maxSpeed = 1;

    function moveP(e) {
        xpos = xpos + xspeed;
        ypos = ypos + yspeed;
        switch (e.keyCode) {
            case 37:
                // left
                document.getElementById('pacman').style.left = xpos;
                document.getElementById('pacman').style.top = ypos;
                break
            case 38:
                // up
                document.getElementById('pacman').style.left = xpos;
                document.getElementById('pacman').style.top = ypos;
                break
            case 39:
                // right
                document.getElementById('pacman').style.left = xpos;
                document.getElementById('pacman').style.top = ypos;
                break
            case 40:
                // down
                document.getElementById('pacman').style.left = xpos;
                document.getElementById('pacman').style.top = ypos;
                break
        }
    }
    // yspeed = Math.max(yspeed - 1, -1 * maxSpeed);
    document.addEventListener('keyup', moveP)

});
































// var xpos = 100;
// var ypos = 100;
// var xspeed = 1;
// var yspeed = 0;
// var maxSpeed = 1;

// var upPressed = 0;
// var downPressed = 0;
// var leftPressed = 0;
// var rightPressed = 0;

// function slowDownX() {
//     if (xspeed > 0)
//         xspeed = xspeed - 1;
//     if (xspeed < 0)
//         xspeed = xspeed + 1;
// }

// function slowDownY() {
//     if (yspeed > 0)
//         yspeed = yspeed - 1;
//     if (yspeed < 0)
//         yspeed = yspeed + 1;
// }

// function gameLoop() {

//     // or, without boundaries:
//     xpos = xpos + xspeed;
//     ypos = ypos + yspeed;

//     // change actual position
//     document.getElementById('pacman').style.left = xpos;
//     document.getElementById('pacman').style.top = ypos;

//     // change speed based on keyboard events
//     if (upPressed == 1)
//         yspeed = Math.max(yspeed - 1, -1 * maxSpeed);
//     if (downPressed == 1)
//         yspeed = Math.min(yspeed + 1, 1 * maxSpeed)
//     if (rightPressed == 1)
//         xspeed = Math.min(xspeed + 1, 1 * maxSpeed);
//     if (leftPressed == 1)
//         xspeed = Math.max(xspeed - 1, -1 * maxSpeed);

//     // deceleration
//     if (upPressed == 0 && downPressed == 0)
//         slowDownY();
//     if (leftPressed == 0 && rightPressed == 0)
//         slowDownX();

//     // loop
//     setTimeout("gameLoop()", 10);
// }

// function keyDown(e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     if (code == 38)
//         upPressed = 1;
//     if (code == 40)
//         downPressed = 1;
//     if (code == 37)
//         leftPressed = 1;
//     if (code == 39)
//         rightPressed = 1;
// }

// function keyUp(e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     if (code == 38)
//         upPressed = 0;
//     if (code == 40)
//         downPressed = 0;
//     if (code == 37)
//         leftPressed = 0;
//     if (code == 39)
//         rightPressed = 0;
// }
// var key_pressed =
//     document.getElementById('pacman');

// key_pressed
//     .addEventListener("keydown", keyDown);
// key_pressed
//     .addEventListener("keypress", gameLoop);
// key_pressed
//     .addEventListener("keyup", keyUp);
// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);
// document.addEventListener("load", gameLoop);