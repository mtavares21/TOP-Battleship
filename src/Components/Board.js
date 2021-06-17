import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styles from "../board.module.css";
import Gameboard from '../gameboard.factory';
import * as _ from "lodash";

function Board(props) {
  // Get a initial state board
  const initialBoard = _.cloneDeep(props.board)
  const [ board, setBoard ] = useState(initialBoard.getBoard)

  const receiveAttack = (coord) =>{
    props.board.receiveAttack(coord)
    const newBoard = _.cloneDeep(props.board.getBoard)
    setBoard( prev => prev = newBoard)
  }
  
  return (
    <div className={styles.board}>
      {board
        .flatMap((cell) => cell)
        .map((cell) => {
          if ( cell.ship!=null && props.showBoats) {
            return (
              <div className={styles.squareBlue} ></div>
            );
          } else if (cell.missed) {
            return (
              <div className={styles.squareGrey}></div>
            );
          } else {
            return (
              <div onClick= {() => receiveAttack(cell.coord)} className={styles.square}></div>
            );
          }
        })}
    </div>
  );
}

export default Board;
