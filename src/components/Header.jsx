import React from "react";
import styles from "../scss/headerLayout.module.scss";

function Header(){
    return (<header className={styles["header"]}>
        <div className={styles["header-wrapper"]}>
            <div className={styles["header-wrapper-logo"]}>
                <h2>Shoon</h2>
            </div>
            <ul className={styles["header-wrapper-nav"]}>
               <li className={styles["header-wrapper-nav-list"]}>
                <span>01</span>Main</li> 
               <li className={styles["header-wrapper-nav-list"]}><span>02</span>About</li> 
               <li className={styles["header-wrapper-nav-list"]}><span>03</span>Experience</li> 
               <li className={styles["header-wrapper-nav-list"]}><span>04</span>Work</li> 
            </ul>
        </div>
    </header>);
}

export default Header;