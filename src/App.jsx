import {Sidebar} from "@section";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Screen from "./Screen";

export default function App(){

    const route = useSelector((state) => state.route.routes);
    const [currentRoute, setCurrentRoute] = useState("home");
    const routesRef = useRef(["home"]);
    const [toggle, setToggle] = useState(true);

    
    
    useEffect(() => {
        routesRef.current = route;
        setCurrentRoute(route[route.length - 1]);
    }, [route]);


    useEffect(() => {
        window.addEventListener("storage", (e) => {
            
        });

    }, []);

    return(
        <main>
            <section 
                    className={`grid transition-all  duration-150 ease-in-out delay-50 
                        ${toggle ? "grid-cols-[minmax(0,1.5fr)_minmax(0,8.5fr)]" : "grid-cols-[minmax(0,0.5fr)_minmax(0,9fr)]"}`
                    }
                >
                <aside>
                    <Sidebar sidebar={toggle} onToggle={(toggleState) => setToggle(toggleState)} />
                </aside>
                <section className="pb-10">
                    <Screen currentRoute={currentRoute} />
                </section>
            </section>
        </main>
    )
}