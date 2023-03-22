/* eslint-disable react/react-in-jsx-scope */
export default function Bio() {
  return (
    <div className="text-white max-w-screen-xl px-4 py-6 mx-auto sm:px-6  md:px-8">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
        >
          <img
            alt="Anastasia"
            src="http://alexanders80.sg-host.com/wp-content/uploads/2023/01/322726234_583181956983020_3392654797384454977_n.jpg"
            className="block inset-0 object-cover w-full h-full"
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Bio</h2>
          <p className="mt-4 text-white">
            Anastasia Lotus
            Anastasia's main mission in life is to support others in discovering radical self-expression.
            Over the last 2 years, art has taken her on a journey through the practice of tattooing.
            Combining fine line and bold concepts, Anastasua is culitvaying quite a following here in the Northwest.
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