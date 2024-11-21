import { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import { UnitDataToShow } from '../interfaces';
import { useProblemsToSolve } from '../hooks';
import { CurrentProblemShowing } from '../interfaces/ProblemSlice';
import { Owner } from '../data/Owners';

export const OwnerCard: FC<Owner> = ({ carrer,id,name,email }) => {
  
  return (
    <div className="w-full bg-white md:w-[33%] lg:w-[49%] md:bg-red-00 lg:bg-blue-00 flex flex-col rounded-md p-2 border-2">
        <div className="w-full flex flex-row ">
            <h2 className='text-xl font-bold'>{name}</h2>

            
        </div>
        <div className="w-full font-bold">
        Matrícula: {id}
        </div>
        <div className="w-full">
          <h3 className='text-lg '>Carrera: {carrer}</h3>
          <h3 className='text-lg '>Email: {email}</h3>
          
        </div>
        
    </div>
  )
}
