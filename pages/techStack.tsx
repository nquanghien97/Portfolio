import Fade from 'react-reveal/Fade';
import HtmlIcon from '../assets/techIcon/htmlIcon.svg';
import CssIcon from '../assets/techIcon/cssIcon.svg';
import JavascriptIcon from '../assets/techIcon/javascriptIcon.svg';
import ReactjsIcon from '../assets/techIcon/reactIcon.svg';
import TypescriptIcon from '../assets/techIcon/typescriptIcon.svg';
import NextjsIcon from '../assets/techIcon/nextjsIcon.svg';
import TailwindIcon from '../assets/techIcon/tailwindIcon.svg';
import NodejsIcon from '../assets/techIcon/nodejsIcon.svg';
import ExpressIcon from '../assets/techIcon/expressjsIcon.svg';
import GrapqlIcon from '../assets/techIcon/grapqlIcon.svg';
import MongoIcon from '../assets/techIcon/mongoIcon.svg';
import Image from 'next/image';

export default function TechStack() {
  return (
    <Fade right>
      <div id="tech-stack" className="flex justify-center mx-auto mb-12 pt-8">
      <div className="text-black w-5/6 flex flex-col justify-center items-center">
            <h1 className="font-medium leading-tight text-5xl my-4">My Tech Stack</h1>
            <p>Technologies I’ve been working with recently</p>
            <div className="slide w-20 h-0.5 bg-slate-400 my-6"></div>
            <div className="w-full h-full">
              <div className="flex justify-center items-center gap-5 flex-wrap">
                <Image
                  src={HtmlIcon}
                  alt="Html Icon"
                  width={80}
                  height={80}
                  title='HTML Icon'
                />
                <Image
                  src={CssIcon}
                  alt="Css Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={JavascriptIcon}
                  alt="Javascript Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={ReactjsIcon}
                  alt="Reactjs Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={TypescriptIcon}
                  alt="Typescript Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={NextjsIcon}
                  alt="Nextjs Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={TailwindIcon}
                  alt="Tailwind Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={NodejsIcon}
                  alt="Nodejs Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={ExpressIcon}
                  alt="Express Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={GrapqlIcon}
                  alt="Grapql Icon"
                  width={80}
                  height={80}
                />
                <Image
                  src={MongoIcon}
                  alt="MongoDB Icon"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
      </div>
    </Fade>
  )
}
