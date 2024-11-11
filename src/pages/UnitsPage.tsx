
import { useNavigate } from 'react-router-dom';
import { UnitCard } from '../components/UnitCard'

export const UnitsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-red-00 flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-around my-4">
            
            <h1 className="font-bold text-4xl">Unidades</h1>
            <button 
            onClick={() => navigate("/stats")}
            className="p-2 rounded-sm bg-blue-500 text-white">Resultados</button>
        
        </div>
        <div className="w-5/6 flex flex-row flex-wrap bg-blue-00 gap-1 justify-center p-2">
            <UnitCard/>
            <UnitCard/>
            <UnitCard/>
            <UnitCard/>
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
