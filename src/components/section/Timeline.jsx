import { useMemo, useState } from "react";
import { Dropdown, RippleButton } from "@custom";
import { IoIosArrowDown } from "react-icons/io";
import { Card } from "@ui";
import { timelines } from "@data/uiData";

export default function TimeLine(){
    const [date, setDate] = useState(new Date());

    const lastFilledId = useMemo(() => {
        const filtered = timelines.filter((time) => time.fill);
        return filtered[filtered.length - 1]?.id || 0;
    }, [timelines]);

    return(
        <Card className="w-[95%] mx-auto flex flex-col gap-12 px-6 py-5">
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-bold text-[var(--primary)] text-base">Project Timeline</h2>
                <Dropdown
                    Trigger={({state, onClick}) => 
                        <RippleButton onClick={onClick} radii={12} className="flex flex-row gap-5 items-center px-5 py-2 rounded-[12px] border border-[var(--card-bd)]">
                            <p>{date.getFullYear()}</p>
                            <IoIosArrowDown size={12} color="#17181C" className={`flex-shrink-0 transition-transform ${state ? "rotate-180" : "rotate-0"}`} />
                        </RippleButton>
                    }   
                    className="bg-white shadow-lg rounded-b-lg w-full"
                >
                   {["home", "Logout", "Close"].map((link) => 
                        <RippleButton onClick={() => {}} className="text-base text-[var(--primary)] py-1 px-3">
                            {link}
                        </RippleButton>
                    )}
                </Dropdown>
            </div>
            <div className="relative flex flex-col gap-[15px]">
                <div className="grid grid-cols-6 bg-[#F5F8FB] w-full h-[14px] rounded-full">
                    {timelines.map(({fill, id}) => 
                        <div 
                            key={id}
                            className={`flex justify-center items-center ${fill ? `bg-[var(--success)] h-full w-full ${id === 1 ? "rounded-l-full" : id === lastFilledId ? "rounded-r-full" : ""}` : ""}`}
                        />
                    )}
                </div>
                <div className="flex flex-row justify-between items-center">
                    {timelines.map(({id, upper, below, fill}) => 
                        <div className={`flex flex-col gap-3 items-center relative`} key={id}>
                            <div className={`w-[10px] h-[10px] rounded-full absolute top-[-27px] ${fill ? "bg-white" : "bg-[var(--danger)]"}`} />
                            <p className="text-[var(--sec)] text-sm">{upper}</p>
                            <p className="text-[var(--primary)] font-medium text-sm">{below}</p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}