/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

export default function Bio() {
  return (
    <>
      <Head>
        <title>Anastasia Lotus - Bio</title>
        <meta name="description" content="Anastasia Lotus is a tattoo artist based in the Northwest, whose main mission is to support others in discovering radical self-expression. Learn more about her journey through the practice of tattooing." />
        <meta name="keywords" content="Anastasia Lotus, tattoo artist, Northwest, radical self-expression, fine line, bold concepts" />
        <meta name="author" content="Anastasia Lotus" />
        <meta property="og:title" content="Anastasia Lotus - Bio" />
        <meta property="og:description" content="Anastasia Lotus is a tattoo artist based in the Northwest, whose main mission is to support others in discovering radical self-expression. Learn more about her journey through the practice of tattooing." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://alexanders80.sg-host.com/wp-content/uploads/2023/01/322726234_583181956983020_3392654797384454977_n.jpg" />
        <meta property="og:image:alt" content="Anastasia Lotus" />
        <meta property="og:url" content="http://example.com/bio" />
      </Head>
      <div className="text-white max-w-screen-xl px-4 py-6 mx-auto sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div>
            <img
              alt="Anastasia Lotus"
              src="http://alexanders80.sg-host.com/wp-content/uploads/2023/01/322726234_583181956983020_3392654797384454977_n.jpg"
              className="block rounded-md inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Bio</h2>
            <p className="mt-4 text-white">
              Anastasia Lotus
              Anastasia's main mission in life is to support others in discovering radical self-expression.
              Over the last 2 years, art has taken her on a journey through the practice of tattooing.
              Combining fine line and bold concepts, Anastasia is cultivating quite a following here in the Northwest.
            </p>
            <div className="flex items-center justify-center">
              <a href="https://anastasialotusink.hbportal.co/schedule/641672686f80cc002d62c4fe">
              <button
                className="hover:shadow-form content-center rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
              >
                  BOOK APPOINTMENT
              </button>
                </a>
            </div>
            <div className="flex items-center justify-center"> 
            <a href="/appointments">
              <button
                className="hover:shadow-form content-center rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
              >
                  SEND MESSAGE
              </button>
                </a>
            </div>
            <div className="flex items-center justify-center"> 
            <a href="https://www.instagram.com/anastasialotustats/">
              <button
                className="hover:shadow-form content-center rounded-md bg-white py-3 mt-10 px-8 text-base font-semibold text-black outline-none"
              >
                  INSTAGRAM
              </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}