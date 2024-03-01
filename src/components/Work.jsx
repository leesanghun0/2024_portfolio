import React, { useState} from "react";
import modaldata from "../service/modaldata";
import styles from "../scss/work.module.scss";
import GallayItem from "./Gallayitem";
import useScrollHandler from '../hook/scrollevent';


function Work(){

    const [gallayItems]=useState(modaldata);
    const { isAction, titleRef } = useScrollHandler();

    return (<section id="work" className={styles["work"]}>
    {/* <SectionTitle name="WORK" /> */}
    <h2 ref={titleRef} className={`${styles["contents-title"]} ${isAction ? styles["active"] : styles[""]}`}>WORK</h2>
        <div className={styles["work-wrapper"]}>
            <div className={styles["work-gallay-container"]}>
                {gallayItems.map((item,index)=>(
                    <GallayItem
                    gallayItemed={gallayItems}
                    key={index}
                    gallayItems={item}/>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Work;