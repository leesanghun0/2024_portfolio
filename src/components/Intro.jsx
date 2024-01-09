import React from "react";
import styles from "../scss/intro.module.scss";



function Intro(){
    return(
        <section className={styles["intro"]}>
            <div className={styles["intro-wrapper"]}>
                <ul className={styles["intro-wrapper-list"]}>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>01</h2>
                        <strong>SKILLS</strong>
                        <ul>
                            <li>-HTML, CSS(SCSS), JAVASCRIPT, REACT</li>
                            <li>-photoshop, illustrator</li>
                            <li>-git, aws ec2, firebase</li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>02</h2>
                        <strong>EXPERIENCE</strong>
                        <ul>
                            <li>-HTML, CSS(SCSS), JAVASCRIPT, REACT</li>
                            <li>-photoshop, illustrator</li>
                            <li>-git, aws ec2, firebase</li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>03</h2>
                        <strong>LICENSE</strong>
                        <ul>
                            <li>-HTML, CSS(SCSS), JAVASCRIPT, REACT</li>
                            <li>-photoshop, illustrator</li>
                            <li>-git, aws ec2, firebase</li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>04</h2>
                        <strong>EDUCATION</strong>
                        <ul>
                            <li>-HTML, CSS(SCSS), JAVASCRIPT, REACT</li>
                            <li>-photoshop, illustrator</li>
                            <li>-git, aws ec2, firebase</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Intro;