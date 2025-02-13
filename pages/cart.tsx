import { useState } from "react";
import { api } from "../utils/api";

const Cart = () => {
  const [userId, setUserId] = useState<number>(1);
  const [productId, setProductId] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);

  const placeOrder = async () => {
    await api.post("/orders", { userId, productId, quantity });
    alert("Order placed successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Place an Order</h1>
      <input className="w-full p-2 border rounded mb-2" type="number" placeholder="User ID" onChange={(e) => setUserId(Number(e.target.value))} />
      <input className="w-full p-2 border rounded mb-2" type="number" placeholder="Product ID" onChange={(e) => setProductId(Number(e.target.value))} />
      <input className="w-full p-2 border rounded mb-2" type="number" placeholder="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
      <button className="bg-blue-500 text-white w-full p-2 rounded" onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
