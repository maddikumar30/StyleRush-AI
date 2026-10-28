import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const response = await api.get("/products");

      const selectedProduct = response.data.find(
        (item) => item.id === Number(id)
      );

      setProduct(selectedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      const response = await api.post("/cart/add", {
        product_id: product.id,
      });

      alert(response.data.message);
    } catch (error) {
      alert("Failed to add product");
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="350"
      />

      <div>
        <h1>{product.name}</h1>

        <h2 style={{ color: "green" }}>
          ₹{product.price}
        </h2>

        <p>
          Premium Quality Product
        </p>

        <p>
          ⭐⭐⭐⭐⭐ (4.9)
        </p>

        <h3>Select Size</h3>

        <div>
          <button>S</button>

          <button>M</button>

          <button>L</button>

          <button>XL</button>
        </div>

        <br />

        <button onClick={addToCart}>
          Add To Cart
        </button>

        <button
          style={{ marginLeft: "20px" }}
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;