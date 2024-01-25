import React, { useState, useRef } from "react";
import Description from "./Description";
import data from "../service/data";
import main_experience from "../assets/images/main_experience.webp";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/experience.module.scss";


function Experience(){
    const [contentsBox] = useState(data);
    const contentRefs = useRef([]);


    return (
    <section id="experience" className={styles["exp"]}>
        <SectionTitle name="EXPERIENCE" />
        <div className={styles["exp-wrapper"]}>
            <div className={styles["section-container"]}>
                <div className={styles["section-container-images"]}>
                    <img src={main_experience} alt="익스펄리언섹션 이미지" />
                </div>
                <div className={styles["section-container-desc"]}>
                    {contentsBox.map((content, index)=>(
                        <Description key={index} contentsBox={content}
                        ref={(el) => (contentRefs.current[index] = el)} />
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}

export default Experience;