import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const selfRoute = createSlice({
    name: "selfRoute",
    initialState: {
        routes: ["home"] as string[]
    },
    reducers: {
        goRoute: (state, action: PayloadAction<string>) => {
            const lastRouteSame = state.routes[state.routes.length - 1];
            if(lastRouteSame  && lastRouteSame === action.payload) return;

            state.routes.push(action.payload);
        },
        removeRoute: (state) => {
            if(state.routes.length === 1) return;
            state.routes = state.routes.slice(0, state.routes.length - 1);
        }
    }
})

export const {  goRoute, removeRoute } = selfRoute.actions;
export default selfRoute.reducer;