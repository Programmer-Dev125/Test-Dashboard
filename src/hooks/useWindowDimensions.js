import { useEffect, useState } from "react"

export default function useWindowDimensions(){
    const [dimensions, setDimensions] = useState({ innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 });

    useEffect(() => {

        const resizer = () => {
            setDimensions({
                innerWidth: window.innerWidth, 
                innerHeight: window.innerHeight,
                outerWidth: window.outerWidth,
                outerHeight: window.outerHeight
            });
        }

        resizer();

        window.addEventListener("resize", resizer);

        return () => {
            window.removeEventListener("resize", resizer);
        }

    }, []);

    return dimensions;
}