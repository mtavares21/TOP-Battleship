import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import styles from "./app.module.css";
import * as _ from "lodash";
import { player, player2, turn, player2Attacks, playerAttacks } from "./game";

function App(props) {
  const initialBoardPlayer = _.cloneDeep(player.board.getBoard);
  const initialBoardPlayer2 = _.cloneDeep(player2.board.getBoard);

  const [playerBoard, setPlayerBoard] = useState(initialBoardPlayer);
  const [player2Board, setPlayer2Board] = useState(initialBoardPlayer2);
  const [currTurn, setTurn] = useState(turn);

  const attackPlayer = (coord) => {
    player2Attacks(coord);
    const newBoard = _.cloneDeep(player.board.getBoard);
    setPlayerBoard((prev) => newBoard);
  };
  const attackPlayer2 = (coord) => {
    playerAttacks(coord);
    const newBoard = _.cloneDeep(player2.board.getBoard);
    setPlayer2Board((prev) => newBoard);
  };

  useEffect(() => {
    setTurn((prev) => turn);
    console.log(turn);
  }, [playerBoard, player2Board]);


  useEffect(() => {
    
    },[player2Board])
  return (
    <div className={styles.gameWrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}> BattleShip </h1>
      </div>
      <div className={styles.boardWrapper}>
        <Board board={playerBoard} attack={attackPlayer} showBoats={true} />
        <Board
          board={player2Board}
          attack={attackPlayer2}
          showBoats={false}
        />
      </div>
    </div>
  );
}

export default App;
