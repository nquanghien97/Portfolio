import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from 'react-reveal/Fade';

export interface HomeProps {
}


export default function HomePage (props: HomeProps) {
  return (
    <>
      <div id="home" className="home bg-bg-home bg-no-repeat bg-cover bg-center bg-white border-gray-200 overflow-x-hidden mb-5">
        <Fade left>
          <div className="relative flex justify-center mx-auto w-[100vw] h-[100vh]">
            <div className="absolute inset-y-1/3 text-white w-3/4 flex flex-col justify-center items-center">
                <h4 className="font-medium leading-tight text-2xl mt-0 mb-4 uppercase">Hello</h4>
                <h1 className="font-medium leading-tight text-6xl mt-2 mb-2">I am NQH</h1>
                <h4 className="font-medium leading-tight text-2xl mt-2 mb-6">Front-end Developer</h4>
                <ul className="flex">
                  <div className="w-10 h-10 bg-slate-200/[0.4] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1">
                    <li>
                      <a href="https://www.facebook.com/nqhien97/">
                        <FacebookIcon />
                      </a>
                    </li>
                  </div >
                  <div className="w-10 h-10 bg-slate-200/[0.4] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1">
                    <li>
                      <a href="https://github.com/nquanghien97">
                        <GitHubIcon />
                      </a>
                    </li>
                  </div>
                  <div className="w-10 h-10 bg-slate-200/[0.4] flex justify-center items-center rounded-full cursor-pointer hover:bg-rose-500 mx-1">
                    <li>
                      <a href="https://www.linkedin.com/in/nquanghien97">
                        <LinkedInIcon />
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
          </div>
        </Fade>
      </div>
    </>
    
  );
}
