import Player from "./player.factory";
import shipFactory from "./ship.factory";
  // Define players
  const player = Player();
  const player2 = Player();

  let turn = "player";

  const playerAttacks = (move) => {
    player.attack(player2.board, move);
    turn = "player2";
  };
  const player2Attacks = (move) => {
   player2.attack(player.board, move);
    turn = "player1";
  };
  const gameOver = (move) => {
    return player.board.allSunk() || player2.board.allSunk()? true : false
  }
  const winner = () => {
    if(player.board.allSunk()){
      return'player2 wins'
    } else if (player2.board.allSunk()){
      return 'player wins'
    }
  }
  // Carrier
  player2.board.placeShip(
    { lin: [0, 0, 0, 0, 0], col: [0, 1, 2, 3, 4] },
    shipFactory(5)
  );
  // Battleship
  player2.board.placeShip(
    { lin: [4, 4, 4, 4], col: [5, 6, 7, 8] },
    shipFactory(4)
  );
  player2.board.placeShip(
    { lin: [2, 3, 4, 5], col: [3, 3, 3, 3] },
    shipFactory(4)
  );
  /*// Destroyer
  player2.board.placeShip({ lin: [9, 9, 9], col: [1, 2, 3] }, shipFactory(3));
  player2.board.placeShip({ lin: [8, 7, 6], col: [0, 0, 0] }, shipFactory(3));
  player2.board.placeShip({ lin: [9, 8, 7], col: [9, 9, 9] }, shipFactory(3));
  // Submarine
  player2.board.placeShip({ lin: [1, 2, 3], col: [9, 9, 9] }, shipFactory(3));
  player2.board.placeShip({ lin: [1, 1, 1], col: [4, 5, 6] }, shipFactory(3));
  player2.board.placeShip({ lin: [0, 0, 0], col: [7, 8, 9] }, shipFactory(3));
  player2.board.placeShip({ lin: [7, 7, 7], col: [2, 3, 4] }, shipFactory(3));
  */
  //Patrol boat
  player2.board.placeShip({ lin: [5, 5], col: [6, 7] }, shipFactory(2));
  player2.board.placeShip({ lin: [2, 2], col: [0, 1] }, shipFactory(2));
  player2.board.placeShip({ lin: [7, 7], col: [6, 7] }, shipFactory(2));
  player2.board.placeShip({ lin: [9, 9], col: [9, 9] }, shipFactory(2));
  player2.board.placeShip({ lin: [9, 9], col: [6, 7] }, shipFactory(2));
  // Carrier
  player.board.placeShip(
    { lin: [0, 0, 0, 0, 0], col: [0, 1, 2, 3, 4] },
    shipFactory(5)
  );
  // Battleship
  player.board.placeShip(
    { lin: [4, 4, 4, 4], col: [5, 6, 7, 8] },
    shipFactory(4)
  );
  player.board.placeShip(
    { lin: [2, 3, 4, 5], col: [3, 3, 3, 3] },
    shipFactory(4)
  );
  /*// Destroyer
  player.board.placeShip({ lin: [9, 9, 9], col: [1, 2, 3] }, shipFactory(3));
  player.board.placeShip({ lin: [8, 7, 6], col: [0, 0, 0] }, shipFactory(3));
  player.board.placeShip({ lin: [9, 8, 7], col: [9, 9, 9] }, shipFactory(3));
  
  // Submarine
  player.board.placeShip({ lin: [1, 2, 3], col: [9, 9, 9] }, shipFactory(3));
  player.board.placeShip({ lin: [1, 1, 1], col: [4, 5, 6] }, shipFactory(3));
  player.board.placeShip({ lin: [0, 0, 0], col: [7, 8, 9] }, shipFactory(3));
  player.board.placeShip({ lin: [7, 7, 7], col: [2, 3, 4] }, shipFactory(3));
  */
  //Patrol boat
  player.board.placeShip({ lin: [5, 5], col: [6, 7] }, shipFactory(2));
  player.board.placeShip({ lin: [2, 2], col: [0, 1] }, shipFactory(2));
  player.board.placeShip({ lin: [7, 7], col: [6, 7] }, shipFactory(2));
  player.board.placeShip({ lin: [9, 9], col: [9, 9] }, shipFactory(2));
  player.board.placeShip({ lin: [9, 9], col: [6, 7] }, shipFactory(2));

export { player, player2, turn, player2Attacks, playerAttacks, gameOver, winner };

