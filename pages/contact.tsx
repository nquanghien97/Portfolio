import { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';

export default function Contact () {

    const [error, setError] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('nquanghien97', 'template_sj1vbhn', e.target, 'fyQXTkIk7xG-acE0o')
          .then((result) => {
              console.log(result);
              setError("Gửi thành công")
          }, (error) => {
              console.log(error.text);
              setError("Gửi thất bại...Vui lòng thử lại")
          });
          e.target.reset()
          setTimeout(() =>{
              setError('')
          }, 3000)
    };
    

  return (
      <>
        <Fade left>
            <div id="contact" className="contact flex justify-center mx-auto md:py-28 pb-8">
                <div className="w-5/6 flex md:flex-row flex-col">
                    <div className="md:flex-[0_0_40%] mb-4">
                        <h2 className="font-medium leading-tight text-5xl my-4">Contact Info</h2>
                        <div className="adress flex">
                            <span><LocationOnIcon /></span>
                            <p className="ml-2">Adress: Quận Hoàng Mai - Hà Nội</p>
                        </div>
                        <div className="phone flex my-4">
                            <span><PhoneIcon /></span>
                            <a href="tel:0354664880" className="ml-2">Phone: 035.4664.880</a>
                        </div>
                        <div className="email flex my-4">
                            <span><EmailIcon /></span>
                            <a href="mailto:nquanghien97@gmail.com" className="ml-2">Email: nquanghien97@gmail.com</a>
                        </div>
                        <div className="facebook flex my-4">
                            <span><FacebookIcon /></span>
                            <a href="https://www.facebook.com/nqhien97" className="ml-2">Facebook: https://www.facebook.com/nqhien97</a>
                        </div>
                    </div>
                    <div className="relative md:flex-[0_0_60%]">
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
                            <button type="submit" className="px-8 py-4 border border-black hover:bg-slate-500 hover:text-white rounded">
                                Send Message
                            </button>
                        </form>
                        {error && (<div className="absolute top-5 right-5 bg-red-200 w-52 h-9 flex items-center justify-center rounded">Gửi thành công</div>)}
                        <div className="absolute top-5 right-0 bg-red-200 w-52 h-9 flex items-center justify-center rounded">Gửi thành công</div>
                    </div>
                </div>
            </div>
        </Fade>
      </>
  );
}
