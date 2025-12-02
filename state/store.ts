import { configureStore } from "@reduxjs/toolkit";
import { profileService } from "./services/profileService/profileService";
import { publicService } from "./services/publicService/campaignsService";
import { receiverService } from "./services/receiverService/receiverService";
import { donorService } from "./services/donorService/donorService";
import { adminService } from "./services/adminService/adminService";
import { volunteerService } from "./services/volunteerService/volunteerService";


export const store = configureStore({
    reducer: {
        [profileService.reducerPath]: profileService.reducer,
        [publicService.reducerPath]: publicService.reducer,
        [receiverService.reducerPath]: receiverService.reducer,
        [donorService.reducerPath]: donorService.reducer,
        [adminService.reducerPath]: adminService.reducer,
        [volunteerService.reducerPath]: volunteerService.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(profileService.middleware)
            .concat(publicService.middleware)
            .concat(receiverService.middleware)
            .concat(donorService.middleware)
            .concat(adminService.middleware)
            .concat(volunteerService.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;