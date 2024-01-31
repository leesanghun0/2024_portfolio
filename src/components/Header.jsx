import React from "react";
import styles from "../scss/headerLayout.module.scss";

function Header(){
    return (<header className={styles["header"]}>
        <div className={styles["header-wrapper"]}>
            <div className={styles["header-wrapper-logo"]}>
                <h2>LSH'S</h2>
            </div>
            {/* pc-NAV */}
            <ul className={styles["header-wrapper-nav"]}>
               <li className={styles["header-wrapper-nav-list"]}>
                <a href="#main"><span>01</span>Main</a></li> 
               <li className={styles["header-wrapper-nav-list"]}><a href="#about"><span>02</span>About</a></li> 
               <li className={styles["header-wrapper-nav-list"]}><a href="#experience"><span>03</span>Experience</a></li> 
               <li className={styles["header-wrapper-nav-list"]}><a href="#work"><span>04</span>Work</a></li> 
            </ul>

            <div className={styles["header-wrapper-m"]}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            
        </div>
    </header>);
}

export default Header;