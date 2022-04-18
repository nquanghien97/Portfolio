import React from 'react';
import Fade from 'react-reveal/Fade';

export interface AboutProps {
}

export default function About (props: AboutProps) {
  return (
    <>
    <Fade left>
      <div id="about" className="bg-no-repeat bg-cover bg-center bg-white border-gray-200">
        <div className="flex justify-center items-center md:flex-row flex-col mx-auto w-[100vw] py-16 w-3/4">
          <div className="flex items-center md:flex-1">
            <div className="inset-y-1/3 text-white flex flex-col">
              <h1 className="font-medium leading-tight text-6xl mt-2 mb-2 text-black">
                About me
              </h1>
              <h4 className="font-medium leading-tight text-xl mt-0 mb-8 text-black">
                Front-End Developer
              </h4>
              <p className="text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="flex justify-center bg-sky-800 border border-black md:px-10 px-4 py-4 md:mr-4 md:my-8 my-4 cursor-pointer rounded hover:bg-amber-500 hover:border-black hover:text-black">
                  <a className="">Hire Me</a>
                </div>
                <div className="flex justify-center bg-sky-800 border border-black md:px-10 px-4 py-4 md:mr-4 md:my-8 my-4 cursor-pointer rounded hover:bg-amber-500 hover:border-black hover:text-black">
                  <a className="">Download CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 text-black">
            abc
          </div>
        </div>
      </div>
    </Fade>
    </>
  );
}
