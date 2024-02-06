import React from "react";
import styles from "../scss/props.module.scss"



function SectionTitle(props){

    return (
    <h2 id="contents-title" className={styles["contents-title"]}>{props.name}</h2>
    )

}

export default SectionTitle;