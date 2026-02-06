import {Card, GuageChart} from "@ui";
import { useEffect, useState } from "react";
import { activties, leaders } from "@/data/uiData";
import { TextGenerator } from "../custom";
import GridChart from "./GridChart";

export default function HomeScoreRow(){
    
    const [width, setWidth] = useState(0);
    const [secWidth, setSecWidth] = useState(0);

    useEffect(() => {
        console.log("width: ", width);
    }, [width]);

    return(
        <div className="w-[95%] mx-auto flex flex-col gap-12">
            <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,3fr)_minmax(0,3fr)] gap-5">
                <Card onDimensions={({width}) => setWidth(width)} className="flex flex-col gap-8">
                    <h2 className="text-base text-[var(--primary)] font-bold py-5 px-5">Overall Compliance Score</h2>
                    <div className="pb-5">
                        <GuageChart bgColor="var(--danger)" width={width} finalValue={65} text="Basic Standards 2025" />
                    </div>
                </Card>
                <Card className="p-3 flex flex-col gap-5">
                    <h2 className="text-base font-bold text-[var(--primary)]">Top Performing Perspective Leaders</h2>
                    {leaders.map((leader, index) => 
                        <div className={`flex flex-row justify-between items-center ${index === leaders.length - 1 ? "" : "pb-3 border-b border-b-[var(--card-bd)]"}`}>
                            <div className="flex flex-row gap-5 items-center">
                                <img src="/images/user.png" style={{width: 42, height: 42}} />
                                <div className="flex flex-col gap-1">
                                    <p className="text-base font-medium text-[var(--primary)]">{leader.name}</p>
                                    <p className="text-base text-[var(--sec)] font-medium">{leader.title}</p>
                                </div>
                            </div>
                            <p className="text-base text-[var(--primary)] font-bold">{leader.percentage}</p>
                        </div>
                    )}
                </Card>
                <Card className="p-3 flex flex-col gap-5">
                    <h2 className="text-base text-[var(--primary)] font-bold border-b border-[var(--card-bd)] pb-2">Recent Activites</h2>
                    {activties.map((activity, index) => 
                        <div className={`flex flex-row justify-between items-baseline ${index === leaders.length - 1 ? "" : "pb-3 border-b border-b-[var(--card-bd)]"}`}>
                            <div className="flex flex-row gap-3 w-[80%] items-baseline">
                                <div className="w-[6px] h-[6px] bg-[var(--danger)] rounded-full flex-shrink-0" />
                                <p className="text-base font-medium text-[var(--primary)]">{activity.text}</p>
                            </div>
                            <p className="text-xs text-[var(--sec)]">{activity.time}</p>
                        </div>
                    )}
                </Card>
            </div>
            <div className="grid grid-cols-[minmax(0,6fr)_minmax(0,3fr)] gap-5">
                <Card className="p-5 flex flex-col gap-4">
                    <h2 className="text-base text-[var(--primary)] font-bold pb-2">12-Month Performance</h2>
                    <GridChart />
                </Card>
                <Card className="flex flex-col gap-8">
                    <h2 className="text-base text-[var(--primary)] font-bold py-5 px-5">Audit Readiness</h2>
                    <GuageChart bgColor="var(--success)" width={width} finalValue={80} text="Readiness Level" />
                    <div className="w-[90%] mx-auto border-t border-[var(--card-bd)] py-5">
                        <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
                            {[{id: 1, text: "Overdue Stds", final: 12}, {id: 2, text: "Missing Evidence", final: 5}].map((item) => 
                                <div className="flex flex-col gap-2 items-center" key={item.id}>
                                    <TextGenerator 
                                        Node={({value}) => <p className="text-2xl text-[var(--primary)] font-bold">{value}</p>}
                                        final={item.final}
                                        duration={100}
                                    />
                                    <p className="text-sm text-[var(--sec)]">{item.text}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}