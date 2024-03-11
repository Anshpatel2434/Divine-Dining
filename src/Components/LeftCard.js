import React from 'react'
import CardDetails from './CardDetails'

const LeftCard = ({item}) => {
    const details = item.details;
  return (
    <div className="">
                    <h1 className=" text-red-400 menu-font font-bold -tracking-[2px] text-[40px]">{item.main}</h1>
    
                    <div className="flex justify-between relative space-x-[100px]">
    
                        {/* <!-- left part --> */}
                        <div className="">
                            <img src={item.img}  className="rounded-[100px]" alt="Food" height="700px" width="600px" loading="lazy"/>
                        </div>
    
                        {/* <!-- right part --> */}
                        <div className=' flex flex-col w-[50%] m-0 p-0 gap-2'>
                        {
                            details.map( (x) => {
                                return <CardDetails key={x.name} details = {x}/>
                            } )
                        }
                        </div>
                    </div>
    </div>
  )
}

export default LeftCard