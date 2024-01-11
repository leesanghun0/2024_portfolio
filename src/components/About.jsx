import React from "react";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/about.module.scss";
import main_about from "../assets/images/main_about.webp"


function About(){
    console.log()
    return (<section className={styles["about"]}>
        <SectionTitle name="ABOUT" />
        <div className={styles["about-wrapper"]}>
            <div className={styles["section-container"]}>
                <div className={styles["section-container-images"]}>
                    <img src={main_about} alt="어바웃섹션 이미지" />
                </div>
                <div className={styles["section-container-desc"]}>
                    <ul>
                        <li>
                            <strong>이상훈</strong> ㅣ1993. 06. 20ㅣ마크업 개발자</li>
                        <li>
                           <strong>"화려한 꽃보다 튼튼한 줄기가 되자."</strong>이것이 오래도록 지켜가야 한다고 생각했던 저의 신조입니다. 외적인 아름다움도 중요하지만, 내적인 튼튼함이 없다면 무의미하다고 생각합니다. 웹표준, 웹접근성에 관심이 있으며 현재에도 지속적으로 학습을 병행하면서 앞으로 나아가는 중입니다. 깃허브 블로그를 운영하며 공부한 것은 꾸준히 업로드하고 있습니다.
                        </li>
                        <li>
                            <span>skills</span>HTML, CSS, SCSS, media query, React, storybook, git, gulp, photoshop, illustrator
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <span>2022.06.07 - 2022.09</span>청년반응형 프론트앤드 개발자양성과정 교육 참여
                        </li>
                        <li>
                            <span>2012.03 - 2016.02</span>삼육보건대학
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>)
}

export default About;