import compose from "lodash/fp/flowRight";

// Player atacks given oponent (given the correct gameboard)
const attack = (enemy, coord) => enemy.board.receiveAttack(coord);
// Do random move
const randomMove = (moves) => moves[Math.floor(Math.random() * moves.length)];
// Map possible moves
const possibleMoves = (enemy) => {
  return enemy.board.getBoard
    .flatMap((cell) => cell)
    .filter((cell) => !cell.missed && !cell.wasHit)
    .map( cell => cell.coord)
};
// Generate possible random move
const computerMove = compose(randomMove,possibleMoves)
const play = (enemy) => attack(enemy, computerMove(enemy));
// Player factory
const Player = (board) => Object.assign({}, { board, attack, play });

export  {Player, randomMove, possibleMoves};
