import { Upper, TimeLine, HomeStats, Middle } from "@section";


export default function Home(){
    return(
        <div className="flex flex-col gap-10">
            <Upper />
            <TimeLine />
            <HomeStats />
            <Middle />
        </div>
    )
}