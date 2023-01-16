import React, { useState } from 'react'

function Nav() {
    const [isOpen, setIsopen] = useState(false);
    return (
        <nav className='relative container mx-auto p-6'>
            <div className="flex items-centre justify-between">
                <div className="pt-2">
                    <img className='hover:cursor-pointer' src="./images/logo.svg" alt="logo" />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className='hover:text-DarkGrayishBlue'>Pricing</a>
                    <a href="#" className='hover:text-DarkGrayishBlue'>Product</a>
                    <a href="#" className='hover:text-DarkGrayishBlue'>About Us</a>
                    <a href="#" className='hover:text-DarkGrayishBlue'>Careers</a>
                    <a href="#" className='hover:text-DarkGrayishBlue'>Community</a>
                </div>
                <a href="#footer" id='header'
                className='hidden md:block p-2 px-6 pt-2 bg-BrightRed rounded-full baseline text-white hover:bg-BrightRedLight'
                >Get Started</a>
                <img className='hover:cursor-pointer md:hidden h-5' onClick={()=>setIsopen(!isOpen)} src={`./images/icon-${isOpen?'close':'open'}.svg`} alt="hamburger" />
            </div>
            <div className="md:hidden">
                <div className={`${isOpen ? 'block' : 'hidden'} absolute flex flex-col text-center mx-auto self-end py-8 mt-10 space-y-6
                font-bold bg-white left-6 right-6 drop-shadow-xl text-VeryDarkBlue text-sm sm:w-auto sm:self-center`}>
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                </div>
            </div>
        </nav>
    )
    }

export default Nav
