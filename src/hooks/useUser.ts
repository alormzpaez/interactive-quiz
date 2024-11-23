import { useEffect, useState } from "react"
import { DataToGetProblemImage, MethodProblemsData, ProblemData, ProblemSolvedInLocalDB, UnitDataToCompareWithLocalDB, UnitsContentsDataInterface } from "../interfaces";
import { globalUnitProblems, unitData, UnitsContentsData } from "../data";
import { onLoadProblem, onLoadProblemSolved, useAppDispatch, useAppSelector } from "../store";
import { CurrentProblemShowing, CurrentProblemSolvedShowing } from "../interfaces/ProblemSlice";
import { onCloseSession, onLoadUser, UserData } from "../store/Problem/userSlice";

import Swal from 'sweetalert2'
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
   
        Swal.fire({
          title: 'Error!',
          text: 'No existe el usuario',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        
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
   
      Swal.fire({
        title: 'Error!',
        text: 'Usuario no existe',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
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
