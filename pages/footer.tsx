import React from 'react';
import logo from '../Assets/logo1.png';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export interface FooterProps {
}

export default function Footer (props: FooterProps) {
  return (
    <div className="footer bg-indigo-900 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="logo flex justify-center my-2 w-16 h-16 border border-black rounded-full bg-slate-300 m-auto mt-2 pr-2">
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
            <div className="flex justify-center my-2">
                <ul className="flex">
                    <div className="w-10 h-10 bg-white/[.7] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1 pb-1">
                        <li>
                            <a href="https://www.facebook.com/nqhien97/">
                            <FacebookIcon />
                            </a>
                        </li>
                    </div >
                    <div className="w-10 h-10 bg-white/[.7] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1 pb-1">
                        <li>
                            <a href="https://github.com/nquanghien97">
                            <GitHubIcon />
                            </a>
                        </li>
                    </div>
                    <div className="w-10 h-10 bg-white/[.7] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1 pb-1">
                        <li>
                            <a href="https://www.linkedin.com/in/nquanghien97">
                            <LinkedInIcon />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="flex justify-center my-2">
                <p className="text-white">Made by Nguyen Quang Hien</p>
            </div>
            <div className="flex justify-center mt-2 mb-4">
                <p className="text-white">© 2022 NQUANGHIEN - ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </div>
  );
}
