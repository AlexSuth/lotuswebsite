export default function Bio() {
    return (
                <div className="text-white max-w-screen-xl px-4 py-16 mx-auto sm:px-6  lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
                    >
                        <img
                        alt="Party"
                        src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/294493838_10159266682763402_3619832793550699762_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g9od7-yUBaAAX9UGXrh&_nc_ht=scontent-sea1-1.xx&oh=00_AT-of3yr_91WSYhku3Tc1XcoKfwjk4-f150jtf9Ih1REGw&oe=63361F42"
                        className="block inset-0 object-cover w-full h-full"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
                        <p className="mt-4 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                        <div>
                            <button
                            className="hover:shadow-form rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
                            >
                            Book Appointment
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}