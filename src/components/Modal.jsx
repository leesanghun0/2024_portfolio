import React,{useState} from "react";
import modaldata from "../service/modaldata";
import styles from "../scss/modal.module.scss";
import coffee_project from "../assets/images/coffee-react-01.jpg";

function Modal({closeModal},props) {

  const [isModal] =useState(modaldata);
  console.log(modaldata)

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-item-intro"]}>
          <div className={styles["modal-item-intro-title"]}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles["modal-item-intro-close"]} onClick={closeModal}>
            <i className="xi-close-min"></i>
          </div>
        </div>
        <div className={styles["modal-item-papges"]}>
          <p className={styles["modal-item-papges-summary"]}>
            2024.01 퍼블리싱 기여도 100%
          </p>
          <div className={styles["modal-item-papges-open"]}>visit website</div>
        </div>
        <div className={styles["pages-showbox"]}>
          <div className={styles["pages-showbox-inner"]}>
            <h3>개인 리액트프로젝트용 웹퍼블리싱 가이드입니다</h3>
            <img src={coffee_project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
