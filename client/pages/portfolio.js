/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import TattooCard from '../components/TattooCard';

export default function Portfolio({tattoos}) {
  console.log(tattoos);
    
  const displayTattoos = 
        <div className="grid p-8 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tattoos.nodes.map((tattoo, index) =>
            <TattooCard tattoo={tattoo} key={index}/>
          )}
        </div>;
    
  return (
    <div className="pt-6">
      <div className="text-white text-center pb-6">            
            Take a look at some of my favorite work!
      </div>
      {displayTattoos}
    </div>
  );
}

export async function getStaticProps() {

  // eslint-disable-next-line no-undef
  const res = await fetch(process.env.WORDPRESS_API, {
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