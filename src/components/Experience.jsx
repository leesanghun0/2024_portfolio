import React, { useState, useRef, useEffect } from "react";
import Description from "./Description";
import data from "../service/data";
import main_experience from "../assets/images/main_experience.webp";
// import SectionTitle from "./Sectiontitle";
import styles from "../scss/experience.module.scss";
import useScrollHandler from '../hook/scrollevent';
import useImageScale from "../hook/imagesScale";


function Experience(){
    const [contentsBox] = useState(data);
    const contentRefs = useRef([]);

    const { isAction, titleRef } = useScrollHandler();
    const { isScale, imageRefs } = useImageScale();


    return (
    <section id="experience" className={styles["exp"]}>
        {/* <SectionTitle name="EXPERIENCE" /> */}
        <h2 ref={titleRef} className={`${styles["contents-title"]} ${isAction ? styles["active"] : styles[""]}`}>EXPERIENCE</h2>
        <div className={styles["exp-wrapper"]}>
            <div className={styles["section-container"]}>
                <div className={styles["section-container-images"]}>
                    <img ref={imageRefs} className={`${styles["about-images"]} ${isScale? styles["show"]: styles[""]}`} src={main_experience} alt="익스펄리언섹션 이미지" />
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