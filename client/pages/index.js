/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';

export default function Home({ homePages }) {
  return (
    <div className="text-white">
      <img src={homePages.nodes[0].homeImage.sourceUrl} className='object-cover w-full h-full mb-6' />
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
  );
}

export async function getStaticProps() {

  const res = await fetch('http://alexanders80.sg-host.com/graphql', {
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