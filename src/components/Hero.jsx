import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center text-center justify-center max-w-[900px] w-full mx-auto p-4'>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-sm, sm:text-2xl font-medium'>IT'S TIME TO GET</p>
          <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>💪 SMOL💪</h1>

        </div>
        <p className='text-sm, sm:text-2xl font-medium'>
        Hey there, <span className='text-teal-950 font-extrabold'>SMOLDIER!</span> 
        <br></br>Ready to unleash your inner beast and crush your gym goals? 
        <br></br>
        At <span className='text-teal-950 font-extrabold'>SMOL</span><span className='text-lime-200 font-extrabold'>BOIS</span>, we're all about turning sweat into strength, and dreams into reality.
        <br></br>
        Whether you're pumping iron for the first time or a seasoned gymbro, 
        <br></br>our app is your ultimate <span className='text-teal-950 font-extrabold'>SPOTTER</span> on this <span className='text-lime-200 font-extrabold'>EPIC</span> fitness journey. 
        <br></br>
        Track your gains, set those PRs, and watch yourself go <span className='text-teal-950 font-extrabold'>BEAST</span><span className='text-lime-200 font-extrabold'>MODE</span>!
        <br></br>
        <span className= 'font-medium'>Join us today</span>!
      </p>
      <Button func={()=> {
        window.location.href = '#generate'
      }}text={'Let\'s Get Started'}></Button>
    </div>
  )
}
