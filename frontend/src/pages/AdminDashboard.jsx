import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <h1>👨‍💼 StyleRush AI Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <button onClick={() => navigate("/admin/products")}>
          👕 Manage Products
        </button>

        <button onClick={() => navigate("/admin/orders")}>
          📦 Manage Orders
        </button>

        <button onClick={() => navigate("/admin/users")}>
          👤 Manage Users
        </button>

        <button onClick={() => navigate("/admin/analytics")}>
          📊 Analytics
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;