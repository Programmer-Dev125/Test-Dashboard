
type Props = {
    className?: string,
    children: React.ReactNode
}

export default function Card({className, children}: Props){
    return(
        <div className={`${className || ""} bg-white rounded-[10px] border border-[var(--card-bd)]`}>
            {children}
        </div>
    )
}