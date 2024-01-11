import React from "react";
import main_experience from "../assets/images/main_experience.webp";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/experience.module.scss";


function Container(props){
    return (<div className={styles["section-container"]}>
        <div className={styles["section-container-images"]}>
            <img src={props.images} alt="experience" />
        </div>
        <div className={styles["section-container-desc"]}>
            <ul className={styles["section-container-desc-list"]}>
                <li className={styles["section-container-desc-item"]}>
                    {props.date}
                </li>
                <li>
                    {props.history}
                </li>
                <li>
                    {props.skill}
                </li>
            </ul>
        </div>
    </div>)
}

function Experience(){
    return (
    <section className={styles["exp"]}>
        <SectionTitle name="EXPERIENCE" />
        <div className={styles["exp-wrapper"]}>
            <Container
            images={main_experience}
            date="1993. 06. 20"
            history="IPXHOP"
            skill="html, css, javascript, aws"/>
        </div>
    </section>
    );
}

export default Experience;