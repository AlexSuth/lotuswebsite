/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Home({ homePages }) {
  return (
    <div className="text-white w-10/12">
      <h1 className="mb-4 text-3xl md:text-center content-center">
        Welcome to Lotus Ink
      </h1>
      <p>
        {homePages.nodes[0].homeCaption}
      </p>
    
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