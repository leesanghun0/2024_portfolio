import React from "react";
import main_experience from "../assets/images/main_experience.webp";
import SectionTitle from "./Sectiontitle";
import styles from "../scss/experience.module.scss";
// import Container from "./Container";
import Description from "./Description";


function Experience(){
    return (
    <section id="experience" className={styles["exp"]}>
        <SectionTitle name="EXPERIENCE" />
        <div className={styles["exp-wrapper"]}>
            {/* <Container 
            images={main_experience}
            date="2023.07 - 2024."
            someProps="이클로저"
            title="퍼블리셔 @프런트엔드개발파트 / 프로"
            text="제플린 및 피그마로 디자인 시안을 받아 리액트 환경에서 회사 내의 전체적인 퍼블리싱을 담당했습니다. 퍼블리싱을 원활하게 작업할 수 있도록 보다 체계적이고 원활하게 작업할 수 있는 가이드 및 체계 등을 만들기 위해 노력했습니다."
            skill="[주요기술/업무툴]"
            skillDetail=" HTML5, CSS3, SCSS, Svelte, GIT " 
            /> */}
            <div className={styles["section-container"]}>
                <div className={styles["section-container-images"]}>
                    <img src={main_experience} alt="익스펄리언섹션 이미지" />
                </div>
                <div className={styles["section-container-desc"]}>
            
                    <Description
                    date="2023.07 - 2024."
                    someProps="이클로저"
                    title="퍼블리셔 @프런트엔드개발파트 / 프로"
                    text=""
                    skill="[주요기술/업무툴]"
                    skillDetail=" HTML5, CSS3, SCSS, Svelte, GIT, Firebase, AWS" />

                    <Description
                    date="2023.04 - 2023.07"
                    someProps="아이피샵"
                    title="퍼블리셔 @개발팀"
                    text="피그마로 디자인 시안을 받아 회사 사이트 유지보수 및 랜딩페이지 퍼블리싱을 담당했습니다. 그 외 업무로는 AWS에서 EC2에 배포 및 스냡샷 복원에 대한 작업을 했습니다. 또한 디자이너와의 협업으로 체계적이고 원활하게 작업할 수 있도록 노력했습니다."
                    skill="[주요기술/업무툴]"
                    skillDetail=" HTML5, CSS3, SCSS, MobaXterm, GIT, AWS" />
                </div>
            </div>
            {/* <Container
            images={main_about}/> */}
        </div>
    </section>
    );
}

export default Experience;