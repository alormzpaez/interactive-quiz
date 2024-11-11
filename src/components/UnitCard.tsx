import { useNavigate } from 'react-router-dom'

export const UnitCard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[33%] lg:w-[49%] md:bg-red-00 lg:bg-blue-00 flex flex-col bg-white rounded-md p-2 border-2">
        <div className="w-full">
            <h2 className='text-2xl font-bold'>Unidad</h2>
        </div>
        <div className="w-full">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure corporis, dolore tempora quis eligendi voluptates id. Tempore libero optio expedita eos perspiciatis mollitia fuga obcaecati culpa numquam, odio cumque accusantium?</p>
        </div>
        <button 
        onClick={() => navigate("/problem")}
        className='p-2 bg-blue-400 rounded-sm'>Practicar</button>
    </div>
  )
}
