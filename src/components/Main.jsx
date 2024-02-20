import React, {useEffect, useRef, useState} from "react";
import styles from "../scss/main.module.scss";
import main_visual from "../assets/images/main_visual.webp";


function Main(){

    const linksRef= useRef(null);

    const [isMain,setMain]= useState()
    const slideTitle =useRef([])
    

    useEffect(()=>{
        window.onload =pagesLoad;

        function pagesLoad(index){
            if(slideTitle.current[0]){
             setTimeout(()=>{
                console.log(0)
             },1000)
            }
            if(slideTitle.current[1]){
                setTimeout(()=>{
                   console.log(1)
                },2000)
            }
         }
    },[])




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
                <li ref={el=>slideTitle.current[0]=el}>LSH'S</li>
                <li ref={el=>slideTitle.current[1]=el}>portfolio</li>
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