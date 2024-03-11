import React, { useState } from 'react'
import { FaHandPointRight } from "react-icons/fa";

const CardDetails = ({details}) => {
    const name = details.name
    const description = details.description
    const price = details.price
    const inner = details.inner
    details["selected"] = false

    const [hover, setHover] = useState(false);

    async function addToast(){
        
    }
        

  return (
    <div className={`font-oswald flex flex-col justify-start relative w-[105%] h-[160px] cursor-pointer 
    hover:scale-105 transition-all duration-700rounded-xl`} 
    onMouseOver={ () => setHover(true)} 
    onMouseOut={ () => setHover(false)}>
    {
        hover && 
        <div className={`z-10 popup-box flex flex-col justify-center items-center gap-2`}    
        onMouseOver={ () => setHover(true)} 
        onMouseOut={ () => setHover(false)}>
            <img src={inner} className='w-[170px] h-[130px] rounded-2xl bg-contain'/>
            <button className={`btn relative`} onClick={() => addToast()}>Add To Cart</button> 
        </div>
    }
                                <div className="flex flex-row justify-between w-[100%] p-[10px]">
                                    <div className="flex justify-between items-baseline gap-2">
                                        <FaHandPointRight className="h-[20px] w-[20px]"/>
                                        <p className="font-extrabold text-blue-950 tracking-normal text-xl">{name}</p>
                                    </div>
                                    <p className="text-blue-950 tracking-normal text-xl pr-[20px]">{price}</p>
                                </div>
                                <div className="">
                                    <p className="text-blue-950 tracking-normal text-lg font-light text-left pr-[20px]">{description}</p>
                                </div>
    </div>
  )
}

export default CardDetails