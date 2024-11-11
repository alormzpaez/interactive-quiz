import { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import { UnitDataToShow } from '../interfaces';
import { useProblemsToSolve } from '../hooks';
import { CurrentProblemShowing } from '../interfaces/ProblemSlice';

export const UnitCard: FC<UnitDataToShow> = ({ description,id,name,topics }) => {
  const navigate = useNavigate();
  const { 
    getSolvedProblemsCountByMethod, 
    getSolvedProblemsCountByUnit, 
    getTotalProblemsCountByMethod, 
    getTotalProblemsCountByUnit,
    startLoadingProblem,
    getUnsolvedProblem
  } = useProblemsToSolve();
  
  const handleNavigate = async(method_id: number) => {
    

    const problem = await getUnsolvedProblem(id, method_id)
    if( problem ){
      startLoadingProblem(problem);
      navigate("/problem")
      return;
    }

    alert("Ya no hay problemas disponibles para la unidad y metodo")
    
  }
  return (
    <div className="w-full bg-white md:w-[33%] lg:w-[49%] md:bg-red-00 lg:bg-blue-00 flex flex-col rounded-md p-2 border-2">
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
                  <h4 className='text-xl text-center'>{topic.topic}</h4>
                  <ul>
                    {topic.methods.map((method, i) => (
                      <li 
                      key={i} 
                      onClick={() => handleNavigate(method.id)}
                      className='p-2 bg-blue-00 border-2 my-1 cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white'>
                        <h4 className=''>{method.method_name}</h4>
                        <h4 className=' text-end'>
                          {getSolvedProblemsCountByMethod(id, method.id)} / {getTotalProblemsCountByMethod(id, method.id)}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
        
    </div>
  )
}
