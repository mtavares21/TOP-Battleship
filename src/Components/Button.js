import React from "react";
import styles from "./button.module.css"

export default function Button({ value, onClick }) {
  return <input className={styles.button}type="button" value={value} onClick={onClick}/>
}
