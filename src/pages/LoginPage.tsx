
import { useNavigate } from 'react-router-dom';
import { Header, UnitCard } from '../components';
import { FaArrowLeft, FaChartLine } from 'react-icons/fa';
import { owners } from '../data/Owners';
import { OwnerCard } from '../components/OwnerCard';
import { useUser } from '../hooks/useUser';
import { useState } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { startLoadingCloseSesssion, startLoadingUser, user } = useUser()
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
            <h1 className='font-bold text-2xl'>Login</h1>
            

            <input className='border-gray-600 border-2  w-4/6 p-2 m-2 text-center rounded-md text-gray-700' type="" onChange={(e) => setUserId(e.target.value)} placeholder='Introduce Usuario'/>
            <input className='border-gray-600 border-2 w-4/6 p-2 m-2 text-center rounded-md text-gray-700' type="password"  onChange={(e) => setUserPass(e.target.value)} placeholder='Introduce Contraseña'/>
            <button 
               onClick={() => {
                    if(userId?.trim() === "" && userPass?.trim() === ""){
                      alert("Los campos deben ser válidos")
                      return;
                    }
                    startLoadingUser({
                      id: userId?.trim(),
                      password: userPass?.trim()
                    })
                    // alert("Entrarase...")
                }}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Ingresar
              </button>
              <button 
               onClick={() => {
                    navigate("/register")
                    
                }}
              className='w-4/6 rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3'>
                Crear cuenta
              </button>
            
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
