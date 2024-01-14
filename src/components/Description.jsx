import React from "react";
import styles from "../scss/props.module.scss";


function Description(props){

    return(<ul className={styles["description-list"]}>
        <li className={styles["description-list-date"]}>{props.date}</li>
        <li className={styles["description-list-title"]}>
            <strong>{props.someProps}</strong>{props.title}</li>
        <li className={styles["description-list-text"]}>{props.text}</li>
        {/* 조건부렌더링 */}
        {props.skill && props.skillDetail && (
            <li className={styles["description-list-skill"]}>
                <span>{props.skill}</span>{props.skillDetail}
            </li>
        )}
    </ul>)
}


export default Description;
