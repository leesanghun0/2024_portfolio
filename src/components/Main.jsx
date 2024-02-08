import React, {useRef} from "react";
import styles from "../scss/main.module.scss";
import main_visual from "../assets/images/main_visual.webp";


function Main(){

    const linksRef= useRef(null);
    console.log(linksRef)
    

   function linksClickHandler(event){
        event.preventDefault();

        if(linksRef.current){
            const offetTop=linksRef.current.offsetTop;
            const scrolltarget = linksRef.current.getAttribute("href");

            window.scrollTo({
                top: offetTop,
                behavior: "smooth",
            })
        }
    }

    return(<section id="main" className={styles["main"]}>
        <div className={styles["main-wrapper"]}>
            <ul className={styles["main-wrapper-title"]}>
                <li>LSH'S</li>
                <li>portfolio</li>
            </ul>
            <div className={styles["main-wrapper-images"]}>
                <img src={main_visual} alt="메인페이지 표지" />
            </div>
        </div>
        <a ref={linksRef} onClick={linksClickHandler} href="#intro" className={styles["scroll-cursor"]}>
            <div className={styles["cursor-ani"]}>
                    <span className={styles["cursor-ani-outline"]}>
                        <span className={styles["cursor-ani-outline-point"]}></span>
                    </span>
            </div>
            <p>scroll me</p>
        </a>
        
        
    </section>);
}

export default Main;