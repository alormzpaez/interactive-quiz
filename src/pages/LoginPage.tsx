
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
{/*             
            <div className="">

              <h1 className="font-bold text-2xl text-gray-600">Este problemario fue elaborado por:</h1>
              <h2 className="font-bold text-2xl text-gray-600">Equipo 3</h2>
            </div>
            <button 
            onClick={() => {
              navigate("/")
              //resetProblemsSolved()
            }}
            className="p-2 rounded-sm bg-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold flex flex-row items-center justify-center gap-2 flex-nowrap">  <FaArrowLeft/> Volver</button> */}
        
        </div>
        <div className="w-5/6 flex flex-row flex-wrap bg-blue-00 gap-1 justify-center p-2">
            <span>Login</span>
            <input type="text" name="" id="" onChange={(e) => setUserId(e.target.value)} placeholder='Introduce matricula...'/>
            <input type="password" name="" id=""  onChange={(e) => setUserPass(e.target.value)} placeholder='Introduce password...'/>
            <input type="submit" value="Entrar" onClick={() => {
                navigate("/units")
                startLoadingUser({
                  id: userId,
                  password: userPass
                })
                // alert("Entrarase...")
            }}/>
            
        </div>
        <div className="w-full my-2"></div>
    </div>
  )
}
