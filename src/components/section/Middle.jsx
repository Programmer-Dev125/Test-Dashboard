import { TextGenerator } from "@custom"
import { mainData, statuses, strategies } from "@data/uiData"
import { Card } from "@ui"
import { useState } from "react"

export default function Middle(){

    const [totalHeight, setTotalHeight] = useState(340);

    return(
        <Card className="p-3 w-[95%] mx-auto flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-bold text-base text-[var(--primary)]">Progress Status</h2>
                <div className="flex flex-row items-center gap-8">
                    {statuses.map((status) => 
                        <div className="flex flex-row gap-1 items-center">
                            <div className={`w-[8px] h-[8px] rounded-full`} style={{ backgroundColor: status.color }} />
                            <p className="text-sm text-[var(--primary)]">{status.title}</p>
                        </div>
                    )}
                </div>
            </div>   
            <div className="grid grid-cols-11 gap-3">
                {strategies.map((item) => 
                    <div className="p-3 flex justify-center items-center text-center bg-[var(--primary)] flex-col gap-3 rounded-[10px]">
                        <p className="text-white font-bold text-sx">{item.title}</p>
                        <TextGenerator 
                            Node={({value}) => <p className="p-1 rounded-full bg-[#FFFFFF1A] w-full text-sm font-bold text-white">{value}%</p>}
                            final={item.final}
                            duration={10}
                        />
                    </div>
                )}
            </div> 
            <div className="grid grid-cols-11 gap-3 h-full">
                
                {/* {mainData.map((item) => 
                    <div className="flex flex-col gap-3 h-full">
                        {item.map((entry) => 
                            <div 
                                className="bg-[#F5F8FB] rounded-[10px] py-2 border border-[var(--card-bd)] text-center flex flex-col h-full"                                
                            >
                                <p className="text-[10px] text-[var(--primary)] px-3">{entry.title}</p>
                                <div className={`grid gap-2 ${(entry.types.length >= 4) ? "grid-cols-2" : "grid-cols-3"} auto-rows-fr`}> 
                                    {entry.types.map((type, index) => 
                                        <div className="flex justify-center items-center"> 
                                            <div
                                                className={`w-[24px] h-[24px] rounded-full
                                                    ${type === 1 ? "bg-[var(--success)]" : type === 2 ? "bg-[var(--yel)]" : type === 3 ? "bg-[var(--info)]" : "bg-[var(--danger)]"}
                                                `}
                                            >
                                                <p className="text-base text-white">{index + 1}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )} */}
            </div>
        </Card>
    )
}