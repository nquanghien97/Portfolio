import React, { useRef } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';

export interface ContactProps {
}

export default function Contact (props: ContactProps) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('nquanghien97', 'template_sj1vbhn', e.target, 'fyQXTkIk7xG-acE0o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };

    const notification = () => {
        alert('Send message successfully')
    }

  return (
      <>
        <Fade left>
            <div id="contact" className="contact flex justify-center mx-auto md:py-28 pb-8">
                <div className="w-5/6 flex md:flex-row flex-col">
                    <div className="md:flex-[0_0_40%] mb-4">
                        <h2 className="font-medium leading-tight text-5xl my-4">Contact Info</h2>
                        <div className="adress flex">
                            <span><LocationOnIcon /></span>
                            <p className="ml-2">Adress: HH2A Linh Đàm</p>
                        </div>
                        <div className="phone flex my-4">
                            <span><PhoneIcon /></span>
                            <p className="ml-2">Phone: 035.4664.880</p>
                        </div>
                        <div className="email flex my-4">
                            <span><EmailIcon /></span>
                            <p className="ml-2">Email: nquanghien97@gmail.com</p>
                        </div>
                        <div className="facebook flex my-4">
                            <span><FacebookIcon /></span>
                            <p className="ml-2">Facebook: https://www.facebook.com/nqhien97</p>
                        </div>
                    </div>
                    <div className="md:flex-[0_0_60%]">
                        <h2 className="font-medium leading-tight text-5xl my-4">Contact Form</h2>
                        <form onSubmit={sendEmail}>
                            <div className="flex flex-wrap">
                                <div className="flex-[0_0_50%] mb-2 pr-2">
                                    <input required placeholder="Your Name" type="text" name="name" className="w-full px-1.5 py-3 border border-black rounded">

                                    </input>
                                </div>
                                <div className="flex-[0_0_50%] mb-2 pl-2">
                                    <input required placeholder="Your Email" type="text" name="email" className="w-full px-1.5 py-3 border border-black rounded">
                                    
                                    </input>
                                </div>
                                <div className="flex-[0_0_50%] my-2 pr-2">
                                    <input required placeholder="Subject" type="text" name="subject" className="w-full px-1.5 py-3 border border-black rounded">
                                    
                                    </input>
                                </div>
                                <div className="flex-[0_0_50%] my-2 pl-2">
                                    <input required placeholder="PhoneNumber" type="text" name="phonenumber" className="w-full px-1.5 py-3 border border-black rounded" />
                                </div>
                            </div>
                            <textarea name="message" rows={6} placeholder="Your message..." className="w-full px-2 border border-black my-2 rounded"></textarea>
                            <button onClick={() => notification()} type="submit" className="px-8 py-4 border border-black hover:bg-slate-500 hover:text-white rounded">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fade>
      </>
  );
}
