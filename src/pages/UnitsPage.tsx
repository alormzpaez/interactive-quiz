
import { useNavigate } from 'react-router-dom';
import { Header, UnitCard } from '../components';
import { useProblemsToSolve, useUnits } from '../hooks';
import { FaChartLine } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

export const UnitsPage = () => {
  const navigate = useNavigate();
  const { units } = useUnits();
  //const {resetProblemsSolved} = useProblemsToSolve()

  return (
    <div className="w-full min-h-screen bg-blue-00 flex flex-col items-center">
        <div className="w-5/6">
          <Header/>
        </div>
        <div className="w-full flex flex-row items-center justify-around my-4">
            
            <h1 className="font-bold text-4xl text-gray-600">Unidades</h1>
            <div className="flex flex-row gap-1 flex-nowrap">

              <button 
              onClick={() => {
                navigate("/stats")
                //resetProblemsSolved()
              }}
              className="p-2 rounded-sm bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold flex flex-row items-center justify-center gap-2 flex-nowrap"> <FaChartLine/> Estadisticas</button>
              <button 
              onClick={() => {
                navigate("/owners")
                //resetProblemsSolved()
              }}
              className="p-2 rounded-sm bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold flex flex-row items-center justify-center gap-2 flex-nowrap"> <FaPeopleGroup/> Nosotros</button>
          
            </div>
        </div>
        <div className="w-5/6 flex flex-row flex-wrap bg-blue-00 gap-1 justify-center p-2">
            {
              units.map((unit) => (
                <UnitCard 
                  key={unit.id} 
                  id={unit.id}
                  name={unit.name} 
                  description={unit.description} 
                  topics={unit.topics}
                />
              ))
            }
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
