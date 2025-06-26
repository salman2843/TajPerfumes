import { useEffect, useState } from "react";
import HeroSlider from "../components/HomePage/HeroSlider";
import ProductCard from "../components/HomePage/ProductCard";
import API from "../api/axios.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="mb-10">
        <HeroSlider />
      </section>

      {/* Products */}
      <section className="px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Perfumes</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
