import { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import { UnitDataToShow } from '../interfaces';

export const UnitCard: FC<UnitDataToShow> = ({ description,id,name,topics }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[33%] lg:w-[49%] md:bg-red-00 lg:bg-blue-00 flex flex-col bg-white rounded-md p-2 border-2">
        <div className="w-full">
            <h2 className='text-3xl font-bold'>{name}</h2>
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
                    {topic.methods.map((methods, i) => (
                      <li 
                      key={i} 
                      onClick={() => navigate("/problem")}
                      className='p-2 bg-blue-500 my-1 cursor-pointer rounded-sm text-white'>
                        {methods.method_name}
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
