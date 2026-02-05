import React, { useMemo, useState } from "react"
import Home from "./pages/home/Home"
import Perspective from "./pages/Perspective"
import Tasks from "./pages/Tasks"
import Reports from "./pages/Reports"
import UserRoles from "./pages/UserRoles"
import NoRoute from "./404/NoRoute"
import Documents from "./pages/Documents"

type Props = {
    currentRoute: string
}

const Screen = React.memo(({currentRoute}: Props) => {

    const [screens, setScreens] = useState<any>({
        home: Home,
        perspectives: Perspective,
        tasks: Tasks,
        documents: Documents,
        reports: Reports,
        user: UserRoles 
    })

    const Show = useMemo(() => {
        return screens[currentRoute] ?? NoRoute
    }, [currentRoute]);

    return <Show />;
})

export default Screen;