import React from "react";
import styles from "../scss/props.module.scss";
import Description from "./Description";

function Container(props){
    return (<div className={styles["section-container"]}>
        <div className={styles["section-container-images"]}>
            <img src={props.images} alt="experience" />
        </div>
        <div className={styles["section-container-desc"]}>
        <Description
            date={props.date}
            someProps={props.someProps}
            title={props.title}
            text={props.text}
            skill={props.skill}
            skillDetail={props.skillDetail}
        />
        </div>
        
    </div>)
}

export default Container;