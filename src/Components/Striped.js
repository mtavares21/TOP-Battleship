import React from "react";
import anchorImage from "../images/anchor.png";
import styles from "./striped.module.css";

export default function Striped({ winEffect }) {
  const stripes = [0, 1, 2, 3, 4, 5, 6];
  const numberOfAnchors = parseInt(window.innerWidth / 110);
  const anchors = Array(numberOfAnchors).fill(0);
  return (
    <div className={winEffect ? styles.wrapperWin : styles.wrapper}>
      <div style={{position: "absolute", height:"15vw", width:"100%", overflow:"hidden"}}>
        {anchors.map((anchor, index) => (
          <img
            key={index}
            src={anchorImage}
            className={styles.anchor}
            alt="anchor"
            style={{ left: index * 200 + "px" }}
          />
        ))}
      </div>
      {stripes.map((stripe) => (
        <div key={stripe} className={winEffect ? styles.win : styles.stripe} />
      ))}
    </div>
  );
}
