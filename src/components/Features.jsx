import React from 'react'

function Features() {
  return (
    <div className='container flex flex-col mx-auto px-4 mt-10 space-y-14 md:flex-row 
    md:space-y-0 md:justify-between'>
        <div className=' flex flex-col space-y-10 md:w-1/2'>
            <h1 className='text-DarkBlue text-4xl font-bold max-w-md text-center md:text-left'>
                What's different about Manage?
            </h1>
            <p className='text-DarkGrayishBlue max-w-sm text-center md:text-left'>
                Manage provides all the functionality your team needs without the complexity.
                Our software is tailor-made for modern digital digital teams.
            </p>
        </div>
        <div className='flex flex-col space-y-8 md:w-1/2'>
            <div className='flex md:space-x-5 '>
                <div>
                    <div className='p-1 px-5 bg-BrightRed text-white font-bold rounded-full'>01</div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-DarkBlue font-bold text-center md:text-left'>
                        Track company wise progress
                    </h1>
                    <p className='text-DarkGrayishBlue text-sm text-center  md:text-left'>
                    See how your day-to-day tasks fit into the wider vision. 
                    Go from tracking progress at the milestone level all the way done to the smallest of details. 
                    Never lose sight of the bigger picture again.
                    </p>
                </div>
            </div>

            <div className='flex md:space-x-5'>
                <div>
                    <div className='p-1 px-5 bg-BrightRed text-white font-bold rounded-full'>02</div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-DarkBlue font-bold text-center md:text-left'>
                        Advanced built-in reports
                    </h1>
                    <p className='text-DarkGrayishBlue text-sm text-center md:text-left'>
                    Set internal delivery estimates and track progress toward company goals. 
                    Our customisable dashboard helps you build out the reports you need to keep key stakeholders
                    informed.
                    </p>
                </div>
            </div>

            <div className='flex md:space-x-5'>
                <div>
                    <div className='p-1 px-5 bg-BrightRed text-white font-bold rounded-full'>03</div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-DarkBlue font-bold text-center md:text-left'>
                        Everything you need in one place
                    </h1>
                    <p className='text-DarkGrayishBlue text-sm text-center md:text-left'>
                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. 
                    Manage offers an all-in-one team productivity solution.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features