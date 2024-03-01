import React,{useState} from "react";
import styles from "../scss/work.module.scss";
import Modal from "./Modal";

function GallayItem({gallayItems}){
    
    //console.log(gallayItems)
    
    let [isModal, setOpenModal] = useState(false);

    const openModal=()=>{
        isScrollRock();
        setOpenModal(true);
    }
    const closeModal=()=>{
        setOpenModal(false);
        isUnScrollRock();
    }
    const isScrollRock= ()=>{
        document.body.style.overflow = 'hidden';
    }
    const isUnScrollRock= ()=>{
        document.body.style.overflow = 'auto';
    }

    return (
    <div className={styles["work-gallay-container-item"]}>
        <button className={styles["container-item-button"]} onClick={openModal}>
            <img src={gallayItems.images}  alt={gallayItems.title} />
            <div className={styles["overlay"]}>
                <div className={styles["overlay-title"]}>{gallayItems.title}</div>
            </div>
        </button>
        {isModal && <Modal gallayItemed={gallayItems} closeModal={closeModal}/>}
    </div>
    )
}

export default GallayItem