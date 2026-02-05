import { useState } from "react";
import { Dropdown, RippleButton } from "@custom";
import { IoIosArrowDown } from "react-icons/io";
import { Card } from "@ui";
import { timelines } from "@data/uiData";

export default function TimeLine(){
    const [date, setDate] = useState(new Date());

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
                   {["home", "Logout", "Close"].map((link: string) => 
                        <RippleButton onClick={() => {}} className="text-base text-[var(--primary)] py-1 px-3">
                            {link}
                        </RippleButton>
                    )}
                </Dropdown>
            </div>
            <div className="relative">
                <div className="grid grid-cols-6">
                    {timelines.map(({id, upper, below, fill}: any) => 
                        <div className="flex flex-col gap-3 items-center" key={id}>
                            <p className="text-[var(--sec)] text-sm">{upper}</p>
                            <p className="text-[var(--primary)] font-medium text-sm">{below}</p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}