import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

export default function Appointments() {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();
  const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
  const secretID = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, secretID)
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
       <div className="flex items-center justify-center">
        <a href="https://anastasialotusink.hbportal.co/schedule/641672686f80cc002d62c4fe">
          <button
            className="hover:shadow-form content-center rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
          >
            BOOK APPOINTMENT
          </button>
        </a>
      </div>
      <Head>
        <title>Schedule an Appointment | Anastasia Lotus Tattoo</title>
        <meta name="description" content="Schedule an appointment with Anastasia Lotus Tattoo to receive fine line and bold tattoo designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="text-white p-10 mt-6 border border-white md:max-w-[750px] max-w-[350px] mx-auto ">
        
        {
          isSuccess ?
            <div>Thank you for reaching out. I will get back to you as soon as I can!</div>
            :
            (<div>
              Please click the "Book Appointment" button if you would like to schedule an appointment. For all other inquiries, please fill out this form.
              <form ref={form} onSubmit={sendEmail}>
                <div className="mx-auto pt-10 w-full ">
                  <label className="mb-3 block text-base font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="mb-3 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <label className="mb-3 block text-base font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="mb-3 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <label className="mb-3 block text-base font-medium text-white">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Please type a detailed message including what kind of work you are looking to get done and a preferred date/time."
                    className="mb-3 w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
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
     
    </div>
  );
}