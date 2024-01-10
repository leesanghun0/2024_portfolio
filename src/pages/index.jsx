import React from "react";
import style from "../scss/style.scss";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Footer from "../components/Footer";



function Index(){

    return(
        <>
           <h1 className="blind">Sanghun's Portfolio</h1>
           <Header />
           <Main />
           <Intro />
           <About />
           <Experience />
           <Work />
           <Footer />
        </>
    )
}

export default Index;