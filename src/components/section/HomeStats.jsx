import { TextGenerator } from "@custom"
import Icons from "./Icons";
import { homeStats } from "@data/uiData";
import { Card } from "@ui";

export default function HomeStats(){

    return(
        <div className="grid grid-cols-5 xl:grid-cols-6 max-[1400px]:gap-2 w-[95%] mx-auto gap-5">
            <Card className="flex flex-row justify-between items-start p-3">
                <div className="flex flex-col gap-3">
                    <TextGenerator 
                        Node={({value}) => <p className="text-2xl font-bold text-[var(--primary)]">{value}</p>} 
                        final={78.65}
                    />
                    <p className="text-[var(--sec)] text-sm">Overall Progress</p>
                </div>
                <Icons name="report" size={24} color="var(--danger)" />
            </Card>
            {homeStats.map((stat) => 
                <Card className="p-3 flex flex-row justify-between items-start"> 
                    <div className="flex flex-col gap-3">
                        <TextGenerator 
                            Node={({value}) => <p className="text-2xl font-bold text-[var(--primary)]">{value}</p>}
                            final={stat.final}
                            duration={20}
                        />
                        <p className="text-[var(--sec)] text-sm">{stat.title}</p>
                    </div>
                    <Icons 
                        name={stat.iconName}
                        size={24}
                        color="var(--danger)"
                    />
                </Card>
            )}
        </div>
    )
}