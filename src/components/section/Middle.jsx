import { TextGenerator } from "@custom"
import { mainData, statuses, strategies } from "@data/uiData"
import { Card } from "@ui"
import { useState } from "react"

export default function Middle(){

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
            <div className="grid grid-cols-8 xl:grid-cols-9 min-[1400px]:grid-cols-10 2xl:grid-cols-11 gap-3">
                {strategies.map((item) => 
                    <div className="p-3 bg-[var(--primary)] rounded-[10px] grid grid-rows-[auto_1fr] gap-y-4">
                        <p className="text-white font-bold text-[clamp(12px,5cqw,8px)] text-center">{item.title}</p>
                        <div className="flex justify-center items-end">
                            <TextGenerator 
                                Node={({value}) => <p className="p-1 place-items-center rounded-full bg-[#FFFFFF1A] w-full text-sm font-bold text-white text-center">{value}%</p>}
                                final={item.final}
                                duration={10}
                            />
                        </div>
                    </div>
                )}
            </div> 
            <div className="grid max-[1280px]:grid-cols-7 max-[1400px]:grid-cols-8 grid-cols-10 gap-5 h-full">
                {mainData.map((item, itemIndex) => (
                    <div
                        key={itemIndex}
                        className="grid gap-y-4"
                        style={{ gridTemplateRows: `repeat(${item.length}, minmax(0, 1fr))` }}
                    >
                        {item.map((entry, entryIndex) => (
                            <div
                                key={entryIndex}
                                className="bg-[#F5F8FB] rounded-[10px] border border-[var(--card-bd)] text-center pt-2 grid grid-rows-[auto_1fr]"
                            >
                            <p className="text-[10px] text-[var(--primary)] px-3">
                                {entry.title}
                            </p>
                            <div className={`flex justify-center py-2 ${entry?.parentClassName || ""}`}>
                                <div className={`grid w-full place-items-center ${entry?.className || ""}`}>
                                    {entry.types.map((type, index) => (
                                            <div
                                                key={index}
                                                className={`w-[24px] h-[24px] rounded-full flex items-center justify-center
                                                ${
                                                    type === 1
                                                    ? "bg-[var(--success)]"
                                                    : type === 2
                                                    ? "bg-[var(--yel)]"
                                                    : type === 3
                                                    ? "bg-[var(--info)]" 
                                                    : type === 4 ? "bg-[var(--danger)]" : "bg-[var(--sec)]"
                                                }
                                                `}
                                            >
                                                <p className="text-white text-xs">{index + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    )
}