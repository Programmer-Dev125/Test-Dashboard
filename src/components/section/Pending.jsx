import { IoSettings } from "react-icons/io5";
import useWindowDimensions from "@hooks/useWindowDimensions";

export default function Pending(){

    const { innerHeight } = useWindowDimensions();

    return(
        <div className="flex flex-col gap-5 w-full h-full justify-center items-center">
            <img src="/images/mantain.svg" alt="pending image" className="w-[80%]" style={{ height: innerHeight / 1.5 }} />
            <div className="flex flex-row gap-4 items-center">
                <p className="text-base text-[var(--primary)] font-bold">Page is Under Maintenance</p>
                <IoSettings size={30} className="flex-shrink-0 animate-spin animation-delay-100" color="var(--card-primary)"  />
            </div>
        </div>
    )
}