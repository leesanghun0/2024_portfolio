import React from "react";
import styles from "../scss/main.module.scss";
import main_visual from "../assets/images/main_visual.webp"


function Main(){
    return(<section className={styles["main"]}>
        <div className={styles["main-wrapper"]}>
            <ul className={styles["main-wrapper-title"]}>
                <li>SHLee</li>
                <li>포트폴리오</li>
            </ul>
            <div className={styles["main-wrapper-images"]}>
                <img src={main_visual} alt="" />
            </div>
        </div>
    </section>);
}

export default Main;