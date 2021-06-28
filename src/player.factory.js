import Gameboard from "./gameboard.factory";

const Player = () => {
  // Player as his own board
  const board = Gameboard()
  // Player atacks given oponent (given the correct gameboard)
  const attack = (enemyToAttack, coord) => enemyToAttack.receiveAttack(coord);
  // Hit play and computer makes a random legal move
  const play = (enemyToAttack) => {
    const possibleMoves = [...enemyToAttack.getBoard].flatMap((m, line) => {
      return m.reduce((prev, cur, index) => {
        if (cur !== "missed") {
          prev.push({
            lin: line,
            col: index,
          });
        }
        return [...prev];
      }, []);
    });
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    attack(enemyToAttack,move);
  };
  return { board, attack, play };
};

export default Player;
