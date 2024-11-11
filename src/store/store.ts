import { configureStore } from "@reduxjs/toolkit";
import { problemSlice } from "./Problem/problemSlice";

export const store = configureStore({
    reducer: {
        problem: problemSlice.reducer,  
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;