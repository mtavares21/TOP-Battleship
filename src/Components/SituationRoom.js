import React from "react";
import Board from "./Board";
import Dock from "./Dock";
import Ship from "./Ship";
import styles from "./situationRoom.module.css"

export default function SituationRoom({
  setBoard,
  player,
  playerBoard,
  enemyBoard,
  attack,
  itemType,
  showRoom,
  shipsOnDock,
  setShipsOnDock,
  useGameFlow,
  turn
}) {
  // Start the game when dock is empty, in multiplayer mode it prompts player two to place is boats
  const areShipsReady = !!!shipsOnDock.length &&turn
  
  useGameFlow(areShipsReady)
//  useEffect(()=> !!shipsOnDock.length&&gameMode==='multiplayer'? null: setRenderBoard((prev)=>false),[setRenderBoard, shipsOnDock])
  
  return (
    <div className={styles.wrapper} style={{display:showRoom?"flex":"none"}}>
      {!!shipsOnDock.length ? (
        <Dock>
          {shipsOnDock.map((ship) => (
            <Ship
              key={ship.key}
              id={ship.key}
              length={ship.length}
              itemType={itemType}
            />
          ))}
        </Dock>
      ) : null}
      <div>
      <h1 style={{color:'white', textAlign:'center'}}>you</h1>
      <Board
        board={playerBoard}
        setBoard={setBoard}
        showBoats
        player={player}
        itemType={itemType}
        setDock={setShipsOnDock}
        attack={()=>{}}
      />
      </div>
      {!!shipsOnDock.length ? null : (
        <div> 
        <h1 style={{color:'white',textAlign:'center'}}>enemy</h1>
        <Board board={enemyBoard} attack={attack} />
        </div>
      )}
    </div>
  );
}
