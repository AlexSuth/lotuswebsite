export default function Home({ homePages }) {
  return (
    <div className="text-white">
      <h1>
        NextJs Wordpress Test
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