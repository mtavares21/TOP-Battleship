import { Player } from "./player.factory";
import Gameboard from "./gameboard.factory";
import shipFactory from "./ship.factory"

// Define players
const player1 = Player(Gameboard());
const player2 = Player(Gameboard());
// GameOver 
const gameOver = () => player2.board.allSunk() || player1.board.allSunk();
// Winner
const winner = () => {
  if( player1.board.allSunk() && gameOver()){
    return 'Player2 wins!'
  } else if( player2.board.allSunk() && gameOver()){
    return 'Player1 wins!'
  } else { return 'No winner.'}
}
// Put ships of player 2 board
const computerShips =()=>{
   player2.board.placeShip(
    { lin: [4, 4, 4, 4], col: [5, 6, 7, 8] },
    shipFactory(4)
  );
  // Destroyer
  player2.board.placeShip({ lin: [9, 9, 9], col: [1, 2, 3] }, shipFactory(3));
  // Submarine
  player2.board.placeShip({ lin: [1, 2, 3], col: [1, 1, 1] }, shipFactory(3));
  player2.board.placeShip({ lin: [1, 1, 1], col: [4, 5, 6] }, shipFactory(3));
  player2.board.placeShip({ lin: [0, 0, 0], col: [7, 8, 9] }, shipFactory(3));
  
  //Patrol boat
  player2.board.placeShip({ lin: [7, 7], col: [8, 9] }, shipFactory(2));
  player2.board.placeShip({ lin: [9, 9], col: [6, 7] }, shipFactory(2));
}

export { player1, player2, gameOver, winner, computerShips };
