import { useEffect, useRef, useState } from "react";
import useObserver from "@hooks/useObserver";

export default function RippleButton({color="var(--rp)", yPlus=0, xPlus=0, onClick, radii=0, className, children, style, parentClassName}){
    const ref = useRef(null);
    const {width, height} = useObserver({ref});
    const [animate, setAnimate] = useState(false);

    const handleStart = () => {
        setAnimate(true);
        setTimeout(() => {
            onClick?.();
            setAnimate(false);
        }, 200);
    }

    useEffect(() => {
        console.log(`width: ${width}, height: ${height}`);
    }, [width,height]);

    return(
        <div className={`relative ${parentClassName || ""}`}>
            <div  
                className={`absolute transition-opacity duration-200 ease-in pointer-events-none ${animate ? "opacity-100" : "opacity-0"}`}
                style={{
                    backgroundColor: color,
                    borderRadius: radii,
                    minWidth: (width + xPlus) || 0,
                    minHeight: (height + yPlus) || 0,
                    top: yPlus !== 0 ? -(yPlus / 2) : 0,
                    left: xPlus !== 0 ? -(xPlus / 2) : 0,
                    zIndex: 1
                }}
            />
            <div 
                className={`${className || ""} cursor-pointer`} 
                style={{...style}}
                ref={ref} 
                onClick={(e) => {
                    e.stopPropagation();
                    if(onClick){
                        handleStart();
                    }
                }}
            >
                {children}
            </div>
        </div>
    )


}