export default function Card({className, children}){
    return(
        <div className={`${className || ""} bg-white rounded-[10px] border border-[var(--card-bd)] h-auto`}>
            {children}
        </div>
    )
}