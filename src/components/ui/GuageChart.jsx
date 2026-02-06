import React from "react";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { TextGenerator } from "../custom";

export default function GuageChart({bgColor, width, finalValue, text}){

    return (
        <div className="pb-3 relative" style={{height: 200}}>
            <Gauge 
                width={width}
                height={200} 
                value={finalValue} 
                startAngle={-90}
                endAngle={90}
                valueformatter={() => ''}
                innerRadius="90%" 
                outerRadius="100%"
                cornerRadius="50%"
                sx={{
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: bgColor, 
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: 'var(--other)',          
                    },
                    [`& .${gaugeClasses.valueText}`]: {
                        display: 'none',
                    }
                }}
            />
            <div className="absolute top-1/2 w-full items-center text-center">
                <div className="flex flex-col items-center">
                    <TextGenerator
                        final={finalValue}
                        duration={40}
                        Node={({ value }) => (
                            <p className="text-[44px] font-bold text-[var(--primary)]">
                                {value}%
                            </p>
                        )}
                    />
                    <p className="text-sm text-[var(--sec)]">{text}</p>
                </div>
            </div>
        </div>
    )

}