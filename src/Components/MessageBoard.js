import React from "react";
import styles from "../messageBoard.module.css";

function MessageBoard(props) {
  return (
    <div className={styles.wrapper}>
      <h1 >{props.message}</h1>
    </div>
  );
}

export default MessageBoard