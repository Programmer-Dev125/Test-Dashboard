import Icons from "@data/Icons";
import { links } from "@data/uiData";
import { RippleButton } from "@custom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { goRoute } from "@store/selfRoute";

type Props = {
    onToggle: (prop: boolean) => void,
    sidebar: boolean
}

export default function Sidebar({onToggle, sidebar}: Props){

    const dispatch = useDispatch();
    const route = useSelector((state: any) => state.route.routes);
    const [showLinks, setShowLinks] = useState(true);
    const currentRoute = useMemo(() => {
        return route[route.length - 1];
    }, [route]);

    useEffect(() => {
        onToggle(showLinks);
    }, [showLinks]);

    return(
        <section className="min-h-screen bg-[var(--primary)] relative py-5">
            <div className="w-[80%] mx-auto flex flex-col gap-[40px]">
                <img src="/images/logo.png" alt="logo image" className={`${sidebar ? "" : "mx-auto"}`}  style={{width: sidebar ? 100 : 50, height: 40}} /> 
                <div className="flex flex-col gap-[20px]">
                    {links.map((link: any) => 
                        <RippleButton 
                            color="rgba(152, 174, 192, 0.1)"
                            className={`flex flex-row gap-3 ${sidebar ? "px-3  py-3 rounded-lg" : "w-[50px] h-[50px]  justify-center rounded-full"} items-center hover:bg-[var(--lk)] ${currentRoute === link.link ? "bg-[var(--lk)]": "bg-transparent"}`}
                            onClick={() => dispatch(goRoute(link.link))} 
                            key={link.id}
                            radii={sidebar ? 8 : "50%"}
                            parentClassName={`${sidebar ? "" : "mx-auto"}`}
                        >
                            <Icons
                                name={link.icon}
                                color={`${currentRoute === link.link ? "#fff" : "var(--dim)"}`}
                                size={16}
                            />
                            <p 
                                className={`
                                    ${currentRoute === link.link ? "text-white" : "text-[var(--dim)]"} 
                                    ${showLinks ? "block" : "hidden"} text-sm font-medium transition-discrete`
                                }
                            >
                                {link.title}
                            </p>
                        </RippleButton>
                    )}
                </div>
            </div>
            <div className="absolute top-5 right-[-16px]">
                <RippleButton 
                    color="rgba(0, 0, 0, 0.15)" 
                    className="bg-white flex justify-center items-center rounded-full shadow-sm w-[32px] h-[32px]" 
                    onClick={() => setShowLinks(prev => !prev)} 
                    radii={"50%"}
                >
                    <Icons 
                        name="sidebar"
                        color="#747A8B"
                        size={20}
                    />
                </RippleButton>
            </div>
        </section>
    )
}