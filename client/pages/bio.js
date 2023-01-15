/* eslint-disable react/react-in-jsx-scope */
export default function Bio() {
  return (
    <div className="text-white max-w-screen-xl px-4 py-6 mx-auto sm:px-6  lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          <img
            alt="Party"
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/88175491_10157437610153402_2873478312393441280_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=wAKwI1-kopMAX-fMZYQ&_nc_ht=scontent-sea1-1.xx&oh=00_AfBu_qnTw2cIQHBuqG4EBfAY6OJ6slYYYltPSHYr_TljIA&oe=63D6C05D"
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
          <div className="flex items-center justify-center">
            <button
              className="hover:shadow-form content-center rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
            >
              <a href='/appointments'>
                            Book Appointment
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}