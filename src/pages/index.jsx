import React from "react";
import styles from "../scss/styles.scss";
import Header from "../components/Header";
import Main from "../components/Main";


function Index(){

    return(
        <>
            <h1 className="blind">Sanghun's Portfolio</h1>
           <Header />
           <Main />
        </>
    )
}

export default Index;