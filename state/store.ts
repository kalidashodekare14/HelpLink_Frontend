import { configureStore } from "@reduxjs/toolkit";
import { publicService } from "./services/publicService/campaignsService";
import { receiverService } from "./services/receiverService/receiverService";


export const store = configureStore({
    reducer: {
        [publicService.reducerPath]: publicService.reducer,
        [receiverService.reducerPath]: receiverService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(publicService.middleware)
            .concat(receiverService.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;