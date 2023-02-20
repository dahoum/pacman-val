# 20 February 2023
* Macbook test

# 19 February 2023

* Homework from 13 February
  * Change to lastKeyPressed `done`
  * Remove all upPressed, etc. `done`
  * move yspeed = and xspeed = 0 into the Brain `done`
  * Introduce localStorage Direction, which is the current direction and make it work `done`
* Homework
  * Understand what we have done and explain it to me `val`
  * See how we can continue implementing from 13 Feb `val`
* Mantra
  * Tidy First
  * Coding Standards
    * Easy to Read
      * Shorter Steps
      * Consistent Naming of Variables

# 17 February 2023
  * Try to change to lastKeyPressed - other way - the logic is not right

# 16 February 2023
  * Try to remove upPressed, downPressed, leftPressed, rightPressed

# 15 February 2023
  * Try to move pacman into game loop

# 14 February 2023
  * Try to change to lastKeyPressed



# 13 February 2023
  * Change from code to key name `val` `done`
  * Simplify to "keyPressed" / only one function `val` `done`
  * Start to fix labyrint
  * Homework
    * Change to lastKeyPressed `done on 19 Feb`
    * Remove all upPressed, etc. `done on 19 Feb`
    * move yspeed = and xspeed = 0 into the Brain `done on 19 Feb`
    * Introduce localStorage Direction, which is the current direction and make it work `done on 19 Feb`
    * then we will do the first logic based on the matrix togerer ...
    * ...
    * ...
    * The game must work after you do all this. Whatever we do, we should not break the current state of the sofware `!`
    * the next will be to put the move/stop decisions of PacMan in the Brain in the right order.
  * Behaviour
    * If something is not the next, but looks easy, do not do it.
    * Try to find the next.
    * Develop a habit to look for the next.

# 10 February 2023
  * We have wanted direction - try to make pacman move in matrix

# 9 February 2023
  * Try to make localStorage back

# 8 February 2023
  * Try to make game logic
  * CSS https://www.w3schools.com/css/default.asp

# 7 February 2023
    * CSS
      * https://www.w3schools.com/css/default.asp
        * CSS Home
        * CSS Introduction
        * CSS Syntax
        * CSS Selectors
        * CSS How to
        * CSS Comments
        * CSS Colors - RGB, HEX, HSL
    * Understand game logic
    * Try to make logic

# 6 February 2023
    * HTML
      * https://www.w3schools.com/html/default.asp
        * HTML Home
        * HTML Introduction
        * HTML Editors
        * HTML Basic
        * HTML Elements
        * HTML Attributes
        * HTML Headings
        * HTML Paragraphs
    * Understand game logic

# 3 February 2023
* Try to make pacman move in labyrinth
  * try to make boolean variable which choose where pacman can move - it is not working
  * search information for canvas
* val et dahoum
  * introduce a step
  * introduce a state
    * Where is the PacMan?
      * On one side we move in the matrix.
      * On another it is moving w/ step 1 pixel on the screen.
      * Somehow we must map these two
      * PacMan can only turn on a dot
      * But between the dots there is a smooth movement and nothing can happen, except many be being eaten.
      * So we need
        * Smooth moving logic
        * Decision logic which kicks in only on dots
  * press key and go if next is zero
  * remember pressed key and turn on 1st opportunity
  * turn on opportunity
* Mantra
  * Goal, we do not need the DOs we need the skills convincingly visible in you.
    * If you do not understand something, take your time, until you understand it.
    * Do not look for any PacMan code! You should write it all ;) This is the goal ;) `agreed` since 24 December 2022
    * Seek the knowledge how to do it, not solutions `val` since 3 January 2023
  * Archive and Keep Notes, since 3 January 2023 Delete what you have archvided, since 12 January 2022 `val`
  * Never self-incriminate. Do not apologise. Begin w/ the successes.
  * Do not do useless things. Do only what brings you forward.
  * Either do one thing to the end or to a meaningful milestone before switching to something else.
  * Do not make regressions (remove code) because you do not know how to advance (except in a branch), since 12 January 2023
  * Keep the variations of your work in the Nursery when you get stuck as files or sub-folders `!`
    * This way I can help you to get unstuck where you are stuck.
    * If you delete it I cannot help you and we waste time.
  * Make a plan what you will do w/ comments.
    * Then you can still execute it piece by piece, but you at least know where you are in the plan.
    * I WILL NOT HELP YOU IF YOU DO NOT HAVE A PLAN.
  * Permanent Homework
    * Use 20-40% of your time for this
    * https://www.typescriptlang.org/docs/handbook/intro.html
      * Read it as a book w/o stopping to understand it, 2-3 times, and book your time
    * HTML
      * https://www.w3schools.com/html/default.asp
    * CSS
      * https://www.w3schools.com/css/default.asp




* Backlog
  * Game Loop `val`
  * Follow the array for the movement of the PacMan and Ghosts `val`
  * w/ the array you can also clip the image for every element if you decide to go that way `val`
* Val
  * +
    * It is good that when you have several ideas, you implement them and demonstrate them instead of getting stuck `dahoum` since 3 January 2023
PacMan
  * https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1
* Infrastructure
  * GitHub `done`
    * https://github.com/valentinamaximova/PacMan
  * Netlify `done`
    * https://pacman-val.netlify.app
* Architecture
  * We will use the sprite sheet vs individual images, because it is the classic approach and you will learn more about image processing and management this way `dahoum`
