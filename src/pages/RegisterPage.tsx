
import { useNavigate } from 'react-router-dom';
import { Header, UnitCard } from '../components';
import { FaArrowLeft, FaChartLine } from 'react-icons/fa';
import { owners } from '../data/Owners';
import { OwnerCard } from '../components/OwnerCard';
import { useUser } from '../hooks/useUser';
import { useState } from 'react';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { startLoadingCloseSesssion, startCreatingUser, user } = useUser()
  const [userId,setUserId] = useState("")
  const [userPass,setUserPass] = useState("")
  return (
    <div className="w-full min-h-screen bg-blue-00 flex flex-col items-center">
        <div className="w-5/6">
          <Header/>
        </div>
        <div className="w-full flex flex-row items-center justify-around my-4">
        
        </div>
        <div className="w-5/6 flex flex-col gap-2 bg-blue-00 items-center justify-center p-2">
            <h1 className='font-bold text-2xl'>Registro</h1>
            

            <input className='border-gray-600 border-2  w-4/6 p-2 m-2 text-center rounded-md text-gray-700' type="text" name="" id="" onChange={(e) => setUserId(e.target.value)} placeholder='Introduce matrícula...'/>
            <input className='border-gray-600 border-2 w-4/6 p-2 m-2 text-center rounded-md text-gray-700' type="password" name="" id=""  onChange={(e) => setUserPass(e.target.value)} placeholder='Introduce contraseña...'/>
            <button 
               onClick={() => {
                    if(userId?.trim() === "" && userPass?.trim() === ""){
                      alert("Los campos deben ser válidos")
                      return;
                    }

                    startCreatingUser({
                      id: userId?.trim(),
                      password: userPass?.trim()
                    })
                    navigate("/")

                }}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Crear
              </button>
              <button 
               onClick={() => {
                    navigate("/")
                    
                }}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Volver
              </button>
            
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
