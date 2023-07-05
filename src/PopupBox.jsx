import React from "react";
import PropTypes from "prop-types";
import styles from "./PopupBox.module.css";
import voilet from './assets/voilet.svg'
import pink from './assets/pink.svg'
import florescent from './assets/flor.png'
import orange from './assets/orange.svg'
import blue from './assets/blue.svg'
import lblue from './assets/light_blue.svg'

const PopupBox = ({ groupName, selectedColor, onClose, onSubmit, setGroupName, setSelectedColor, setSelectedImage, selectedImage }) => {

  const handleCreate = () => {
    onSubmit(groupName, selectedColor, selectedImage);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.modal}>
        <h2 className={styles.modalHeading}>Create New Notes Group</h2>
        <div className={styles.lab}>
          <label htmlFor="group-name">Group Name:</label>
          <input
            id="group-name"
            type="text"
            placeholder="Enter your group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <br />


          <div className={styles.col_wrapper}>
            <label htmlFor="group-name" className={styles.lab_color}>Choose image:</label>
            <div className={styles.diff_color}>
              <img src={voilet} className={styles.col} onClick={() => handleImageClick(voilet)} />
              <img src={pink} className={styles.col} onClick={() => handleImageClick(pink)} />
              <img src={florescent} className={styles.col} onClick={() => handleImageClick(florescent)} />
              <img src={orange} className={styles.col} onClick={() => handleImageClick(orange)} />
              <img src={blue} className={styles.col} onClick={() => handleImageClick(blue)} />
              <img src={lblue} className={styles.col} onClick={() => handleImageClick(lblue)} />
            </div>
          </div>

        </div>

        <button className={styles.createButton} onClick={handleCreate}>
          Create
        </button>

      </div>
    </div>
  );
};

PopupBox.propTypes = {
  groupName: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setGroupName: PropTypes.func.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  setSelectedImage: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default PopupBox;
