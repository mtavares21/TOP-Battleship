import React, { useState } from "react";
import styles from "./ship.module.css";
import { ItemTypes } from "./Constants";
import { useDrag, DragPreviewImage } from "react-dnd";
import shipImage from "../images/ship.png"

export default function Ship({ id, length, itemType }) {
  const [rotate, setRotate] = useState(0);
  const [isDragging, drag, preview] = useDrag(
    () => ({
      type: itemType === "P1" ? ItemTypes.P1SHIP : ItemTypes.P2SHIP,
      item: { length, rotate, id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [rotate, itemType, ItemTypes]
  );
  //Structure to map over
  let shipStructure = Array(Number(length));
  // Keys for React
  for (let i = 0; i <= length; i++) {
    shipStructure.push(i);
  }
  return (
    <div style={{ width: "100%" }}>
      <DragPreviewImage
        connect={preview}
        src={
          shipImage
        }
      />
      <div
        ref={preview}
        onDoubleClick={() => {
          setRotate((prev) => (prev === 0 ? 90 : 0));
        }}
        style={{
          width: length * 25 + "px",
          height: 25 + "px",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          transform: `rotate(${rotate}deg)`,
          margin: "5px",
        }}
      >
        <div
          ref={drag}
          style={{
            position: "absolute",
            zIndex: 1000,
            fontSize: "15px",
            marginLeft: "4px",
          }}
        >
          {" "}
          ⌖{" "}
        </div>
        {shipStructure.map((cell) => (
          <div key={cell} className={styles.shipCell}></div>
        ))}
      </div>
    </div>
  );
}
