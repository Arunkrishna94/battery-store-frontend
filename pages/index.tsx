import { useState, useEffect } from "react";
import { api } from "../utils/api";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Battery Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-green-600">${product.price}</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
