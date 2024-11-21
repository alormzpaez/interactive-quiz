import React from 'react'
import uanl from "../assets/img/uanl.png"
import fime from "../assets/img/fime.png"

export const Header = () => {
  return (
    <div className="w-full my-2 flex flex-col">
        <div className="w-full flex flex-row items-center justify-between">
            <div className="">
                <img className="h-[150px] bg-white" src={uanl} alt="" />
            </div>
            <div className="">
                <img className="h-[150px] bg-white" src={fime} alt="" />
            </div>
        </div>
        <div className="w-full text-center">
          <h1 className='font-bold text-xl'>Métodos Numéricos</h1>
          <h1>Catedrática: ORALIA ZAMORA PEQUEÑO</h1>
          <h1>N4,4 MN OR 003 A2024</h1>
        </div>
    </div>
  )
}