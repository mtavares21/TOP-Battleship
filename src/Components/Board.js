import React from "react";
import styles from "../board.module.css";

function Board(props) {
  return (
    <div className={styles.board}>
      {props.board
        .flatMap((cell) => cell)
        .map((cell) => {
          // Cell as a ship and no hit
          if (cell.ship != null && cell.hit === false) {
            return (
              // Current player or enemy board?
                <div
                  className={ props.showBoats ? styles.squareBlue : styles.square}
                  onClick={() => props.attack(cell.coord)}
                  data-coord={JSON.stringify(cell.coord)}
                ></div>
            );
            // Cell received missed attack
          } else if (cell.missed) {
            return (
              <div
                className={styles.squareGrey}
                data-coord={JSON.stringify(cell.coord)}
              ></div>
            );
            // Cell received hit
          } else if (cell.hit === true) {
            return (
              <div
                className={styles.squareRed}
                data-coord={JSON.stringify(cell.coord)}
              ></div>
            );
          } else {
            return (
              <div
                onClick={() => props.attack(cell.coord)}
                className={styles.square}
                data-coord={JSON.stringify(cell.coord)}
              ></div>
            );
          }
        })}
    </div>
  );
}

export default Board;
