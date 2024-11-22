import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentProblemShowing, CurrentProblemSolvedShowing, ProblemInitialState } from "../../interfaces/ProblemSlice";


export interface UserData {
   id: string | null,
   password: string | null
}

const initialState: UserData = {
    id: null,
    password:null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
       onLoadUser: (state, action: PayloadAction<UserData | null>) => {
        if(action.payload){
         state.id  =  action.payload.id,
         state.password  =  action.payload.password
        }

         
       },
       onCloseSession: (state) => {
         state.id  =  null,
         state.password  = null
       }
       
    }
});

export const { onLoadUser, onCloseSession } = userSlice.actions;