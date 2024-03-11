import React, { useState } from 'react'
import soup from '../Data/soup';
import salad from '../Data/salad';
import south from '../Data/south';
import north from '../Data/north';
import drinks from '../Data/drinks';
import chinese from '../Data/chinese';
import italian from '../Data/italian';

const MenuNav = ({setItem}) => {

    const [select, setSelect] = useState(soup.main);
  return (
        <div className="w-11/12 transition-all duration-1000 flex flex-col items-center relative">
            <h1 className="text-blue-950 font-extrabold text-[60px] head1">DIVINE DINING MENU</h1>

            <nav className=" flex justify-center cursor-pointerw-11/12 max-w-[1080px] cursor-pointer">
                <div onClick={ () => {
                    setItem(soup)
                    setSelect(soup.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] text-[#80651c]
                ${(soup.main === select)? 'bg-[#FFE4C4] border-b-[#FFE4C4]' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p className=''>Soup</p>
                </div>
                <div onClick={ () => {
                    setItem(salad)
                    setSelect(salad.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(salad.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>Salad</p>
                </div>
                <div onClick={ () => {
                    setItem(chinese)
                    setSelect(chinese.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(chinese.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>Chinese</p>
                </div>
                <div onClick={ () => {
                    setItem(north)
                    setSelect(north.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(north.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>North Indian</p>
                </div>
                <div onClick={ () => {
                    setItem(italian)
                    setSelect(italian.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(italian.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>Italian</p>
                </div>
                <div onClick={ () => {
                    setItem(south)
                    setSelect(south.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(south.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>South Indian</p>
                </div>
                <div onClick={ () => {
                    setItem(drinks)
                    setSelect(drinks.main)} } 
                className={`flex items-center justify-center p-20px h-[50px] w-[110px]
                border-l-blue-950 border-r-blue-950 border-t-blue-950 border-[1px] font-medium text-[#80651c]
                ${(drinks.main === select)? 'bg-[#FFE4C4] border-b-0' : 'bg-[#dec195] border-b-blue-950' }`}>
                    <p>Drinks</p>
                </div>
            </nav>
        </div>
  )
}

export default MenuNav