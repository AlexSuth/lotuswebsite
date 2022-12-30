export default function Appointments() {
    return (
        <div className="text-white p-10 mt-20 border border-white md:max-w-[750px] max-w-[350px] mx-auto ">
            Please fill the form out below if you would like to schedule an appointment.
        <div className="mx-auto pt-10 w-full ">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
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
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-white"
                >
                Subject
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
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
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <button
                className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-black outline-none"
                >
                Submit
                </button>
            </div>
            </form>


            
        </div>
        </div>
    )
}