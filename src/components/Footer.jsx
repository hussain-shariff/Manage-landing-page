import React from 'react'

function Footer() {
  return (
    <>
    <div className='mt-44 bg-BrightRed flex justify-center p-10'>
        <div className="container flex flex-col items-center text-center space-y-3 md:flex-row md:justify-between md:text-left">
            <h1 className='font-bold text-2xl text-white md:w-1/3'>Simplify how your team works today.</h1>
            <a href="#header" id='footer' className='p-2 px-6 pt-2 bg-white rounded-full baseline text-BrightRed hover:bg-BrightRedLight hover:text-VeryPaleRed'>
                Get Started
            </a>
        </div>
    </div>
    <div className='bg-VeryDarkBlue'>
        <div className="container text-white flex flex-col-reverse  justify-between space-y-8 mx-auto px-6 py-10
        md:flex-row md:space-y-0">
            
            <div className="pt-2 flex flex-col-reverse items-center space-y-10 md:flex-col">
                <img className='hover:cursor-pointer w-40 mt-10 md:mt-0' src="./images/logo.svg" alt="logo" />
                <div className='flex justify-center space-x-4'>
                    <img className='hover:cursor-pointer' src="./images/icon-instagram.svg" alt="logo" />
                    <img className='hover:cursor-pointer' src="./images/icon-facebook.svg" alt="logo" />
                    <img className='hover:cursor-pointer' src="./images/icon-pinterest.svg" alt="logo" />
                    <img className='hover:cursor-pointer' src="./images/icon-twitter.svg" alt="logo" />
                    <img className='hover:cursor-pointer' src="./images/icon-youtube.svg" alt="logo" />
                </div>
            </div>
            
            <div className='flex justify-center space-x-40 '>
                <div className='flex flex-col justify-center space-y-2 text-sm'>
                    <a href='#'>Home</a>
                    <a href='#'>Products</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>About us</a>
                </div>

                <div className='flex flex-col space-y-2 text-sm'> 
                    <a href='#'>Careers</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Community</a>
                </div> 
            </div>

            <div className='flex flex-col justify-between items-center'>
                <div>
                    <input className='p-2 rounded-full mr-2 text-sm ' type="text" placeholder='updates in your inbox...' />
                    <a className='p-2 px-4 bg-BrightRed rounded-full ' href="#">Go</a>
                </div>
                <p className='hidden text-sm text-DarkGrayishBlue md:block'>Copyrights 2023.All rights reserved.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer