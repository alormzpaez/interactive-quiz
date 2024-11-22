import { useEffect, useState } from "react"
import { DataToGetProblemImage, MethodProblemsData, ProblemData, ProblemSolvedInLocalDB, UnitDataToCompareWithLocalDB, UnitsContentsDataInterface } from "../interfaces";
import { globalUnitProblems, unitData, UnitsContentsData } from "../data";
import { onLoadProblem, onLoadProblemSolved, useAppDispatch, useAppSelector } from "../store";
import { CurrentProblemShowing, CurrentProblemSolvedShowing } from "../interfaces/ProblemSlice";
import { onCloseSession, onLoadUser, UserData } from "../store/Problem/userSlice";


export const useUser = () => {
    
    const dispatch = useAppDispatch();
    const user = useAppSelector(store => store.user)



    const startLoadingUser = async(user: UserData) => {
        const currentUsers = await backend.getUsers();
        //console.log("current users: " + currentUsers);
        
        const currentUser = currentUsers?.find(u => u.id === user.id && u.password === user.password);
        if(currentUser){
            dispatch( onLoadUser(currentUser) )
            return;
        }
        alert("Usuario no existe")
    }

    const startCreatingUser = async(user: UserData) => {
      const currentUsers = await backend.getUsers();

      const currentUser = currentUsers?.find(u => u.id === user.id);
      if(!currentUser){
          let finalUsers = [...currentUsers, user];
          const res = await backend.saveUsers(finalUsers);
          if(!res.success){
            console.log("Error al guardar usuarios")
            await backend.saveUsers(currentUsers);
            return;
          }

          startLoadingUser(user);
          return;
      }
      alert("Usuario ya existe")
    }

    const startLoadingCloseSesssion = () => {
        dispatch( onCloseSession() )
    }

  return {
    user,
    startLoadingUser,
    startLoadingCloseSesssion,
    startCreatingUser
  }
}
