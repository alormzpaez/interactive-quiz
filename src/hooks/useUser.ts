import { useEffect, useState } from "react"
import { DataToGetProblemImage, MethodProblemsData, ProblemData, ProblemSolvedInLocalDB, UnitDataToCompareWithLocalDB, UnitsContentsDataInterface } from "../interfaces";
import { globalUnitProblems, unitData, UnitsContentsData } from "../data";
import { onLoadProblem, onLoadProblemSolved, useAppDispatch, useAppSelector } from "../store";
import { CurrentProblemShowing, CurrentProblemSolvedShowing } from "../interfaces/ProblemSlice";
import { onCloseSession, onLoadUser, UserData } from "../store/Problem/userSlice";


export const useUser = () => {
    
    const dispatch = useAppDispatch();
    const user = useAppSelector(store => store.user)



    const startLoadingUser = (user: UserData) => {
        dispatch( onLoadUser(user) )
    }
    const startLoadingCloseSesssion = () => {
        dispatch( onCloseSession() )
    }

    useEffect(() => {
      
    },[])


  return {
    user,
    startLoadingUser,
    startLoadingCloseSesssion
  }
}
