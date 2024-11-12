import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProblemsToSolve } from '../hooks';
import { FaArrowLeft } from 'react-icons/fa';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface TitleProps {
  QuestionNumber: number;
  time: string;
  URL: string;
  Answers: Array<Answer>;
}

export const ProblemSolvedPage: FC<TitleProps> = ({ URL }) => {
  const navigate = useNavigate();
  
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const { currentProblemSolved, startCleaningProblemSolved, getImageForProblem  } = useProblemsToSolve();
  const [image, setImage] = useState<string>();

  const handleGetImage = async() => {
    let image = await getImageForProblem({
      method_id: currentProblemSolved?.method_id || 0,
      problem_type: currentProblemSolved?.type || 0,
      unit_id: currentProblemSolved?.unit_id || ""
    });
    
    if(image){
      setImage(image)
    }
  }

  const handleCancelProblem = () => {
    startCleaningProblemSolved();
    navigate("/stats");

  }


  useEffect(() => {
    handleGetImage()
    
  },[])
  
  return (
    <>
      <div className="w-screen p-5">
        <div className="flex flex-row place-content-between w-full border rounded-md p-5 border-gray-300">
          <h1 className="font-bold text-lg">{currentProblemSolved?.unit_name} / {currentProblemSolved?.method_name} / Tipo {currentProblemSolved?.type}</h1>
          <h2>
            Problema resuelto el: <span className="font-bold text-lg">{currentProblemSolved?.solved_at}</span>
          </h2>
          {
            !showAnswer && (
              <button 
              onClick={() => handleCancelProblem()}
              className="p-2 rounded-sm bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold flex flex-row items-center justify-center gap-2 flex-nowrap">  <FaArrowLeft/> Volver</button>
            )
          }
          
        </div>

        <div className="w-full mt-4 p-5 border rounded-md flex  justify-center align-middle">
          <img className="h-[300px] border rounded-xl" src={image} alt="Problem Image" />
        </div>

        <div className="w-full">
          {currentProblemSolved?.options?.map((answer, index) => (
            <div
              key={index}
              className={`p-3 my-2 border rounded-md ${
                answer === currentProblemSolved.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
              }`}
            >
              <span>{answer}</span>
              
                <span className="ml-2 font-bold">
                  {answer === currentProblemSolved.correct_answer ? 'Correcta' : 'Incorrecta'}
                </span>
              
            </div>
          ))}
        </div>
        
        <div className="w-full">
            <div
              className={`p-3 my-2 border rounded-md bg-blue-00 text-center`}
            >
              <span className='font-bold'>Tu respuesta</span>
              
              
            </div>
          
        </div>

        <div className="w-full">
            <div
              className={`p-3 my-2 border rounded-md bg-blue-500 text-white `}
            >
              <span>{currentProblemSolved?.problem_answer}</span>
              
            </div>
          
        </div>
        <div className="w-full flex justify-center">
          
                <div className={`p-3 my-2 border rounded-md  ${
                  
                    currentProblemSolved?.problem_answer === currentProblemSolved?.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
                  
                }`}>
                  {currentProblemSolved?.problem_answer === currentProblemSolved?.correct_answer ? 'Tu respuesta fue Correcta' : 'Tu respuesta fue Incorrecta'}
                </div>
           
          
        </div>
        
      </div>
    </>
  );
};

