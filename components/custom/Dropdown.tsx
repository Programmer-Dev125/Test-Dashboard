import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useObserver from "@hooks/useObserver";

type Props = {
    Trigger: (...args: any) => React.ReactNode,
    className?: string,
    parentClassName?: string,
    children: React.ReactNode
}

export default function Dropdown({Trigger, className, parentClassName, children}: Props){
    
    const [show, setShow] = useState(false);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const childrenRef = useRef<HTMLDivElement | null>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const {height: triggerHeight} = useObserver({ref: triggerRef})
    const showRef = useRef<boolean>(false);

    useEffect(() => {
        showRef.current = show;
    }, [show]);

    useEffect(() => {
        const onClick = (e: any) => {
            e.stopPropagation();
            if(showRef.current){
                setShow(false);
            }
        };

        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("click", onClick);
        }

    }, []);


    useLayoutEffect(() => {
        if(!childrenRef.current) return;
        setContentHeight(childrenRef.current.scrollHeight);
    }, [childrenRef]);      

    return(
        <div className={`relative ${parentClassName || ""}`}>
            <div ref={triggerRef}>
                <Trigger 
                    onClick={() => setShow(prev => !prev)}
                    state={show}
                />
            </div>
            <div 
                ref={childrenRef}
                onClick={(e) => e.stopPropagation()}
                className={`${className || ""} absolute dropdown ${show ? "pointer-events-auto" : "pointer-events-none"}`} 
                style={{ left: 0, top: triggerHeight, height: show ? contentHeight : 0, transition: "height 200ms ease-in-out", overflow: "hidden", zIndex: 98 }}
            > 
                {children}
            </div>
        </div>
    )
}