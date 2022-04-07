import React from 'react';

export interface AboutProps {
}

export default function About (props: AboutProps) {
  return (
    <>
      <div id="about" className="about bg-bg-home bg-no-repeat bg-cover bg-center bg-white border-gray-200">
        <div className="flex justify-center items-center md:flex-row flex-col mx-auto w-[100vw] h-[100vh] w-3/4">
          <div className="flex items-center md:flex-1">
            <div className="inset-y-1/3 text-white flex flex-col">
              <h1 className="font-medium leading-tight text-6xl mt-2 mb-2">
                About me
              </h1>
              <h4 className="font-medium leading-tight text-xl mt-0 mb-4">
                Front-End Developer
              </h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="flex justify-center border md:px-10 px-4 px-4 py-4 md:mx-4 md:my-8 my-4 cursor-pointer hover:bg-white hover:border-black hover:text-black">
                  <a>Hire Me</a>
                </div>
                <div className="flex justify-center border md:px-10 px-4 px-4 py-4 md:mx-4 md:my-8 my-4 cursor-pointer hover:bg-white hover:border-black hover:text-black">
                  <a>Download CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1">
            abc
          </div>
        </div>
      </div>
    </>
  );
}
