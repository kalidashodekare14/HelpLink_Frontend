import { configureStore } from "@reduxjs/toolkit";
import { publicService } from "./services/publicService/campaignsService";


export const store = configureStore({
    reducer: {
        [publicService.reducerPath]: publicService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(publicService.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;