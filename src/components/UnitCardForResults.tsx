import { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UnitDataToShow } from '../interfaces';
import { useProblemsToSolve, useUnits } from '../hooks';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export const UnitCardForResults: FC<UnitDataToShow> = ({ description,id,name,topics }) => {
  
  const navigate = useNavigate();

  const { 
    getSolvedProblemsCountByMethod, 
    getSolvedProblemsCountByUnit, 
    getTotalProblemsCountByMethod, 
    getTotalProblemsCountByUnit,
    problemContents,
    startLoadingProblemSolved,

    getSolvedProblemsByUnitAndMethod,
    problemsGlobal
  } = useProblemsToSolve();
  const { units } = useUnits();

  const handleNavigate = async(method_id: number, type: number) => {
    

    const problemSolved = await getSolvedProblemsByUnitAndMethod(id, method_id).find(x => x.problem_type === type)
    const problemGlobal = problemsGlobal.find(p => p.unit_id === id && p.method_id === method_id && p.problems.some(x => x.type === type));
    
    if( problemGlobal ){
      startLoadingProblemSolved({
        unit_id: problemGlobal.unit_id,
        method_id: problemGlobal.method_id,
        type: type,
        correct_answer: problemSolved?.correct_answer || "",
        method_name: problemContents.find((x) => x.unit_id === id && x.methods.some(m => m.id === method_id))?.methods.find(x => x.id === method_id)?.method_name || "",
        options: problemGlobal.problems.find(x => x.type === type)?.options || [],
        unit_name: units.find(x => x.id === id)?.name || "",
        problem_answer: problemSolved?.problem_answer || "",
        solved_at: getDateFormatted(problemSolved?.solved_at || "") || "",

      });
      navigate("/problemSolved")
      return;
    }

    alert("Error al obtener el problema")
    
  }

  const getDateFormatted = (isoDateString: string) => {
    const date = new Date(isoDateString);

  // Formatear la fecha
    const formattedDate = date.toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // usa formato 24 horas
    });
    return formattedDate;
  }

  return (
    <div className="w-full bg-red-00 flex flex-col rounded-md p-2 border-2">
        <div className="w-full flex flex-row items-center justify-around">
            <h2 className='text-3xl font-bold'>{name}</h2>

            <h2 className='text-3xl font-bold'>
              {getSolvedProblemsCountByUnit(id)} / {getTotalProblemsCountByUnit(id)}
            </h2>
        </div>
        <div className="w-full">
            <p>{description}</p>
        </div>
        <div className="w-full">
          <h3 className='text-2xl font-bold'>Temas:</h3>
          <ul>
            {topics.map((topic, index) => (
              <li 
              key={index} 
              className=''>
                <div className="">
                  <TopicToShowToggle
                    topic={topic.topic}
                    subComponent={
                      <ul>
                        {topic.methods.map((method, i) => 
                        {
                          let solvedProblemsCountByMethod = getSolvedProblemsCountByMethod(id, method.id)
                          let totalProblemsCountByMethod = getTotalProblemsCountByMethod(id, method.id)
                          let solvedProblemsByUnitAndMethod = getSolvedProblemsByUnitAndMethod(id, method.id)
                          if(solvedProblemsByUnitAndMethod?.length === 0){
                            return null;
                          }
    
                          return(
                              <li 
                              key={i} 
                              //onClick={() => handleNavigate(method.id)}
                              className='p-2 bg-blue-00 border-2 my-1 cursor-pointer rounded-sm'>
                                <div className="">
    
                                  <h4 className='text-xl font-bold text-blue-500'>{method.method_name}</h4>
                                  <h4 className=' text-end'>
                                    {solvedProblemsCountByMethod} / {totalProblemsCountByMethod}
                                  </h4>
                                </div>
                                <div className="w-full">
                                  <table className='w-full '>
                                    <thead>
                                      <tr>
                                        <th className='text-center'>Tipo</th>
                                        {/* <th className='text-center'>Respuesta correcta</th> */}
                                        <th className='text-center'>Respuesta elegida</th>
                                        <th className='text-center'>Fecha de resolución</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    {
                                      solvedProblemsByUnitAndMethod?.map((p, pI) => {
                                        return(
                                          <tr 
                                          key={pI} 
                                          onClick={() => handleNavigate(method.id, p.problem_type, )}
                                          className={`hover:bg-blue-500 hover:text-white text-gray-800
                                            ${"" /*p?.problem_answer === p?.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500' */}
                                          `}>
                                            <td className=' text-center'>{p.problem_type}</td>
                                            {/* <td className=' text-center'>{p.correct_answer}</td> */}
                                            <td className=' text-center'>{p.problem_answer}</td>
                                            <td className=' text-center'>{getDateFormatted(p.solved_at)}</td>
                                          </tr>
                                          
                                        )
                                      })
                                    }
                                    </tbody>
                                  </table>
                                  
                                </div>
                              </li>
                            )
                          }
                        )}
                      </ul>
                    }
                  />
                  
                </div>
                
              </li>
            ))}
          </ul>
        </div>
        
    </div>
  )
}

interface TopicToShowToggleProps {
  topic: string;
  subComponent: ReactElement;
}
const TopicToShowToggle: FC<TopicToShowToggleProps> = ({subComponent, topic}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return(
    <div className="w-full flex flex-col my-2">
      <div className="w-full flex items-center justify-between">
        <div className="">
          <h4 className='text-2xl text-center'>{topic}</h4>
        </div>
        <div className="">
          <button 
          onClick={handleToggle}
          className='rounded-full bg-gray-300 p-3'>
            {
              isOpen? <FaArrowUp/> : <FaArrowDown/>
            }
          </button>
        </div>
      </div>
      <div className="w-full">
        {isOpen && subComponent}
      </div>
    </div>
  );
}