import React, { useState, useEffect } from "react";
import styles from "./crnotes.module.css";
import PopupBox from "./PopupBox";


function Createnotes() {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [createdGroups, setCreatedGroups] = useState([]);

  useEffect(() => {
    const storedGroups = localStorage.getItem("createdGroups");
    if (storedGroups) {
      setCreatedGroups(JSON.parse(storedGroups));
    }
  }, []);
  const handleCreate = (groupName, selectedColor, selectedImage) => {
    const newGroup = {
      groupName,
      selectedColor,
      selectedImage,
    };

   
    setCreatedGroups([...createdGroups, newGroup]);
    setShowModal(false);
    setGroupName("");
    setSelectedColor("");
    setSelectedImage("");
  };

  useEffect(() => {
    localStorage.setItem("createdGroups", JSON.stringify(createdGroups));
  }, [createdGroups]);

  // localStorage.clear()
  return (
    <div className={styles.left}>
      <h1>Pocket Notes</h1>
      <button onClick={() => setShowModal(true)}>
        <p className={styles.crnote}>+ Create Notes group</p>
      </button>

      {showModal && (
        <PopupBox
          groupName={groupName}
          selectedColor={selectedColor}
          selectedImage={selectedImage}
          onSubmit={handleCreate}
          setGroupName={setGroupName}
          setSelectedColor={setSelectedColor}
          setSelectedImage={setSelectedImage}
        />
      )}

      {createdGroups.map((group, index) => (
        <div className={styles.group_container} key={index}>
          <div className={`${styles["group-circle"]} `}>
            <span>{group.groupName.slice(0, 2).toUpperCase()}</span>
            {group.selectedImage && (
              <img src={group.selectedImage} alt="Selected" />
            )}
          </div>
          <span className={styles.grp_name}>{group.groupName}</span>
        </div>
      ))}

    
    </div>
  );
}

export default Createnotes;
