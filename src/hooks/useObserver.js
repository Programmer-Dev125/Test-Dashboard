import { useEffect, useState } from "react"

export default function useObserver({ref}){
    
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        
        if(!ref.current) return;
        
        const resizer = new ResizeObserver((entries) => {
            const target = entries[0].target;
            setDimensions({
                width: target?.offsetWidth || 0,
                height: target?.offsetHeight || 0
            })
        })

        resizer.observe(ref.current);

        return () => {
            resizer.disconnect();
        }
    }, []);

    return dimensions;
}