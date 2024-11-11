import { useEffect, useState } from "react"
import { ProblemData, ProblemSolvedInLocalDB, UnitDataToCompareWithLocalDB } from "../interfaces";
import { globalUnitProblems } from "../data";


export const useProblemsToSolve = () => {
    const [problemsSolved, setProblemsSolved] = useState<ProblemSolvedInLocalDB[]>([]);

    const chargeProblemsSolved = async() => {
      const problemsSolved = await backend.loadData();
      setProblemsSolved(problemsSolved || []);
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
      const res = await backend.saveData(arr);
      if(res.success){
        console.log("Problema guardado correctamente")
      }else{
        console.error("Hubo un error al guardar el problema resuelto")
      }
    }
    const resetProblemsSolved = async() => {
      setProblemsSolved([]);
      const res = await backend.saveData([]);
      if(res.success){
        console.log("Problema guardado correctamente")
      }else{
        console.error("Hubo un error al guardar el problema resuelto")
      }
    }

  // Obtener la cantidad de problemas resueltos por método
  const getSolvedProblemsCountByMethod = (methodId: number) => {
    return problemsSolved?.filter((problem) => problem.method_id === methodId).length;
  };

  // Obtener la cantidad de problemas resueltos por unidad
  const getSolvedProblemsCountByUnit = (unitId: string) => {
    return problemsSolved?.filter((problem) => problem.unit_id === unitId).length;
  };

  // Obtener la cantidad total de problemas por método
  const getTotalProblemsCountByMethod = (methodId: number) => {
    return globalUnitProblems?.filter((problem) => problem.method_id === methodId).length;
  };

  // Obtener la cantidad total de problemas por unidad
  const getTotalProblemsCountByUnit = (unitId: string) => {
    return globalUnitProblems?.filter((problem) => problem.unit_id === unitId).length;
  };
  

  const getUnsolvedProblem = (unitId: string, methodId: number): ProblemData | null => {
    // Encontrar los problemas de la unidad y método especificados
    const methodData = globalUnitProblems.find(
      (data) => data.unit_id === unitId && data.method_id === methodId
    );
  
    if (!methodData) {
      console.error("No se encontraron problemas para la unidad y método especificados.");
      return null;
    }
  
    // Buscar un problema no resuelto
    for (const problem of methodData.problems) {
      const isSolved = problemsSolved.some(
        (solved) =>
          solved.unit_id === unitId &&
          solved.method_id === methodId &&
          solved.problem_type === problem.type
      );
  
      // Si el problema no está resuelto, lo retornamos
      if (!isSolved) {
        return problem;
      }
    }
  
    // Si todos los problemas han sido resueltos, retornamos null
    return null;
  }
  





    useEffect(() => {
      chargeProblemsSolved()
    },[])


  return {
    problemsSolved,
    saveNewProblemSolved,
    checkIfProblemIsAlreadySolved,
    getSolvedProblemsCountByMethod,
    getSolvedProblemsCountByUnit,
    getTotalProblemsCountByMethod,
    getTotalProblemsCountByUnit,
    resetProblemsSolved,
    getUnsolvedProblem
  }
}
