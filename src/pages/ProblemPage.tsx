import { FC, useEffect, useState } from 'react';
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

export const ProblemPage: FC<TitleProps> = ({ time, URL }) => {
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] = useState<number>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [image, setImage] = useState<string>();

  const { currentProblem, startCleaningProblem, saveNewProblemSolved, getImageForProblem } = useProblemsToSolve()
  const handleGetImage = async() => {
    let image = await getImageForProblem({
      method_id: currentProblem?.method_id || 0,
      problem_type: currentProblem?.type || 0,
      unit_id: currentProblem?.unit_id || ""
    });
    
    if(image){
      setImage(image)
    }
  }
  const handleCancelProblem = () => {
    startCleaningProblem()
    navigate("/")
  }
  const handleSubmitProblem = async() => {
    if(optionSelected === undefined) {
      alert("Por favor seleccione una opcion");
      return;
    }
    // TODO: Save problem solved and update state
    setShowAnswer(true)
    let res = await saveNewProblemSolved({
      unit_id: currentProblem?.unit_id || "",
      method_id: currentProblem?.method_id || 1,
      problem_type: currentProblem?.type || 1,
      solved_at: new Date().toISOString(),
      problem_answer: currentProblem?.options[optionSelected] || "",
      correct_answer: currentProblem?.correct_answer || "",
    });
    
    if(res){
      console.log("Problem Solved Correctly");
    }
    
  }

  useEffect(() => {
    handleGetImage()
    
  },[])

  return (
    <>
      <div className="w-screen p-5">
        <div className="flex flex-row place-content-between w-full border rounded-md p-5 border-gray-300">
          <h1 className="font-bold text-lg">{currentProblem?.unit_name} / {currentProblem?.method_name} / Tipo {currentProblem?.type}</h1>
          <h2>
            Tiempo Faltante: <span className="font-bold text-lg">{time}</span>
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
          <img className="h-[300px] border rounded-xl" src={image} alt="Problem Image" />
        </div>

        <div className="w-full">
          {currentProblem?.options?.map((answer, index) => (
            <div
              key={index}
              onClick={()=> setOptionSelected(index)}
              className={`p-3 my-2 border rounded-md cursor-pointer hover:bg-blue-500 hover:text-white ${
                showAnswer ? (
                  answer === currentProblem.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
                ) : optionSelected === index ? "bg-blue-500 text-white" : ""
              }`}
            >
              <span>{answer}</span>
              {
                showAnswer &&
                <span className="ml-2 font-bold">
                  {answer === currentProblem.correct_answer ? 'Correcta' : 'Incorrecta'}
                </span>
              }
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {
            showAnswer ? 
            (
              <button 
              onClick={handleCancelProblem}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Volver a inicio
              </button>
            )
            :
            (
              <button 
              onClick={handleSubmitProblem}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Aceptar
              </button>
            )
          }
          
        </div>
        <div className="w-full flex justify-center">
          {
            showAnswer &&
            (
              
                <div className={`p-3 my-2 border rounded-md  ${
                  
                    currentProblem?.options[optionSelected || 0] === currentProblem?.correct_answer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
                  
                }`}>
                  {currentProblem?.options[optionSelected || 0] === currentProblem?.correct_answer ? 'Tu respuesta fue Correcta' : 'Tu respuesta fue Incorrecta'}
                </div>
            ) 
          }
          
        </div>
      </div>
    </>
  );
};

