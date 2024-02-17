import { ProductCard } from "../components";

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "SONY WH-CH720N",
      image: "/assets/images/headphone1.jpg",
      price: "₹8,999",
    },
    {
      id: 2,
      name: "boAt Rockerz 551",
      image: "/assets/images/headphone2.jpg",
      price: "₹3,499",
    },
    {
      id: 3,
      name: "SONY WH-CH520",
      image: "/assets/images/headphone3.jpg",
      price: "₹4,490",
    },
    {
      id: 4,
      name: "JBL Tune 760NC",
      image: "/assets/images/headphone4.jpg",
      price: "₹5,499",
    },
    {
      id: 5,
      name: "SONY WH-CH720N",
      image: "/assets/images/headphone5.jpg",
      price: "₹9,990",
    },
    {
      id: 6,
      name: "SONY WH-XB910N",
      image: "/assets/images/headphone6.jpg",
      price: "₹12,990",
    },
  ];
  return (
    <main>
      <section className="p-3 flex justify-start flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
