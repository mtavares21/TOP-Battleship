import React from "react";
import styles from "./board.module.css";
import Cell from "./Cell";

export default function Board({ board, setBoard, showBoats, attack, placeShip, player, itemType, setDock }) {
  // Extract the conditional from component rendering(return)
  const cellColor = (cell) => {
    let color = "white";
    if (cell.missed) {
      color = "#757575";
    } else if (cell.ship && !cell.wasHit && showBoats) {
      color = "#195570";
    } else if (cell.wasHit) {
      color = "#d86307";
    }
    return color;
  };
  return (
    <div className={styles.board}>
      {
      board
        .flatMap((cell) => cell)
        .map((cell) => (
          <Cell
            key={JSON.stringify(cell.coord)}
            setBoard={setBoard}
            player={player}
            placeShip={placeShip}
            attack={() => attack(cell.coord)}
            color={cellColor(cell)}
            coord={cell.coord}
            itemType={itemType}
            setDock={setDock}
          />
        ))
      }
    </div>
  );
}
