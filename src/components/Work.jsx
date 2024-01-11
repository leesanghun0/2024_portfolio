import React from "react";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/work.module.scss";
import icon_interaction_coffee from "../assets/images/icon_interaction_coffee.webp";
import icon_candybirds from "../assets/images/icon_candybirds.webp";


function Work(){
    return (
    <>
    <section className={styles["work"]}>
    <SectionTitle name="WORK" />
        <div className={styles["work-wrapper"]}>
            <div className={styles["work-gallay-container"]}>
                <div className={styles["work-gallay-container-item"]}>
                    <img src={icon_interaction_coffee} alt="커피" />
                </div>
                <div className={styles["work-gallay-container-item"]}>
                    <img src={icon_candybirds} alt="커피" />
                </div>
                <div className={styles["work-gallay-container-item"]}>2023포트폴리오</div>
                <div className={styles["work-gallay-container-item"]}>todolisit</div>
                {/* <div className={styles["work-gallay-container-item"]}>5</div>
                <div className={styles["work-gallay-container-item"]}>6</div>
                <div className={styles["work-gallay-container-item"]}>7</div>
                <div className={styles["work-gallay-container-item"]}>8</div> */}
            </div>
        </div>
    </section>
    </>)
}

export default Work;