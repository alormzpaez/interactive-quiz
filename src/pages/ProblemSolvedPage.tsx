import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProblemsToSolve } from '../hooks';
import { FaClock } from 'react-icons/fa';

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

export const ProblemSolvedPage: FC<TitleProps> = ({ time, URL }) => {
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] = useState<number>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const { currentProblem, startCleaningProblem, saveNewProblemSolved } = useProblemsToSolve()
  const handleCancelProblem = () => {
    //startCleaningProblem()
    navigate("/stats")
  }
  
  return (
    <>
      <div className="w-screen p-5">
        <div className="flex flex-row place-content-between w-full border rounded-md p-5 border-gray-300">
          <h1 className="font-bold text-lg">{currentProblem?.unit_name} / {currentProblem?.method_name} / Tipo {currentProblem?.type}</h1>
          <h2>
            Problema resuelto: <span className="font-bold text-lg">{time}</span>
          </h2>
          {
            !showAnswer && (
              <button 
              onClick={() => handleCancelProblem()}
              className='p-2 bg-red-500 text-white font-bold rounded-md'>Cancelar</button>
            )
          }
          
        </div>

        <div className="w-full mt-4 p-5 border rounded-md flex  justify-center align-middle">
          <img className="w-3/6 h-full border rounded-xl" src={URL} alt="Problem Image" />
        </div>

        <div className="w-full">
          {currentProblem?.options?.map((answer, index) => (
            <div
              key={index}
              onClick={()=> setOptionSelected(index)}
              className={`p-3 my-2 border rounded-md cursor-pointer hover:bg-blue-500 hover:text-white ${
                answer === currentProblem.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
              }`}
            >
              <span>{answer}</span>
              
                <span className="ml-2 font-bold">
                  {answer === currentProblem.correct_answer ? 'Correcta' : 'Incorrecta'}
                </span>
              
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

