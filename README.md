## BattleShip Game

### Objective

Build a Battlefield game in Test Driven Development.

### Description

To build this game the first step was bulding the game logic in a Test Driven Develoment, using Jest to run the tests.

This unit tested part of the project works as and API to isolate the game logic, with public methods that are then used to build the
game interface.

The UI components are build using React, with the help of React DnD(drag and drop) for the players to place their ships of the board.

### Challenges

This was the most challenging project untill this point, first given that's the first one in TDD, made me think a lot more
about each step of the develoment, keeping my functions pure and realizing when to test for return values, side effects or not
to test at all.

Using React to build the UI was definitly a good choice, mostly because it help me get a better understanding of how it works,
how to keep components decoupled, manage state better, using effects, custon hooks and other hooks that i did not have needed before.

For the ship placement I end up using the React DnD, after trying the HTML Drag and Drop API and Interact.js, it seemed a bit more than
I needed at first, it's not the simplest library to use, but after giving it a shot it's definitly the best option using React, mainly
because it's data-driven, just as React.

## Live Preview

https://mtavares21.github.io/TOP-Battleship
