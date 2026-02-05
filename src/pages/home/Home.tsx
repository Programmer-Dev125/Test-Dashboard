import Upper from "./Upper";
import TimeLine from "./Timeline";


export default function Home(){
    return(
        <div className="flex flex-col gap-10">
            <Upper />
            <TimeLine />
        </div>
    )
}