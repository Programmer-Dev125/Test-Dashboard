import { useEffect, useState } from "react"
import { RippleButton } from "@custom";

export default function Tab({onTab}){

    const [tab, setTab] = useState(0);
    const [ov, setOv] = useState({width: 0, height: 0});
    const [ev, setEv] = useState({width: 0, height: 0})

    useEffect(() => {
        onTab?.(tab);
    }, [tab]);


    return(
        <div className={`flex flex-row bg-[#EBF0F3] relative rounded-lg p-1 w-fit`}>
            <div 
                className="absolute top-1 transition-all rounded-lg bg-white pointer-events-none" 
                style={{ width: tab === 0 ? ov.width : ev.width, height: tab === 0 ? ov.height : ev.height, left: tab === 0 ? 5 : ov.width }} 
            />
            <RippleButton radii={8} onDimensions={(width, height) => setOv({width, height})} className="px-3 py-2 text-center" onClick={() => setTab(0)}>
                <p className={`text-sm text-[var(--primary)] }`}>Overview</p>
            </RippleButton>
            <RippleButton radii={8} onDimensions={(width, height) => setEv({width, height})} className="px-3 py-2 text-center" onClick={() => setTab(1)}>
                <p className={`text-sm text-[var(--primary)] }`}>Evidence</p>
            </RippleButton>
        </div>
    )
}