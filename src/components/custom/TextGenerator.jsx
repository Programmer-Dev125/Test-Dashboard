import { useEffect, useRef, useState } from "react"


export default function TextGenerator({final, Node, duration=50, onPrinted}){

    const [value, setValue] = useState(0);
    const valueRef = useRef(0);
    const timerRef = useRef(null);

    useEffect(() => {

        const starter = () => {
            timerRef.current = setTimeout(() => {
                
                if(valueRef.current === final) {
                    clearTimeout(timerRef.current);
                    onPrinted?.();
                    return;
                }
                
                valueRef.current += final - valueRef.current > 1 ? 1 : final - valueRef.current;                
                setValue(valueRef.current);
                starter();

            }, duration);
        }

        starter();


        return () => {
            if(timerRef.current) clearTimeout(timerRef.current);
        }
    }, [final]);

    return <Node 
            value={value}
        />
}