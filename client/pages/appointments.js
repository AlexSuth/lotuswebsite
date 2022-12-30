import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { sendMail } from '../lib/api'

export default function Appointments() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

        const handleSubmit = async (evt) => {
            evt.preventDefault();
            console.log('HELLO')
            const emailContent = `
              Message received from <strong>${name}</strong>. 
              Their email address is <strong>${email}</strong>. <br />
              They'd like to know about...
              ${message}
            `;
            const data = await sendMail(
              'New message from website contact form',
              emailContent
            );
        
            if (data.sent) {
              // email was sent successfully!
              router.push('/');
              console.log('sent');
            }
          };

    return (
        <div className="text-white p-10 mt-20 border border-white md:max-w-[750px] max-w-[350px] mx-auto ">
            Please fill the form out below if you would like to schedule an appointment.
        <div className="mx-auto pt-10 w-full ">
            <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white"
                >
                Full Name
                </label>
                <input
                type="text"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white"
                >
                Email Address
                </label>
                <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
            
            </div>
            <div className="mb-5">
                <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white"
                >
                Message
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please type a detailed message including what kind of work you are looking to get done and a preferred date/time."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <button
                type="submit" 
                className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-black outline-none"
                >
                Submit
                </button>
                <input 
                className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-black outline-none"
                type="submit" value="Submit" />
            </div>
            </form>


            
        </div>
        </div>
    )
}