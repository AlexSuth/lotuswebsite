export default function TattooCard({ tattoo }) {

  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg max-w-sm">
        <a href="#!">
          <img class="rounded-t-lg" src={tattoo.tattooImages[0].sourceUrl} alt="" />
        </a>
        <div class="p-6 text-white">
          <h5 class="text-center text-white text-xl font-medium">{tattoo.tattooTitle}</h5>
        </div>
      </div>
    </div>
  );

}