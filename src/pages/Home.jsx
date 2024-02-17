import { ProductCard } from "../components";

export const Home = () => {
  return (
    <main>
      <section className="p-3 flex justify-start flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};
