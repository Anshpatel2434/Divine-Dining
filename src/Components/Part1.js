import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const Part1 = () => {
  return (
    <div className='h-[100vh] bg-cover overflow-hidden flex justify-center items-center'>

        {/* some text and logos */}
        <div className='absolute z-20 flex justify-between w-11/12 h-[500px]'>

            {/* text and button  */}
            <div className=' flex items-start justify-center flex-col'>
                <p className='home_text'>SOME TEXT<br/> 
                ABOUT THE RESTAURENT</p>
                <button>Button</button>
            </div>

            {/* logos  */}
            <div className='flex flex-col gap-3 absolute z-10 bottom-0 right-0'>
                <FaFacebook className='w-[25px] h-[25px] text-white'/>
                <ImInstagram className='w-[25px] h-[25px] text-white'/>
                <FaTwitter className='w-[25px] h-[25px] text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Part1