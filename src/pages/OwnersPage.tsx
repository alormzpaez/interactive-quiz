
import { useNavigate } from 'react-router-dom';
import { Header, UnitCard } from '../components';
import { FaArrowLeft, FaChartLine } from 'react-icons/fa';
import { owners } from '../data/Owners';
import { OwnerCard } from '../components/OwnerCard';

export const OwnersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-blue-00 flex flex-col items-center">
        <div className="w-5/6">
          <Header/>
        </div>
        <div className="w-full flex flex-row items-center justify-around my-4">
            
            <div className="">

              <h1 className="font-bold text-2xl text-gray-600">Este problemario fue elaborado por:</h1>
              <h2 className="font-bold text-2xl text-gray-600">Equipo 3</h2>
            </div>
            <button 
            onClick={() => {
              navigate("/")
              //resetProblemsSolved()
            }}
            className="p-2 rounded-sm bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold flex flex-row items-center justify-center gap-2 flex-nowrap">  <FaArrowLeft/> Volver</button>
        
        </div>
        <div className="w-5/6 flex flex-row flex-wrap bg-blue-00 gap-1 justify-center p-2">
            {
              owners.map((unit) => (
                <OwnerCard 
                  key={unit.id} 
                  id={unit.id}
                  name={unit.name} 
                  carrer={unit.carrer} 
                  email={unit.email}
                />
              ))
            }
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
