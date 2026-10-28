import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #2563eb, #1e40af)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        StyleRush AI
      </h1>

      <h2>10-Minute Fashion Delivery 🚀</h2>

      <p>
        AI-powered fashion recommendations with ultra-fast delivery.
      </p>

      <button
        onClick={() => navigate("/products")}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: "#2563eb",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default HeroBanner;