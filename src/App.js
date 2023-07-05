import React from "react";
import Crnotes from "./createnotes";
import Viewchat from "./viewchat";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={styles.main}>
        <Crnotes  />
        <Viewchat  />
      </div>
    </>
  );
}
