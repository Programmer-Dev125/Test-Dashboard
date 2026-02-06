import useObserver from "@/hooks/useObserver";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Card({className, children, onDimensions}){
    const ref = useRef(null);
    const dimensions = useObserver({ref});

    useEffect(() => {
        onDimensions?.(dimensions);
    }, [dimensions]);

    return(
        <div ref={ref} className={`${className || ""} bg-white rounded-[10px] border border-[var(--card-bd)] h-auto`}>
            {children}
        </div>
    )
}