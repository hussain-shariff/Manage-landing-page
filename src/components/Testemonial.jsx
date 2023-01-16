import React from 'react'

function Testemonial() {
  return (
    <>
        <h1 className='text-3xl font-bold text-DarkBlue text-center mt-10'>
            What they've said
        </h1>
        <div className='flex justify-center mt-10 px-5 md:justify-between'>
            <div className='hidden items-center w-60 md:flex md:flex-col'>
                <div>
                    <img className='w-12' src="./images/avatar-anisha.png" alt="img1" />
                </div>
                <h1 className='text-DarkBlue font-bold'>Anisha Li</h1>
                <p className='text-DarkGrayishBlue text-center'>"Manage has supercharged our team's workflow. 
                The maintain visibility on larger milestones at all times keeps everyone motivated."</p>
            </div>
            <div className='flex flex-col items-center w-60'>
                <div>
                    <img className='w-12' src="./images/avatar-ali.png" alt="img1" />
                </div>
                <h1 className='text-DarkBlue font-bold'>Ali Bravo</h1>
                <p className='text-DarkGrayishBlue text-center'>"We have been able to cancel so many other subscriptions since using Manage. 
                There is no more cross-channel confusion and everyone is much more focused."</p>
            </div>
            <div className='hidden items-center w-60  md:flex md:flex-col'>
                <div>
                    <img className='w-12' src="./images/avatar-richard.png" alt="img1" />
                </div>
                <h1 className='text-DarkBlue font-bold'>Richard Watts</h1>
                <p className='text-DarkGrayishBlue text-center'>"Manage allows us to provide structure and pro keeps us organized and focused. 
                I can't stop recor them to everyone I talk to!"</p>
            </div>
        </div>
        <div className='flex justify-center mt-20'>
            <button href="#" className='p-2 px-6 pt-2 bg-BrightRed rounded-full baseline text-white hover:bg-BrightRedLight'>
                Get Started
            </button>
        </div> 
    </>
  )
}

export default Testemonial