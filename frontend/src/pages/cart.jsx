import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const response = await api.get("/cart");
      setCartItems(response.data);
    } catch (error) {
      console.log("Failed to load cart:", error);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1>🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Your cart is empty 🛍️</h2>

          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "12px 25px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              {/* Product Image */}
              <img
                src={item.product.image}
                alt={item.product.name}
                width="120"
                height="120"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* Product Information */}
              <div style={{ flex: 1 }}>
                <h2>{item.product.name}</h2>

                <p>{item.product.description}</p>

                <p
                  style={{
                    color: "green",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.product.price}
                </p>

                <p>
                  Quantity: <strong>{item.quantity}</strong>
                </p>

                <p>
                  Subtotal:{" "}
                  <strong>
                    ₹{item.product.price * item.quantity}
                  </strong>
                </p>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div
            style={{
              borderTop: "2px solid #ddd",
              marginTop: "30px",
              paddingTop: "20px",
              textAlign: "right",
            }}
          >
            <h2>Total: ₹{totalPrice}</h2>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                padding: "15px 30px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;