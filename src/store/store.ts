import { configureStore } from "@reduxjs/toolkit";
import { problemSlice } from "./Problem/problemSlice";
import { userSlice } from "./Problem/userSlice";

export const store = configureStore({
    reducer: {
        problem: problemSlice.reducer, 
        user: userSlice.reducer,  
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;