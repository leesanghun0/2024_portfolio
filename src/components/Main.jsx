import React from "react";
import styles from "../scss/main.module.scss";
import main_visual from "../assets/images/main_visual.webp"


function Main(){
    return(<section className={styles["main"]}>
        <div className={styles["main-wrapper"]}>
            <ul className={styles["main-wrapper-title"]}>
                <li>이상훈</li>
                <li>포트폴리오</li>
            </ul>
            <div className={styles["main-wrapper-images"]}>
                <img src={main_visual} alt="메인페이지 표지" />
            </div>
        </div>
        <div className={styles["scroll-cursor"]}>
            <div className={styles["cursor-ani"]}>
                    <span className={styles["cursor-ani-outline"]}>
                        <span className={styles["cursor-ani-outline-point"]}></span>
                    </span>
            </div>
            <p>scroll me</p>
        </div>
        
        
    </section>);
}

export default Main;