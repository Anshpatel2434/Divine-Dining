import React from 'react'

const RightCard = () => {
  return (
    <div className="space-y-10">
                    <h1 className=" text-red-400 menu-font font-bold -tracking-[2px] text-[40px]">SPECIALS</h1>
    
                    <div className="flex items-start relative space-x-[100px]">
    
                        {/* <!-- left part --> */}
                        <div className="font-oswald flex flex-col max-w-[500px] space-y-8">
                            <div>
                                <div className="flex flex-row justify-between space-x-8">
                                    <div className="flex items-start justify-start space-x-2">
                                        <img src="./images/pointing-right-finger-svgrepo-com.svg" alt="" className="stroke-slate-900" width="20px" loading="lazy"/>
                                        <p className="font-extrabold text-blue-950 tracking-normal text-xl">SMOKED BABY BACK DUROC PORK RIBS (GF)</p>
                                    </div>
                                    <p className="text-blue-950 tracking-normal text-xl">$16.75</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-blue-950 tracking-normal text-lg">Available Sunday & Monday starting at 4pm</p>
                                    <p className="text-blue-950 tracking-normal text-lg font-light">pickled carrot, green onion</p>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex flex-row justify-between space-x-8">
                                    <div className="flex items-start justify-start space-x-2">
                                        <img src="./images/pointing-right-finger-svgrepo-com.svg" alt="" className="stroke-slate-900" width="20px" loading="lazy"/>
                                        <p className="font-extrabold text-blue-950 tracking-normal text-xl">MISO-CHILI TONKOTSU</p>
                                    </div>
                                    <p className="text-blue-950 tracking-normal text-xl">$18</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-blue-950 tracking-normal text-lg">Available Tuesday & Wednesday 4pm onwards</p>
                                    <p className="text-blue-950 tracking-normal text-lg font-light flex flex-col">charred bok choy, scallions, sun noodle, sesame, ajitama egg
                                        <span>Choice of: Smoked Sliced Brisket or Post Oak Grilled Prawn</span></p>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- right part --> */}
                        <div className="">
                            <img src="menu-img.webp" className="rounded-[100px]" alt="Food" height="700px" width="600px" loading="lazy"/>
                        </div>
                        
                    </div>
                </div>
  )
}

export default RightCard