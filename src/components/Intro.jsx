import React from "react";
import styles from "../scss/intro.module.scss";



function Intro(){
    return(
        <section id="intro" className={styles["intro"]}>
            <div className={styles["intro-wrapper"]}>
                <ul className={styles["intro-wrapper-list"]}>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>01</h2>
                        <strong>SKILLS</strong>
                        <ul className={styles["intro-list-item-skill"]}>
                            <li>-HTML, CSS(SCSS), React,<span>Javascript</span> </li>
                            <li>-photoshop, illustrator</li>
                            <li>-git, aws ec2, firebase</li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>02</h2>
                        <strong>EXPERIENCE</strong>
                        <ul>
                            <li>-이클로저(퍼블리셔@개발팀)</li>
                            <li>-아이피샵(퍼블리셔@개발팀)</li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>03</h2>
                        <strong>LICENSE</strong>
                        <ul>
                            <li></li>
                        </ul>
                    </li>
                    <li className={styles["intro-wrapper-list-item"]}>
                        <h2 className={styles["intro-wrapper-list-item-num"]}>04</h2>
                        <strong>EDUCATION</strong>
                        <ul>
                            <li>-대우직업능력개발원<br/><span>(프론트앤드개발자 양성과정 교육 수료)</span></li>
                            <li>-삼육보건대학(사회복지과)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Intro;