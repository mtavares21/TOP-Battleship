import React, { useState, useEffect, useRef, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./Components/Header";
import SituationRoom from "./Components/SituationRoom";
import Button from "./Components/Button";
import Striped from "./Components/Striped";
import styles from "./app.module.css";
import * as _ from "lodash";
import { player1, player2, gameOver, winner, computerShips } from "./game";

// React hook used to delay computerPlay
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
const updateState = (player, setState) => {
  const newBoard = _.cloneDeep(player.board.getBoard);
  setState((prev) => newBoard);
};

function App() {
  const initialBoardPlayer1 = useRef(_.cloneDeep(player1.board.getBoard));
  const initialBoardPlayer2 = useRef(_.cloneDeep(player2.board.getBoard));
  const initialDock = [
    { key: "P1destroyer", length: 4 },
    { key: "P1submarine1", length: 3 },
    { key: "P1submarine2", length: 3 },
     { key: "P1submarine3", length: 3 },
    { key: "P1submarine4", length: 3 },
    { key: "P1patrolBoat1", length: 2 },
    { key: "P1patrolBoat2", length: 2 },
  ];

  const [player1Board, setPlayer1Board] = useState(initialBoardPlayer1.current);
  const [player2Board, setPlayer2Board] = useState(initialBoardPlayer2.current);
  const [player1shipsOnDock, setPlayer1ShipsOnDock] = useState(initialDock);
  const [player2shipsOnDock, setPlayer2ShipsOnDock] = useState(initialDock);
  const [gameState, setGameState] = useState("Game mode");
  const [gameMode, setGameMode] = useState(null);
  const [renderBoard, setRenderBoard] = useState(false);
  const [winEffect, setWinEffect] = useState(false);

  // Sincronize player attacks with boards state
  const attackPlayer1 = (coord) => {
    player2.attack(player1, coord);
    const newState = gameOver() ? winner() : "Player1's turn";
    updateState(player1, setPlayer1Board);
    setGameState((prev) => newState);
    gameOver() && gameMode === "multiplayer"
      ? setRenderBoard((prev) => true)
      : setRenderBoard((prev) => false);
    gameOver() && setWinEffect(true);
  };
  const attackPlayer2 = (coord) => {
    player1.attack(player2, coord);
    const newState = gameOver() ? winner() : "Player2's turn";
    updateState(player2, setPlayer2Board);
    setGameState((prev) => newState);
    gameOver() && gameMode === "multiplayer"
      ? setRenderBoard((prev) => true)
      : setRenderBoard((prev) => false);
    gameMode === "multiplayer" && gameOver()
      ? setRenderBoard((prev) => true)
      : setRenderBoard((prev) => false);
    gameOver() && setWinEffect(true);
  };
  // Single player mode: place computer ships and move's in is turn
  const computerPlay = () => {
    if (gameState === "Player2's turn" && gameMode === "single player") {
      let newState = gameState;
      let newBoard = player1Board;
      player2.play(player1);
      newState = "Player1's turn";
      newBoard = _.cloneDeep(player1.board.getBoard);
      setPlayer1Board((prev) => newBoard);
      setGameState((prev) => newState);
    }
  };
  // Add delay to computer moves ( setInterval alone does not do well with React)
  useInterval(computerPlay, 2000);
  // is ship placement phase?
  const isGameStart =
    gameState === "Place your ships!" ||
    gameState === "Player1, place your ships!" ||
    gameState === "Player2, place your ships!";
  // useGameFlow is called when a player finished placing is ships
  function useGameFlow(areShipsReady) {
    let newGameState = gameState;
    console.log(areShipsReady);
    if (areShipsReady) {
      if (gameMode === "single player" && isGameStart) {
        newGameState = "Player1's turn";
      }
      if (gameMode === "multiplayer" && isGameStart) {
        if (gameState === "Player1, place your ships!") {
          newGameState = "Player2, place your ships!";
          setRenderBoard((prev) => false);
        } else if (gameState === "Player2, place your ships!") {
          newGameState = "Player1's turn";
          setRenderBoard((prev) => false);
        }
      }
    }
    useEffect(() => setGameState((prev) => newGameState), [newGameState]);
  }

  console.log(winEffect);
  // Clear boards and go back to initial state
  const handleNewGame = () => {
    player1.board.reset();
    player2.board.reset();
    setPlayer1Board((prev) => _.cloneDeep(player1.board.getBoard));
    setPlayer2Board((prev) => _.cloneDeep(player2.board.getBoard));
    setGameState((prev) => "Game mode");
    setGameMode((prev) => null);
    setRenderBoard((prev) => false);
    setPlayer1ShipsOnDock((prev) => initialDock);
    setPlayer2ShipsOnDock((prev) => initialDock);
    setWinEffect(false);
  };
  const handleSinglePlayer = () => {
    computerShips();
    updateState(player2, setPlayer2Board);
    setGameMode((prev) => "single player");
    setGameState((prev) => "Place your ships!");
    setRenderBoard((prev) => true);
  };
  const handleMultiplayer = () => {
    setGameMode((prev) => "multiplayer");
    setGameState((prev) => "Player1, place your ships!");
  };
  const renderSituationRoom = () => {
    if (gameMode === "multiplayer") {
      return (
        <div className={styles.background}>
          <SituationRoom
            itemType={"P1"}
            setBoard={() => updateState(player1, setPlayer1Board)}
            player={player1}
            attack={gameState === "Player1's turn" ? attackPlayer2 : () => {}}
            playerBoard={player1Board}
            enemyBoard={player2Board}
            useGameFlow={useGameFlow}
            setGameState={setGameState}
            showRoom={
              renderBoard &&
              (gameState === "Player1, place your ships!" ||
                gameState === "Player1's turn" ||
                gameState === "Player2 wins!")
            }
            shipsOnDock={player1shipsOnDock}
            setShipsOnDock={setPlayer1ShipsOnDock}
            turn={
              gameState === "Player1's turn" ||
              gameState === "Player1, place your ships!"
            }
          />
          <SituationRoom
            itemType={"P2"}
            setBoard={() => updateState(player2, setPlayer2Board)}
            player={player2}
            attack={gameState === "Player2's turn" ? attackPlayer1 : () => {}}
            playerBoard={player2Board}
            enemyBoard={player1Board}
            useGameFlow={useGameFlow}
            showRoom={
              renderBoard &&
              (gameState === "Player2, place your ships!" ||
                gameState === "Player2's turn" ||
                gameState === "Player1 wins")
            }
            shipsOnDock={player2shipsOnDock}
            setShipsOnDock={setPlayer2ShipsOnDock}
            turn={
              gameState === "Player2's turn" ||
              gameState === "Player2, place your ships!"
            }
          />
        </div>
      );
    } else if (gameMode === "single player") {
      return (
        <SituationRoom
          itemType={"P1"}
          setBoard={() => updateState(player1, setPlayer1Board)}
          player={player1}
          attack={gameState === "Player1's turn" ? attackPlayer2 : () => {}}
          playerBoard={player1Board}
          enemyBoard={player2Board}
          useGameFlow={useGameFlow}
          showRoom
          shipsOnDock={player1shipsOnDock}
          setShipsOnDock={setPlayer1ShipsOnDock}
          turn={
            gameState === "Player1's turn" || gameState === "Place your ships!"
          }
        />
      );
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.gameWrapper}>
        <Header
          gameState={gameState}
          handleSinglePlayer={handleSinglePlayer}
          handleMultiplayer={handleMultiplayer}
          handleNewGame={handleNewGame}
          winEffect={winEffect}
        />
        <Striped winEffect={winEffect} />
        <div className={styles.background}>
          {!renderBoard &&
          gameMode === "multiplayer" &&
          gameState !== "Game mode" ? (
            <div className={styles.lifebuoy}>
              <svg width="200" height="200">
                <circle
                  r="70"
                  cx="100"
                  cy="100"
                  fill="none"
                  stroke="#195570"
                  stroke-width="55"
                />
                <circle
                  r="70"
                  cx="100"
                  cy="100"
                  fill="none"
                  stroke="#d86307"
                  stroke-width="50"
                />
                <circle
                  r="70"
                  cx="100"
                  cy="100"
                  fill="none"
                  stroke="white"
                  stroke-width="50"
                  stroke-dasharray="20 90"
                  stroke-dashoffset="10"
                />
              </svg>
              <div
                className={styles.buttonWrapper}
                onClick={() => setRenderBoard((prev) => true)}
              >
                <div className={styles.buttonFormat}>
                  <Button
                    value="Show Board"
                    onClick={() => setRenderBoard((prev) => true)}
                  />
                </div>
              </div>
            </div>
          ) : null}
          {renderSituationRoom()}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
