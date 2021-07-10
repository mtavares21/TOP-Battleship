import React from "react";
import styles from "./messageboard.module.css";

function MessageBoard({message, winEffect}) {
  return (
    <div className={winEffect? styles.win: styles.wrapper}>
      <p className={styles.title}>{message}</p>
    </div>
  );
}

export default MessageBoard