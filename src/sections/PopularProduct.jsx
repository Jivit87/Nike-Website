import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard.jsx";

const PopularProduct = () => {
  return (
    <section id="products" className="max-w-full mx-auto px-4 py-12">
      <div className="flex flex-col justify-start gap-5 text-center sm:text-left">
        <h2 className="text-4xl font-palanquin font-bold leading-tight">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray leading-relaxed">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;