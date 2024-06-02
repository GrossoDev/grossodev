import React from "react";
import MagicCanvas from "../MagicCanvas/MagicCanvas";
import styles from "./Background.module.css";

function Background({ dark }) {
  return (<>
    <div className={styles.backdrop} style={{ zIndex: -10 }}></div>
    <div className={styles.backdropBlur} style={{ zIndex: -9 }}></div>
    <MagicCanvas zIndex={-8} fpsLimit={120} color={dark ? "#ffffff30" : '#00000050'} />
  </>);
}

export default Background;
