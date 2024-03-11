import React, { useState } from 'react'
import MenuNav from '../Components/MenuNav'
import MenuItems from '../Components/MenuItems'
import soup from '../Data/soup'

const Menu = () => {

    const [item, setItem] = useState(soup);

  return (
    <div className = "absolute bg-[#FFE4C4] w-[100vw] top-0 flex flex-col items-center justify-center">
        
        {/* menu's navbar  */}
        <MenuNav setItem={setItem}/>

{/* <!-- Menu --> */}
        <MenuItems item={item}/>

    </div>
  )
}

export default Menu