import React, { useState } from "react";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/work.module.scss";
import icon_interaction_coffee from "../assets/images/icon_interaction_coffee.webp";
import Modal from "./Modal";


function Work(){

    let [isModal, setOpenModal] = useState(false);

    const openModal=()=>{
        isScrollRock();
        setOpenModal(true);
    }
    const closeModal=()=>{
        setOpenModal(false);
        isUnScrollRock();
    }

    const isScrollRock= ()=>{
        document.body.style.backgroundColor = "gray";
        document.body.style.overflow = 'hidden';
    }
    const isUnScrollRock= ()=>{
        document.body.style.backgroundColor = "#fff";
        document.body.style.overflow = 'auto';
    }

    return (<section id="work" className={styles["work"]}>
    <SectionTitle name="WORK" />
        <div className={styles["work-wrapper"]}>
            <div className={styles["work-gallay-container"]}>
            
                <div className={styles["work-gallay-container-item"]}>
                    <button className={styles["container-item-button"]} onClick={openModal}>
                        <img src={icon_interaction_coffee} alt="커피" />
                    </button>
                    {isModal && <Modal closeModal={closeModal}/>}
                </div>
                <div className={styles["work-gallay-container-item"]}>
                    <button className={styles["container-item-button"]} onClick={openModal}>
                        <img src={icon_interaction_coffee} alt="커피" />
                    </button>
                </div>
                <div className={styles["work-gallay-container-item"]}>
                    <button className={styles["container-item-button"]} onClick={openModal}>
                        <img src={icon_interaction_coffee} alt="커피" />
                    </button>
                </div>
                <div className={styles["work-gallay-container-item"]}>
                    <button className={styles["container-item-button"]} onClick={openModal}>
                        <img src={icon_interaction_coffee} alt="커피" />
                    </button>
                </div>
               
            </div>
        </div>
    </section>
    )
}

export default Work;