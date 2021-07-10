import React from "react";
import anchorImage from "../images/anchor.png";
import styles from "./striped.module.css";

export default function Striped( {winEffect}) {
  const stripes = [0,1,2,3,4,5,6];
  const anchors = [0,1,2,3,4,5,6];
  return (
    <div className={ winEffect? styles.wrapperWin:styles.wrapper}>
      {anchors.map( (anchor, index) => 
      <img
        key={anchor}
        src={anchorImage}
        className={styles.anchor}
        alt="anchor"
        style={{left: (index*200)+'px'}}
      />
      )}
      {stripes.map((stripe) => (
        <div key={stripe}className={ winEffect ? styles.win : styles.stripe} />
      ))}
    </div>
  );
}
