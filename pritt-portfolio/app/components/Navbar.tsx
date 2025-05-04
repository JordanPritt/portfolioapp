import React from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50">
                <a href="#top">
                    <span className='font-bold'>Jordan Pritt</span>
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li>
                        <a className="font-ovo" href="#top">Home</a>
                    </li>
                    <li>
                        <a className='font-ovo' href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='font-ovo' href="#services">Services</a>
                    </li>
                    <li>
                        <a className='font-ovo' href="#work">My Work</a>
                    </li>
                    <li>
                        <a className='font-ovo' href="#contact">Contact Me</a>
                    </li>
                </ul>

                <div
                    className='hidden lg:flex items-center gap-3 rounded-full
                    px-10 py-2.5 border border-gray-500 ml-4'>
                    <a href="#contact" className="flex items-center gap-2">
                        Contact <MdOutlineArrowOutward/>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;