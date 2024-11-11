import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentProblemShowing, ProblemInitialState } from "../../interfaces/ProblemSlice";



const initialState: ProblemInitialState = {
    problem: null,
    problemSolved: null,
}

export const problemSlice = createSlice({
    name: "problem",
    initialState: initialState,
    reducers: {
       onLoadProblem: (state, action: PayloadAction<CurrentProblemShowing | null>) => {
         if(action.payload){
            state.problem = {...action.payload};
         }
         else{
            state.problem = null;
         }
       },
       onLoadProblemSolved: (state, action: PayloadAction<CurrentProblemShowing | null>) => {
         if(action.payload){
            state.problem = {...action.payload};
         }
         else{
            state.problem = null;
         }
       }
       
    }
});

export const { onLoadProblem, onLoadProblemSolved } = problemSlice.actions;