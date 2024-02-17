import image from "../assets/headphone1.jpg";
export const ProductCard = () => {
  return (
    <div className="my-2 max-w-72 border border-gray-60 rounded-md mx-2">
      <img className="rounded-md" src={image} alt="headphone image" />
      <p className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tempora.
      </p>
      <div className="ml-2 pb-2 flex justify-between">
        <span className="font-bold">$234</span>
        <button className="mr-2 bg-violet-300 text-white px-2 py-1 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};
