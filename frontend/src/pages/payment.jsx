import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Payment() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const makePayment = async () => {
    try {
      const response = await api.post(
        `/create-payment?amount=${amount}`
      );

      alert(response.data.message);

      // Navigate to Order Success page
      navigate("/order-success");
    } catch (error) {
      alert("Payment Failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>💳 Razorpay Payment</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button onClick={makePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;