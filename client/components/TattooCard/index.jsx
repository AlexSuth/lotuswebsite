/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function TattooCard({ tattoo }) {

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg" src={tattoo.tattooImages[0].sourceUrl} alt="" />
        </a>
        <div className="p-6 text-white">
          <h5 className="text-center text-white text-xl font-medium">{tattoo.tattooTitle}</h5>
        </div>
      </div>
    </div>
  );

}