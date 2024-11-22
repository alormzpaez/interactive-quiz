import { useEffect, useState } from "react"
import { DataToGetProblemImage, MethodProblemsData, ProblemData, ProblemSolvedInLocalDB, UnitDataToCompareWithLocalDB, UnitsContentsDataInterface } from "../interfaces";
import { globalUnitProblems, unitData, UnitsContentsData } from "../data";
import { onLoadProblem, onLoadProblemSolved, useAppDispatch, useAppSelector } from "../store";
import { CurrentProblemShowing, CurrentProblemSolvedShowing } from "../interfaces/ProblemSlice";
import { useUser } from "./useUser";


export const useProblemsToSolve = () => {
    const [problemsSolved, setProblemsSolved] = useState<ProblemSolvedInLocalDB[]>([]);
    const [problemsGlobal, setProblemsGlobal] = useState<MethodProblemsData[]>([]);
    const [problemContents, setproblemContents] = useState<UnitsContentsDataInterface[]>([]);
    const dispatch = useAppDispatch();
    const { problem, problemSolved } = useAppSelector(store => store.problem)
    const { user } = useUser()

    const chargeProblemsSolved = async() => {
      const problemsSolved = await backend.loadData(user.id ?? "");
      setProblemsSolved(problemsSolved || []);

      const problemsTotal = [...globalUnitProblems];
      setProblemsGlobal(problemsTotal || []);

      const problemsContents = [...UnitsContentsData];
      setproblemContents(problemsContents || []);
    }
    const checkIfProblemIsAlreadySolved = async(data: UnitDataToCompareWithLocalDB): Promise<boolean> => {
      const arr = [...problemsSolved];
      const index =  arr?.findIndex(
        p => 
          p.unit_id === data.unit_id && 
          p.method_id === data.method_id &&
          p.problem_type === data.problem_type 
          );
      return index !== -1;
    }

    const saveNewProblemSolved = async(problem: ProblemSolvedInLocalDB) => {
      const arr = [...problemsSolved, problem];
      setProblemsSolved(arr);
      const res = await backend.saveData(arr, user.id ?? "");
      if(res.success){
        console.log("Problema guardado correctamente")
        return true;
      }else{
        console.error("Hubo un error al guardar el problema resuelto")
        return false;
      }
    }
    const resetProblemsSolved = async() => {
      setProblemsSolved([]);
      const res = await backend.saveData([], user.id ?? "");
      if(res.success){
        console.log("Problema guardado correctamente")
        return true;
      }else{
        console.error("Hubo un error al guardar el problema resuelto")
        return false;
      }
    }

  // Obtener la cantidad de problemas resueltos por método
  const getSolvedProblemsCountByMethod = (unitId: string, methodId: number) => {
    return problemsSolved?.filter((problem) => problem.unit_id === unitId && problem.method_id === methodId).length;
  };

  // Obtener la cantidad de problemas resueltos por unidad
  const getSolvedProblemsCountByUnit = (unitId: string) => {
    return problemsSolved?.filter((problem) => problem.unit_id === unitId).length;
  };

  // Obtener la cantidad total de problemas por método
  const getTotalProblemsCountByMethod = (unitId: string, methodId: number) => {
    return globalUnitProblems?.filter((problem) => problem.unit_id === unitId && problem.method_id === methodId)?.[0]?.problems?.length;
  };

  // Obtener la cantidad total de problemas por unidad
  const getTotalProblemsCountByUnit = (unitId: string) => {
    let problems = globalUnitProblems?.filter((problem) => problem.unit_id === unitId).flatMap(x => x.problems).length//.length;
    //console.log("hola problemas: ", problems);
    
    return problems;
  };
  

  const getUnsolvedProblem = (unitId: string, methodId: number): CurrentProblemShowing | null => {
    // Encontrar los problemas de la unidad y método especificados
    const methodData = globalUnitProblems.find(
      (data) => data.unit_id === unitId && data.method_id === methodId
    );
  
    if (!methodData) {
      console.error("No se encontraron problemas para la unidad y método especificados.");
      return null;
    }

    // Revolver problemas para obtener uno aleatorio
    const shuffledProblems = getShuffledProblems(methodData.problems)
  
    // Buscar un problema no resuelto
    for (const problem of shuffledProblems) {
      const isSolved = problemsSolved.some(
        (solved) =>
          solved.unit_id === unitId &&
          solved.method_id === methodId &&
          solved.problem_type === problem.type
      );
  
      // Si el problema no está resuelto, lo retornamos
      if (!isSolved) {
        return {
          correct_answer: problem.correct_answer,
          method_id: methodId,
          options: problem.options,
          type: problem.type,
          unit_id: unitId,
          unit_name: UnitsContentsData.find(u => u.unit_id === unitId && u.methods.some(m => m.id === methodId))?.topic || "",
          method_name: UnitsContentsData.find(u => u.unit_id === unitId && u.methods.some(m => m.id === methodId))?.methods?.find(x => x.id === methodId)?.method_name || "",
          time: problem.time
        };
      }
    }
  
    // Si todos los problemas han sido resueltos, retornamos null
    return null;
  }

  const getShuffledProblems = (array: ProblemData[]): ProblemData[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
      [array[i], array[j]] = [array[j], array[i]];   // Intercambia elementos
    }
    return array;
  }

  const getSolvedProblemsByUnitAndMethod = (unitId: string, methodId: number) => {
    //console.log("getSolvedProblemsByUnitAndMethod");
    
    return problemsSolved?.filter(x => x.unit_id === unitId && x.method_id === methodId)
  }
  
  const startLoadingProblem = async(problem: CurrentProblemShowing) => {
    dispatch( onLoadProblem(problem) );
  }

  const startCleaningProblem = async() => {
    dispatch( onLoadProblem(null) );
  }


  const startLoadingProblemSolved = async(problem: CurrentProblemSolvedShowing) => {
    dispatch( onLoadProblemSolved(problem) );
  }

  const startCleaningProblemSolved = async() => {
    dispatch( onLoadProblemSolved(null) );
  }

  const getImageForProblem = async(data: DataToGetProblemImage) => {
   
    try {
      const filePath = await backend.loadImageForProblem(data);
      return filePath;
    } catch (error) {
      console.error('Error al leer la imagen:', error);
      return null;
    }
  }




    useEffect(() => {
      chargeProblemsSolved()
    },[])


  return {
    currentProblem: problem,
    currentProblemSolved: problemSolved,
    problemsSolved,
    problemsGlobal,
    problemContents,
    saveNewProblemSolved,
    checkIfProblemIsAlreadySolved,
    getSolvedProblemsCountByMethod,
    getSolvedProblemsCountByUnit,
    getTotalProblemsCountByMethod,
    getTotalProblemsCountByUnit,
    resetProblemsSolved,
    getUnsolvedProblem,
    startLoadingProblem,
    startCleaningProblem,
    startCleaningProblemSolved,
    startLoadingProblemSolved,
    getSolvedProblemsByUnitAndMethod,
    getImageForProblem
  }
}
