import image from "../assets/headphone5.jpg";
export const CartCard = () => {
  return (
    <div className="border border-gray-500 p-4 flex justify-between items-center">
      <img src={image} alt="image" width={60} height={60} />
      <p>Sony xperia sII</p>
      <span>$321</span>
      <button className="bg-red-800 text-white px-2 py-1 rounded-md">
        Remove
      </button>
    </div>
  );
};
