import { useEffect, useState } from "react";
import api from "../services/api";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const response = await api.get("/wishlist");
      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No products in wishlist.</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index}>
            <h3>Product ID: {item.product_id}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;