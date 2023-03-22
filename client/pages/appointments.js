/* eslint-disable react/react-in-jsx-scope */   
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Appointments() {
  const [isSuccess, setIsSuccess] = useState(false);
  // eslint-disable-next-line no-undef
  const form = useRef();
  const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
  const secretID = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    console.log (serviceID);


    emailjs.sendForm(serviceID, templateID, form.current, secretID)
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
  };
 
  return (
    <div className="text-white p-10 mt-6 border border-white md:max-w-[750px] max-w-[350px] mx-auto ">
      {
        isSuccess ?
          <div>Thank you for reaching out. I will get back to you as soon as I can!</div>
          :
          (<div>
        Please fill the form out below if you would like to schedule an appointment.
            <form ref={form} onSubmit={sendEmail}>
              <div className="mx-auto pt-10 w-full ">
                <label className="mb-3 block text-base font-medium text-white">
        Name
                </label>
                <input 
                  type="text" 
                  name="user_name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" 
                />
                <label className="mb-3 block text-base font-medium text-white">
        Email
                </label>
                <input 
                  type="email" 
                  name="user_email" 
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" 
                />
                <label className="mb-3 block text-base font-medium text-white">
        Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Please type a detailed message including what kind of work you are looking to get done and a preferred date/time."
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <div className='flex items-center justify-center'>
                  <button
                    type="submit" 
                    className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-black outline-none">
        Submit
                  </button>
                </div>
              </div>
            </form>
          </div>)
      }
    </div>

    
  );
}