import { useState, useEffect, useRef } from 'react';

const useImageScale=()=>{
    const [isScale, setScale]= useState(false);
    const imageRefs = useRef(null);
    
    useEffect(()=>{
        const imgScaleHandler=()=>{
            if(imageRefs.current){
                const imgY = imageRefs.current.getBoundingClientRect().top;
                setScale(imgY < window.innerHeight)
            }
        }

        window.addEventListener('scroll', imgScaleHandler);

        return ()=>window.addEventListener('scroll', imgScaleHandler);
    },[]);

    return { isScale, imageRefs };
}


export default useImageScale;