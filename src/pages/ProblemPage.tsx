import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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

export const ProblemPage: FC<TitleProps> = ({ QuestionNumber, time, URL, Answers }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen p-5">
        <div className="flex flex-row place-content-between w-full border rounded-md p-5 border-gray-300">
          <h1 className="font-bold text-lg">Pregunta #{QuestionNumber}</h1>
          <h2>
            Tiempo Faltante: <span className="font-bold text-lg">{time}</span>
          </h2>
          <button 
          onClick={() => navigate("/")}
          className='p-2 bg-red-500 text-white font-bold rounded-md'>Cancelar</button>
        </div>

        <div className="w-full mt-4 p-5 border rounded-md flex  justify-center align-middle">
          <img className="w-2/3 h-full border rounded-xl" src={URL} alt="Problem Image" />
        </div>

        <div className="w-full">
          {Answers.map((answer, index) => (
            <div
              key={index}
              className={`p-3 my-2 border rounded-md ${
                answer.isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
              }`}
            >
              <span>{answer.text}</span>
              <span className="ml-2 font-bold">
                {answer.isCorrect ? 'Correcta' : 'Incorrecta'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

