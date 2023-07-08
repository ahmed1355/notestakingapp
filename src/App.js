import React from "react";
import Createnotes from "./createnotes";
import Viewchat from "./viewchat";
import styles from "./App.module.css";
import Inputchat from "./inputchat";
import { useState } from "react";

export default function App() {
  const [isGroupClicked, setGroupClicked] = useState(false);
  const handleGroupClick = () => {
    setGroupClicked(true);
  };
  return (
    <>
      <div className={styles.main}>
        {<Createnotes handleGroupClick={handleGroupClick} />}
        {!isGroupClicked && <Viewchat handleGroupClick={handleGroupClick} />}
        {isGroupClicked && <Inputchat />}
      </div>
    </>
  );
}