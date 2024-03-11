import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigation = useNavigate();

  return (
    <div id='navbar' className=' flex justify-between w-11/12 font-extrabold font-customFont items-center h-[130px]'>
      {/* left logo or heading */}
      <div>
        <img src='logo.png' className='w-[120px] h-[120px]'/>
      </div>

      {/* right side all the options  */}
      <nav>
          <ul className=' flex gap-x-6 cursor-pointer'>

            <li onClick={() => navigation('/home')}>
              HOME
            </li>
            <li onClick={() => navigation('/menu')}>
            MENU
            </li>

            {/* can be buttons or text  */}
            <li onClick={() => navigation('/login')}>
            LOGIN
            </li>
            <li onClick={() => navigation('/signup')}>
            SIGNUP
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar