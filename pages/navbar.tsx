import React, { useState} from 'react';
import Image from 'next/image';
import logo from '../Assets/logo1.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, animateScroll as scroll } from "react-scroll"

export interface NavBarProps {

}
export default function NavBar (props: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const showSideMenu = () => {
        (isOpen) ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <>
            <div className="navbar fixed top-0 right-0 left-0 flex justify-center bg-gray-800 border-gray-200 z-10">
                <nav className="w-5/6 px-2 md:px-4 py-1 ">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div className="flex justify-center w-16 h-16 border border-black rounded-full bg-slate-300 pr-2">
                            <a href="#" className="flex items-center">
                                <Image
                                    src={logo} 
                                    width={50}
                                    height={50}
                                    className="mr-3 h-6 sm:h-9" 
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <button
                            onClick={()=>{showSideMenu()}}
                            data-collapse-toggle="mobile-menu"
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        {(isOpen) ? <CloseIcon className="scale-x-125" /> : <MenuIcon className="scale-x-125" /> }
                        </button>
                        {(isOpen) ? SideMenu() : ''}
                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
                                <li className="cursor-pointer text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                    <Link 
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <Link 
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <Link 
                                        activeClass="active"
                                        to="portfolio"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-xl block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <Link 
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
    }

    function SideMenu(){
        return(
            <div className="max-w-screen-lg fixed h-screen w-full right-0 bg-zinc-200/[0.6] -z-50 pt-4 px-4 md:w-1/4 md:hidden top-[72px]">
                <ul className="menu-list flex flex-col text-xs font-bold text-xl">
                    <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
                        <Link 
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
                    <Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                    </li>
                    <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
                    <Link 
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Portfolio
                    </Link>
                    </li>
                    <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
                    <Link 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                    </li>
                </ul>
            </div>
        )
    }
    
    