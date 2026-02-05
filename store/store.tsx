import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./selfRoute";

export const store = configureStore({
    reducer: {
        route: routeReducer
    }
});