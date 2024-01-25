import React from "react";
import styles from "../scss/props.module.scss";


function Description(props){

    return(<ul className={styles["description-list"]}>
        <li className={styles["description-list-date"]}>{props.contentsBox.date}</li>
        <li className={styles["description-list-title"]}>
            <strong>{props.contentsBox.someProps}</strong>{props.contentsBox.title}</li>
        <li className={styles["description-list-text"]}>{props.contentsBox.text}</li>
        {/* 조건부렌더링 */}
        {props.contentsBox.skill && props.contentsBox.skillDetail && (
            <li className={styles["description-list-skill"]}>
                <span>{props.contentsBox.skill}</span>{props.contentsBox.skillDetail}
            </li>
        )}
    </ul>)
}


export default Description;
