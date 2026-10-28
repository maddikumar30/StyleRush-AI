import { useState } from "react";

function Tracking() {
  const [status] = useState("Order Confirmed");

  return (
    <div>
      <h1>🚚 Order Tracking</h1>

      <h2>{status}</h2>

      <ul>
        <li>✅ Order Confirmed</li>
        <li>👕 Packing Your Clothes</li>
        <li>🛵 Out for Delivery</li>
        <li>🏠 Delivered</li>
      </ul>
    </div>
  );
}

export default Tracking;