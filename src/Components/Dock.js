import React from "react";
import styles from "../dock.module.css";
import interact from 'interactjs'
function Dock(props) {

function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", '#4169e1');
  ev.dataTransfer.dropEffect = "move";
  let elemBelow = document.elementFromPoint(ev.clientX, ev.clientY)
  console.log(elemBelow)
}
  const uiShip = (id, size) => {
    const ship = Array(size).fill(null);
    const position = { x: 0, y: 0 }
    const ships = interact(`#${id}`).draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
  })
    return (
      <div id={id} className= {styles.shipWrapper}width={26 * size + size + "px"} onDragStart='false'>
        {ship.map((item) => {
          return <div className={styles.squareBlue}></div>;
        })}
      </div>
    );
  };

  return <div className={styles.dock}>{uiShip("carrier", 5)}</div>;
}

export default Dock;
