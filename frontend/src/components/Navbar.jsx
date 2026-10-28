import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>👕 StyleRush AI</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{ color: "white", textDecoration: "none" }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{ color: "white", textDecoration: "none" }}
        >
          Cart
        </Link>

        <Link
          to="/tracking"
          style={{ color: "white", textDecoration: "none" }}
        >
          Tracking
        </Link>

        <Link
          to="/login"
          style={{ color: "white", textDecoration: "none" }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{ color: "white", textDecoration: "none" }}
        >
          Register
        </Link>
        <Link
          to="/wishlist"
          style={{ color: "white", textDecoration: "none" }}
>
          ❤️ Wishlist
        </Link>
        <Link
          to="/profile"
          style={{
          color: "white",
          textDecoration: "none",
           }}
>
          👤 Profile
        </Link>
        <Link
           to="/history"
           style={{
           color: "white",
           textDecoration: "none",
            }}
           >
             📦 Orders
         </Link>
         <Link
           to="/stylist"
           style={{
           color: "white",
           textDecoration: "none",
          }}
          >
           🤖 AI Stylist
         </Link>
      </div>
    </nav>
  );
}

export default Navbar;