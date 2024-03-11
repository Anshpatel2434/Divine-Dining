import React from 'react'
import Part1 from '../Components/Part1';
import Part2 from '../Components/Part2';

const Home = () => {
  return (
    <div>
        <video autoPlay loop muted className=' absolute -z-50 top-0'>
            <source src='v.mp4' type="video/mp4"/>
        </video>
        <Part1/>
        <Part2/>
    </div>
  )
}

export default Home