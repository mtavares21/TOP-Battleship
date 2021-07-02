import React from "react";
import { useEffect } from "react/cjs/react.development";
import styles from "../board.module.css";
import interact from 'interactjs'

function Board(props) {

  useEffect( () => {
    const dropZones = Array.from(document.querySelectorAll('.board_square__1743T'))
    dropZones.map( item => interact(item).dropzone({
      overlap: 0.5,
      ondrop: function (event) {
        event.style.backgroundColor = event.relatedTarget.style.backgroundColor
      }
  })
  .on('dropactivate',()=> console.log('on')).preventDefault()
  )}
  , [])

  return (
    <div className={styles.board}>
      {props.board
        .flatMap((cell) => cell)
        .map((cell) => {
          // Cell as a ship and no hit
          if (cell.ship != null && cell.wasHit === false) {
            return (
              // Current player or enemy board?
              <div
                className={props.showBoats ? styles.squareBlue : styles.square}
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
          } else if (cell.wasHit === true) {
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
