import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Stats = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
        <div className="w-10/12 bg-red-300 flex flex-row items-center justify-around my-2">
            <h1 className='text-3xl'>Estadisticas</h1>
            <button 
            onClick={() => navigate("/")}
            className='p-2 bg-blue-500 rounded-sm font-bold text-white'>Volver</button>
        </div>
        
    </div>
  )
}
