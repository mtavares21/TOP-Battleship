import React, { useState, useEffect, useRef } from "react";
import Board from "./Components/Board";
import Dock from "./Components/Dock";
import MessageBoard from "./Components/MessageBoard";
import styles from "./app.module.css";
import * as _ from "lodash";
import { player1, player2, gameOver, winner } from "./game";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function App(props) {
  const initialBoardPlayer1 = useRef(_.cloneDeep(player1.board.getBoard));
  const initialBoardPlayer2 = useRef(_.cloneDeep(player2.board.getBoard));

  const [player1Board, setPlayer1Board] = useState(initialBoardPlayer1.current);
  const [player2Board, setPlayer2Board] = useState(initialBoardPlayer2.current);
  const [gameState, setGameState] = useState("Start");

  const attackPlayer1 = (coord) => {
    player2.attack(player1, coord);
    const newBoard = _.cloneDeep(player1.board.getBoard);
    const newState = gameOver() ? winner() : "Player1's turn";
    setPlayer1Board((prev) => newBoard);
    setGameState((prev) => newState);
  };
  const attackPlayer2 = (coord) => {
    player1.attack(player2, coord);
    const newBoard = _.cloneDeep(player2.board.getBoard);
    const newState = gameOver() ? winner() : "Player2's turn";
    setPlayer2Board((prev) => newBoard);
    setGameState((prev) => newState);
  };
  const computerPlay = () => {
    let newState = gameState;
    let newBoard = player1Board;
    if (gameState === "Player2's turn") {
      player2.play(player1);
      newState = "Player1's turn";
      newBoard = _.cloneDeep(player1.board.getBoard);
    }
    setPlayer1Board((prev) => newBoard);
    setGameState((prev) => newState);
  };

  useInterval(computerPlay, 2000);

  const handleStart = () => {
    setGameState("Player1's turn");
  };
  const handleNewGame = () => {
    setPlayer1Board((prev) => initialBoardPlayer1.current);
    setPlayer2Board((prev) => initialBoardPlayer2.current);
    setGameState((prev) => "Start");
  };

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}> BattleShip </h1>
      </div>
      <div className={styles.flowControlWrapper}>
        <MessageBoard message={gameState} />
        <div className={styles.buttonWrapper}>
          <input
            type="button"
            value={gameState === "Start" ? "Start" : "New Game"}
            onClick={gameState === "Start" ? handleStart : handleNewGame}
          />
        </div>
      </div>
      <div className={styles.controlRoom}>
        <Dock />
        <div className={styles.boardWrapper}>
          <Board
            board={player1Board}
            attack={
              !gameOver() && gameState === "Player2's turn"
                ? attackPlayer1
                : () => {}
            }
            showBoats={true}
          />
        </div>
      </div>
      <Board
        board={player2Board}
        attack={
          !gameOver() && gameState === "Player1's turn"
            ? attackPlayer2
            : () => {}
        }
        showBoats={false}
      />
    </div>
  );
}

export default App;
