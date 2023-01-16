import React from 'react'

function Hero() {
  return (
    <div className='container flex flex-col-reverse md:flex-row space-x-3 items-center px-6 mx-auto
    mt-10'>
        <div className='flex flex-col space-y-10 md:w-1/2 '>
            <h1 className='text-DarkBlue max-w-md text-4xl font-bold text-center md:text-left md:text-5xl'>
                Bring Everyone together to build better products
            </h1>
            <p className='text-DarkGrayishBlue max-w-sm text-center md:text-left'>
                Manage makes it simple for software teams to plan 
                day-day tasks while keeping the larger team goals 
                in view
            </p>
            <div className='flex justify-center md:justify-start'>
                <button href="#" className='p-2 px-6 pt-2 bg-BrightRed rounded-full baseline text-white hover:bg-BrightRedLight'>
                    Get Started
                </button>
            </div>
            
        </div>
        <div className='max-w-1/2'>
            <img src="./images/illustration-intro.svg" alt="" />
        </div>
        
    </div>
  )
}

export default Hero