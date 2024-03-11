import React, { useState, useEffect, useRef } from "react";
import styles from "../scss/about.module.scss";
import Description from "./Description";
import data from "../service/aboutdata";
import main_about from "../assets/images/main_about.png";
import useScrollHandler from '../hook/scrollevent';
import useImageScale from "../hook/imagesScale";


function About(){

    const [contentsBox] = useState(data);
    const contentRefs = useRef([]);
    const { isAction, titleRef } = useScrollHandler();
    const { isScale, imageRefs } = useImageScale();

    return (<section id="about" className={styles["about"]}>
        <h2 ref={titleRef} className={`${styles["contents-title"]} ${isAction ? styles["active"] : styles[""]}`}>ABOUT</h2>
        <div className={styles["about-wrapper"]}>
            <div className={styles["section-container"]}>
                <div className={styles["section-container-images"]}>
                    <img ref={imageRefs} className={`${styles["about-images"]} ${isScale? styles["show"]: styles[""]}`} src={main_about} alt="어바웃섹션 이미지" />
                </div>
                <div className={styles["section-container-desc"]}>
                    <ul className={styles["about-desc-list"]}>
                        <li className={styles["about-desc-list-name"]}>
                            <strong>이상훈</strong> ㅣ1993. 06. 20ㅣ마크업 개발자</li>
                        <li className={styles["about-desc-list-text"]}>
                           <strong>"화려한 꽃보다 튼튼한 줄기가 되자." </strong>이것이 오래도록 지켜가야 한다고 생각했던 저의 신조입니다. 외적인 아름다움도 중요하지만, 내적인 튼튼함이 없다면 무의미하다고 생각합니다. 웹표준, 웹접근성에 관심이 있으며 현재에도 지속적으로 학습을 병행하면서 앞으로 나아가는 중입니다. 개발 관련 책을 읽거나 스터디모임에 참여하며 꾸준히 공부를 하고 있습니다. 
                        </li>
                        <li className={styles["about-desc-list-skill"]}>
                            <span>skills</span>HTML, CSS, SCSS, media query, React, oracle, git, photoshop, illustrator
                        </li>
                    </ul>
                    {contentsBox.map((content, index)=>(
                        <Description key={index} contentsBox={content}
                        ref={(el) => (contentRefs.current[index] = el)} />
                    ))}
                </div>
            </div>
        </div>
    </section>)
}

export default About;