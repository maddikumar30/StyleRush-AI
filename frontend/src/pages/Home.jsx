
import { useNavigate } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Section */}
      <div
        style={{
          padding: "50px 20px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "40px",
            color: "#1e3a8a",
          }}
        >
          Why Choose StyleRush AI?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "260px",
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>🚀 Fast Delivery</h3>
            <p>Get your fashion products delivered in just 10 minutes.</p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "260px",
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>🤖 AI Stylist</h3>
            <p>Receive smart outfit recommendations based on your style.</p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "260px",
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>💳 Secure Payments</h3>
            <p>Pay safely using UPI, Credit Card, Debit Card, or Razorpay.</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Popular Categories</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <button>👕 T-Shirts</button>
          <button>👔 Shirts</button>
          <button>👖 Jeans</button>
          <button>👟 Shoes</button>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "20px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h3>StyleRush AI</h3>
        <p>Fashion Delivered in 10 Minutes 🚀</p>
        <p>© 2026 StyleRush AI. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;