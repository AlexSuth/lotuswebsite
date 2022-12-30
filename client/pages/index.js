export default function Home({ tattoos }) {
  return (
    <div className="text-white">
      <h1>
        NextJs Wordpress Test
      </h1>
      {
        tattoos.nodes.map(tattoo => {
          return (
            <ul key={tattoo.slug}>
              <li>
                {tattoo.tattooTitle}
              </li>
            </ul>
          );
        })
      }
    </div>
  );
}

export async function getStaticProps() {

  const res = await fetch('http://alexanders80.sg-host.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query TattooQuery {
        tattoos {
          nodes {
            slug
            tattooTitle
            tattooId
            tattooDisplayed
            tattooDescription
            tattooDate
            tattooImages {
              altText
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
      tattoos: json.data.tattoos
    },
  };
}