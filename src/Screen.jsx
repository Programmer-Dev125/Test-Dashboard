import React, { useMemo, useState } from "react"
import Home from "./pages/Home"
import Perspective from "./pages/Perspective"
import NoRoute from "./pages/404/NoRoute"
import {Pending} from "@section";

const Screen = React.memo(({currentRoute}) => {

    const [screens, setScreens] = useState({
        home: Home,
        perspectives: Perspective,
        tasks: Pending,
        documents: Pending,
        reports: Pending,
        user: Pending,
    })

    const Show = useMemo(() => {
        return screens[currentRoute] ?? NoRoute
    }, [currentRoute]);

    return <Show />;
})

export default Screen;