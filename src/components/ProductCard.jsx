// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, desc, price, image } = product;
  return (
    <div className="h-80 my-2 max-w-72 border border-gray-60 rounded-md mx-2">
      <img
        className="rounded-md object-cover"
        src={image}
        alt="headphone image"
      />
      <h3>{name}</h3>
      <p className="p-2">{desc}</p>
      <div className="ml-2 pb-2 flex justify-between">
        <span className="font-bold">{price}</span>
        <button className="mr-2 bg-violet-300 text-white px-2 py-1 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};
