import React from "react";
import styles from "../scss/modal.module.scss";

function Modal({gallayItemed , closeModal}) {
  
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-item-intro"]}>
          <div className={styles["modal-item-intro-title"]}>
            <h2>{gallayItemed.title}</h2>
          </div>
          <div className={styles["modal-item-intro-close"]} onClick={closeModal}>
            <i className="xi-close-min"></i>
          </div>
        </div>
        <div className={styles["modal-item-papges"]}>
          <p className={styles["modal-item-papges-summary"]}>
            {gallayItemed.summary}
          </p>
          <div className={styles["modal-item-papges-open"]}>visit website</div>
        </div>
        <div className={styles["pages-showbox"]}>
          <div className={styles["pages-showbox-inner"]}>
            <h3>{gallayItemed.describe}</h3>
            <img src={gallayItemed.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
