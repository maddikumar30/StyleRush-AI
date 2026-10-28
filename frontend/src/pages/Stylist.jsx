import { useState } from "react";
import api from "../services/api";

function Stylist() {
  const [color, setColor] = useState("");
  const [result, setResult] = useState(null);

  const getRecommendation = async () => {
    try {
      const response = await api.get(`/stylist?color=${color}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to get recommendation");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 AI Fashion Stylist</h1>

      <input
        type="text"
        placeholder="Enter shirt color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button
        onClick={getRecommendation}
        style={{ marginLeft: "10px" }}
      >
        Recommend
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          {result.message ? (
            <p>{result.message}</p>
          ) : (
            <>
              <h3>Recommended Outfit</h3>
              <p>👕 Shirt: {result.shirt}</p>
              <p>👖 Pant: {result.pant}</p>
              <p>👟 Shoes: {result.shoes}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Stylist;