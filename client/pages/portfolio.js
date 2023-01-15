/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import TattooCard from '../components/TattooCard';
import FsLightbox from "fslightbox-react";

import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';


export default function Portfolio({ tattoos }) {
  return (
    <Gallery>
      <div className="grid p-8 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tattoos.nodes.map((tattoo, index) =>
          <div className="flex justify-center">
            <Item
              original={tattoo.tattooImages[0].sourceUrl}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={tattoo.tattooImages[0].sourceUrl} className="rounded-sm" />
              )}
            </Item>
          </div>
        )}
      </div>
    </Gallery>
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
