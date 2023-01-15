/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function TattooCard({ index, setLightboxIndex, tattoo }) {
  return (
    <div className="flex justify-center">
      <div onClick={()=> setLightboxIndex(index)} className="rounded-lg shadow-lg max-w-sm">
          <img className="rounded-sm" src={tattoo.tattooImages[0].sourceUrl} alt="" />
      </div>
    </div>
  );
}


