import React from 'react'
import LeftCard from './LeftCard'

const MenuItems = ({item}) => {

  return (
    <div className="relative flex items-center justify-center">
            <div className="w-11/12 max-w-[1080px]">
                <LeftCard item={item}/>
            </div>
        </div>
  )
}

export default MenuItems