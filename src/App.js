import React, {useState} from "react";
import Board from "./Components/Board";
import Gameboard from './gameboard.factory'
import styles from './app.module.css'
import shipFactory from "./ship.factory";
import Player from './player.factory'
function App(props) {
  // Define players 
  const player = Player(Gameboard())
  const computer = Player(Gameboard())
  // Place boards as state
  const [playerBoard, setPlayerBoard] = useState(player.board)
  const [computerBoard, setComputerBoard] = useState(computer.board)
  // Carrier
  computer.board.placeShip({lin:[0,0,0,0,0],col:[0,1,2,3,4]},shipFactory(5))
  // Battleship
  computer.board.placeShip({lin:[4,4,4,4],col:[5,6,7,8]},shipFactory(4))
  computer.board.placeShip({lin:[2,3,4,5],col:[3,3,3,3]},shipFactory(4))
  // Destroyer
  computer.board.placeShip({lin:[9,9,9],col:[1,2,3]},shipFactory(3))
  computer.board.placeShip({lin:[8,7,6],col:[0,0,0]},shipFactory(3))
  computer.board.placeShip({lin:[9,8,7],col:[9,9,9]},shipFactory(3))
  // Submarine
  computer.board.placeShip({lin:[1,2,3],col:[9,9,9]},shipFactory(3))
  computer.board.placeShip({lin:[1,1,1],col:[4,5,6]},shipFactory(3))
  computer.board.placeShip({lin:[0,0,0],col:[7,8,9]},shipFactory(3))
  computer.board.placeShip({lin:[7,7,7],col:[2,3,4]},shipFactory(3))
  //Patrol boat
  computer.board.placeShip({lin:[5,5],col:[6,7]},shipFactory(2))
  computer.board.placeShip({lin:[2,2],col:[0,1]},shipFactory(2))
  computer.board.placeShip({lin:[7,7],col:[6,7]},shipFactory(2))
  computer.board.placeShip({lin:[9,9],col:[9,9]},shipFactory(2))
  computer.board.placeShip({lin:[9,9],col:[6,7]},shipFactory(2))
  // Carrier
  player.board.placeShip({lin:[0,0,0,0,0],col:[0,1,2,3,4]},shipFactory(5))
  // Battleship
  player.board.placeShip({lin:[4,4,4,4],col:[5,6,7,8]},shipFactory(4))
  player.board.placeShip({lin:[2,3,4,5],col:[3,3,3,3]},shipFactory(4))
  // Destroyer
  player.board.placeShip({lin:[9,9,9],col:[1,2,3]},shipFactory(3))
  player.board.placeShip({lin:[8,7,6],col:[0,0,0]},shipFactory(3))
  player.board.placeShip({lin:[9,8,7],col:[9,9,9]},shipFactory(3))
  // Submarine
  player.board.placeShip({lin:[1,2,3],col:[9,9,9]},shipFactory(3))
  player.board.placeShip({lin:[1,1,1],col:[4,5,6]},shipFactory(3))
  player.board.placeShip({lin:[0,0,0],col:[7,8,9]},shipFactory(3))
  player.board.placeShip({lin:[7,7,7],col:[2,3,4]},shipFactory(3))
  //Patrol boat
  player.board.placeShip({lin:[5,5],col:[6,7]},shipFactory(2))
  player.board.placeShip({lin:[2,2],col:[0,1]},shipFactory(2))
  player.board.placeShip({lin:[7,7],col:[6,7]},shipFactory(2))
  player.board.placeShip({lin:[9,9],col:[9,9]},shipFactory(2))
  player.board.placeShip({lin:[9,9],col:[6,7]},shipFactory(2))
 
  return <div className={styles.gameWrapper}>
    <div className={styles.header}>
      <h1 className={styles.title}> BattleShip </h1>
    </div>
    <div className={styles.boardWrapper}>
      <Board board={playerBoard} showBoats={true}/>
      <Board board={computerBoard} showBoats={false} />
    </div>
  </div>;
}

export default App