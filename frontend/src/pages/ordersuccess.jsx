import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Order Placed Successfully!</h1>

      <p>Your order will be delivered in approximately 10 minutes.</p>

      <button onClick={() => navigate("/tracking")}>
        Track Order
      </button>
    </div>
  );
}

export default OrderSuccess;