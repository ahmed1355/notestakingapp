// import React, { useState } from "react";
// import styles from "./crnotes.module.css";
// import PopupBox from "./PopupBox";

// import voilet from './assets/voilet.svg'
// import pink from './assets/pink.svg'
// import florescent from './assets/flor.png'
// import orange from './assets/orange.svg'
// import blue from './assets/blue.svg'
// import lblue from './assets/light_blue.svg'

// function Createnotes() {
//   const [showModal, setShowModal] = useState(false);
//   const [groupName, setGroupName] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedImage, setSelectedImage] = useState("");
//   const [createdGroups, setCreatedGroups] = useState([]);

//   const handleCreate = (groupName, selectedColor, selectedImage) => {
//     const newGroup = {
//       groupName,
//       selectedColor,
//       selectedImage,
//     };

//     setCreatedGroups([...createdGroups, newGroup]);
//     setShowModal(false);
//     setGroupName("");
//     setSelectedColor("");
//     setSelectedImage("");
//   };

//   return (
//     <div className={styles.left}>
//       <h1>Pocket Notes</h1>
//       <button onClick={() => setShowModal(true)}>
//         <p className={styles.crnote}>+ Create Notes group</p>
//       </button>

//       {showModal && (
//         <PopupBox
//           groupName={groupName}
//           selectedColor={selectedColor}
//           onClose={() => setShowModal(false)}
//           onSubmit={handleCreate}
//           setGroupName={setGroupName}
//           setSelectedColor={setSelectedColor}
//           setSelectedImage={setSelectedImage}
//         />
//       )}

//       {createdGroups.map((group, index) => (
//         <div className={styles["group-container"]} key={index}>
//           <div
//             className={`${styles["group-circle"]} ${styles[group.selectedColor.toLowerCase()]}`}
//           >
//             <span>{group.groupName.slice(0, 2).toUpperCase()}</span>
//             {group.selectedImage && <img src={group.selectedImage} alt="Selected" />}
//           </div>
//           <span>{group.groupName}</span>
//         </div>
//       ))}

//       {/* Hidden images */}
//       <img src={voilet} alt="Voilet" className={styles.hidden} />
//       <img src={pink} alt="Pink" className={styles.hidden} />
//       <img src={florescent} alt="Florescent" className={styles.hidden} />
//       <img src={orange} alt="Orange" className={styles.hidden} />
//       <img src={blue} alt="Blue" className={styles.hidden} />
//       <img src={lblue} alt="Light Blue" className={styles.hidden} />
//     </div>
//   );
// }

// export default Createnotes;


import React, { useState } from "react";
import styles from "./crnotes.module.css";
import PopupBox from "./PopupBox";

import voilet from './assets/voilet.svg'
import pink from './assets/pink.svg'
import florescent from './assets/flor.png'
import orange from './assets/orange.svg'
import blue from './assets/blue.svg'
import lblue from './assets/light_blue.svg'

function Createnotes() {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [createdGroups, setCreatedGroups] = useState([]);

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
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
          setGroupName={setGroupName}
          setSelectedColor={setSelectedColor}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}

      {createdGroups.map((group, index) => (
        <div className={styles["group-container"]} key={index}>
          <div
            className={`${styles["group-circle"]} ${styles[group.selectedColor.toLowerCase()]}`}
          >
            <span>{group.groupName.slice(0, 2).toUpperCase()}</span>
            {group.selectedImage && <img src={group.selectedImage} alt="Selected" />}
          </div>
          <span className={styles.grp_name}>{group.groupName}</span>
        </div>
      ))}

      {/* Hidden images */}
      <img src={voilet} alt="Voilet" className={styles.hidden} />
      <img src={pink} alt="Pink" className={styles.hidden} />
      <img src={florescent} alt="Florescent" className={styles.hidden} />
      <img src={orange} alt="Orange" className={styles.hidden} />
      <img src={blue} alt="Blue" className={styles.hidden} />
      <img src={lblue} alt="Light Blue" className={styles.hidden} />
    </div>
  );
}

export default Createnotes;
