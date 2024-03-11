import React from 'react'

const Part2 = () => {
  return (
    <div className='h-screen part2 relative -mt-7 p-0'>
        <img src='overlap12.jpg' className='overlap12' />
        <img src='thali-bg.png' className='thali'/>
        <img src='arrow.svg' className='arrow'/>
        <div className='h2 absolute z-10'>
            SOME TEXT ABOUT<br/> THE DISH
        </div>
        <p className='p absolute z-10'>
        It’s the question that fires us up every day at BuffBurger. We’re proud Houstonians creating and hand-crafting burgers from the finest, freshest and all-natural ingredients, cooking them to order the true Texan way. And we take our time to prepare everything in house, from scratch… while still busting our buns to have your meal ready in minutes.
        </p>

        {/* <!-- What makes us unique home + Opening hours --> */}
        
    </div>
  )
}

export default Part2