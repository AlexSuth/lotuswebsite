/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';
import Head from 'next/head';

export default function Home({ homePages }) {
  return (
    <div className="text-white">
      <Head>
        <title>Anastasia Tattoos - Sacred Geometry, Lotus Drops Tattoos in Bellingham, Washington</title>
        <meta name="description" content="Anastasia Tattoos provides stunning sacred geometry, lotus drops tattoos in Bellingham, Washington. Book an appointment and get inked by a professional tattoo artist today." />
        <meta name="keywords" content="anastasia, lotus, drops, tattoos, bellingham, washington, sacred, geometry" />
      </Head>
      <img src={homePages.nodes[0].homeImage.sourceUrl} className='object-fill w-full h-full mb-6 max-w-7xl items-center justify-center' />
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
  );
}

export async function getStaticProps() {

  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query HomeQuery {
        homePages {
          nodes {
            homeCaption
            homeImage {
              sourceUrl
            }
          }
        }
      }
      `,
    })
  });

  const json = await res.json();
  return {
    props: {
      homePages: json.data.homePages
    },
  };
}