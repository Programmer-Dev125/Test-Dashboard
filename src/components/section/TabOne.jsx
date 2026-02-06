import { useEffect, useRef, useState } from "react";

export default function TabOne(){

    return(
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,9fr)]">
            <div className="grid grid-rows-[auto_1fr_1fr_1fr_0.5fr] gap-y-5 border-r border-[var(--card-bd)] pr-2 py-4" style={{gridTemplateRows: ""}}>
                <div className="bg-[#1B35570D] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Objective</p>
                </div>
                <div className="bg-[#1B35570D] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Implementation Requirements</p>
                </div>
                <div className="bg-[#1B35570D] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)] ">Evidence Documents</p>
                </div>
                <div className="bg-[#1B35570D] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Related Regulations</p>
                </div>
                <div className="bg-[#1B35570D] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Scope</p>
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr_1fr_1fr_0.5fr] gap-y-5 pl-2 py-4">
                <div className="bg-[var(--bg-primary)] px-3 py-2 h-fit rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.</p>
                </div>
                <div className="bg-[var(--bg-primary)] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Prepare a digital transformation strategy for the transition to electronic government transactions, including the following:</p>
                    <ul className="list-[upper-alpha] list-inside">
                        <li className="text-base text-[var(--primary)]">The organization’s vision, mission, strategic pillars, and strategic objectives, and their alignment with the organization’s overall strategy.</li>
                        <li className="text-base text-[var(--primary)]">Strategic initiatives, programs, and performance indicators.</li>
                        <li className="text-base text-[var(--primary)]">A clear methodology for integration and coordination with relevant external entities to achieve the strategy’s objectives.</li>
                        <li className="text-base text-[var(--primary)]">Required competencies, capabilities, and skills necessary to achieve the strategy’s objectives.</li>
                    </ul>
                </div>
                <div className="bg-[var(--bg-primary)] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.</p>
                </div>
                <div className="bg-[var(--bg-primary)] px-3 py-2 rounded-[10px]"> 
                    <p className="text-base text-[var(--primary)]">Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).</p>
                </div>
                <div className="bg-[var(--bg-primary)] px-3 py-2 rounded-[10px]">
                    <p className="text-base text-[var(--primary)]">All government entities.</p>
                </div>
            </div>
        </div>
    )
}