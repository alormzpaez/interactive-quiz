import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UnitCardForResults } from '../components';
import { useProblemsToSolve, useUnits } from '../hooks';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

export const Stats = () => {

  const navigate = useNavigate();
  const { units } = useUnits();
  const {resetProblemsSolved} = useProblemsToSolve();
  const handleReset = () => {
    let confirmed = window.confirm("¿Seguro de reiniciar los problemas?");
    if (confirmed) {
      resetProblemsSolved();
      navigate("/");
    }
    return;
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
        <div className="w-10/12 bg-red-00 flex flex-row items-center justify-around my-2">
            <h1 className='text-3xl'>Estadisticas</h1>
            <button 
            onClick={() => navigate("/")}
            className='p-2 bg-blue-500 rounded-sm font-bold text-white flex flex-row items-center justify-center gap-2 flex-nowrap'> <FaArrowLeft/> Volver</button>
        </div>
        <div className="w-10/12 bg-blue-00">
        {
              units.map((unit) => (
                <UnitCardForResults
                  key={unit.id} 
                  id={unit.id}
                  name={unit.name} 
                  description={unit.description} 
                  topics={unit.topics}
                />
              ))
            }
        </div>
        <div className="w-full flex flex-row items-center justify-center my-3">
        <button 
            onClick={handleReset}
            className='p-2 bg-red-500 rounded-sm font-bold text-white flex flex-row items-center justify-center gap-2 flex-nowrap'> <FaExclamationTriangle/> Reiniciar Problemas</button>
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
