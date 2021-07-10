import React from "react";
import styles from "./header.module.css";
import MessageBoard from "./MessageBoard";
import Button from "./Button";

export default function Header({
  gameState,
  handleSinglePlayer,
  handleMultiplayer,
  handleNewGame,
  winEffect,
}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}> BattleShip </h1>
      <div className={styles.flowControlWrapper}>
        <MessageBoard message={gameState} winEffect={winEffect}/>
        {gameState === "Game mode" ? (
          <div className={styles.buttonWrapper}>
            <Button value="Single Player" onClick={handleSinglePlayer} />
            <Button value="Multiplayer" onClick={handleMultiplayer} />
          </div>
        ) : (
          <div className={styles.buttonWrapper}>
            <Button value={"New Game"} onClick={handleNewGame} />
          </div>
        )}
      </div>
    </div>
  );
}
