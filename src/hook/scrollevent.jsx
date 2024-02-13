import { useState, useEffect, useRef } from 'react';

const useScrollHandler = () => {
    const [isAction, setAction] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (titleRef.current) {
                const elementTop = titleRef.current.getBoundingClientRect().top;
                // const elementVisibleOffset = 180;
                setAction(elementTop < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { isAction, titleRef };
};

export default useScrollHandler;



