import React from "react";
import styles from "../scss/footer.module.scss";

function Footer(){
    return(<footer className={styles["footer"]}>
        <div className={styles["footer-wrapper"]}>
            <ul className={styles["footer-wrapper-link"]}>
                <li className={styles["footer-wrapper-link-item"]}>
                    <i className="xi-gmail"></i>
                </li>
                <li className={styles["footer-wrapper-link-item"]}>
                    <i className="xi-github"></i>
                </li>
                <li className={styles["footer-wrapper-link-item"]}>
                    <i className="xi-kakaotalk"></i>
                </li>
            </ul>   
            <div>
                <p>© Copyright 2024 Lee Sanghun.</p>
            </div>
        </div>
        
    </footer>);
}


export default Footer;