import { useState } from "react"
import { CROSS_ICON } from "../utils/Constant"
import { MENU } from '../utils/Constant.js'

const Sidebar = ({toggle}) => {

    return (
        <div className={`h-full w-[350px] absolute top-0 right-0 flex flex-col px-8 pt-8 bg-[#FAF6F3]`}>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-serif font-bold">MENU</p>
                <img className="h-[40px] w-[40px] cursor-pointer" src={CROSS_ICON} onClick={()=>{toggle(false)}}></img>
            </div>

            <ul className="mt-10 h-[350px] flex flex-col items-start justify-around">
                {
                    MENU.map((option,index)=>(
                        <h1 key={index} className="h-[50px] w-full text-2xl font-serif border-b-1 cursor-pointer">{option}</h1>
                    ))
                }
            </ul>

            <button className="py-2 relative top-50 bg-amber-700 text-white">Enquire Now</button>
        </div>
    )
}

export default Sidebar