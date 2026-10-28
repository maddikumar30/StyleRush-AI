import { useNavigate } from "react-router-dom";
import api from "../services/api";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  // Add product to wishlist
  const addToWishlist = async () => {
    try {
      const response = await api.post("/wishlist/add", {
        product_id: product.id,
      });

      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert("Failed to add to wishlist");
    }
  };

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="180"
        height="180"
        style={{
          cursor: "pointer",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h3
        style={{
          cursor: "pointer",
          marginTop: "15px",
        }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.name}
      </h3>

      <p
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        ₹{product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product.id)}
        style={{
          width: "100%",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        🛒 Add to Cart
      </button>

      {/* Wishlist Button */}
      <button
        onClick={addToWishlist}
        style={{
          width: "100%",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        ❤️ Add to Wishlist
      </button>

      {/* View Details Button */}
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          width: "100%",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        👀 View Details
      </button>
    </div>
  );
}

export default ProductCard;