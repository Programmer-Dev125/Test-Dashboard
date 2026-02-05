import { useEffect, useState } from "react"

type Props = {
    ref: any
}

export default function useObserver({ref}: Props){
    
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        
        if(!ref.current) return;
        
        const resizer = new ResizeObserver((entries) => {
            const target = entries[0].target as HTMLElement;
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