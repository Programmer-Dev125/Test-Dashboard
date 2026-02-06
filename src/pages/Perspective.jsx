import { RippleButton, TextGenerator } from "@custom";
import { Upper, Icons, Tab } from "@section";
import { goRoute } from "@store/selfRoute";
import { Card } from "@ui";
import { useDispatch } from "react-redux";
import { leaders, persData } from "@data/uiData";
import { useState } from "react";
import TabOne from "@/components/section/TabOne";

export default function Perspective(){
    const dispatch = useDispatch();
    const [tab, setTab] = useState(0);

    return(
        <div className="flex flex-col gap-12">
            <Upper />
            <div className="w-[95%] mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row items-center gap-3">
                        <RippleButton radii={"50%"} onClick={() => dispatch(goRoute("home"))} className="w-[24px] h-[24px] flex justify-center items-center">
                            <Icons name="arrowLeft" size={16} color="var(--primary)" />
                        </RippleButton>
                        <p className="text-base font-bold text-[var(--primary)]">Digital Transformation Strategic Planning</p>
                    </div>
                    <Card className="p-6 flex flex-row justify-between items-center">
                        <div className="flex flex-col gap-3">
                            <p className="text-[var(--sec)] text-xs border border-[var(--card-bd)] px-3 py-2 w-fit rounded-full">Strategy & Planning</p>
                            <p className="text-base text-[var(--primary)] font-bold">Digital Transformation Strategic Planning</p>
                            <p className="text-sm text-[var(--sec)]">Develop comprehensive strategic plans for digital transformation aligned with organizational goals</p>
                        </div>
                        <div className="w-[100px] h-[100px] rounded-full bg-transparent border-5 border-[var(--success)] flex justify-center items-center">
                            <p className="text-[var(--primary)] text-sm font-bold">100%</p>
                        </div>
                    </Card>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    {persData.map((data) => 
                        <Card className="flex flex-row gap-4 p-3 items-center">
                            <Icons name={data.icon} size={24} color="var(--danger)" />
                            <div className="flex flex-col gap-3">
                                <TextGenerator 
                                    Node={({value}) => <p className="text-2xl font-bold text-[var(--primary)]">{value}</p>}
                                    final={data.final}
                                    duration={200}
                                />
                                <p className="text-sm text-[var(--sec)]">{data.title}</p>
                            </div>
                        </Card>
                    )}
                </div>
                <div className="flex flex-col gap-5">
                    <Tab onTab={(tab) => setTab(tab)} />
                    <Card className="px-3">
                        {tab === 0 && <TabOne />}
                    </Card>
                </div>
                <Card className="p-5 flex flex-row gap-5 items-center">
                    {leaders.map((leader) => 
                        <div className="flex flex-row gap-3 items-center bg-[var(--bg-primary)] py-3 pr-5 pl-3 rounded-[10px] flex-wrap">
                            <img src="/images/user.png" className="w-[48px] h-[48px] rounded-full" />
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-medium text-[var(--primary)]">{leader.name}</p>
                                <p className="text-base font-medium text-[var(--sec)]">{leader.title}</p>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}