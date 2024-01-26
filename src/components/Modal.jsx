import React from "react";
import styles from "../scss/modal.module.scss";

function Modal({closeModal}) {

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-item-intro"]}>
          <div className={styles["modal-item-intro-title"]}>
            <h2>카카오뱅크 클론 코딩</h2>
          </div>
          <div className={styles["modal-item-intro-close"]} onClick={closeModal}>
            <i className="xi-close-min"></i>
          </div>
        </div>
        <div className={styles["modal-item-papges"]}>
          <div className={styles["modal-item-papges"]}>
            2024.01 퍼블리싱 기여도 100%
          </div>
          <div className={styles["modal-item-papges-open"]}>visit website</div>
        </div>
        <div className={styles["pages-showbox"]}>
          <div className={styles["pages-showbox-inner"]}>
            <h3>개인 리액트프로젝트용 웹퍼블리싱 가이드입니다</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
