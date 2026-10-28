import { useEffect, useState } from "react";
import api from "../services/api";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await api.get("/admin/products");
    setProducts(res.data);
  };

  const addProduct = async () => {
    await api.post("/admin/products", {
      name,
      price: Number(price),
      category,
    });

    setName("");
    setPrice("");
    setCategory("");

    loadProducts();
  };

  const deleteProduct = async (id) => {
    await api.delete(`/admin/products/${id}`);
    loadProducts();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>👕 Product Management</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <button onClick={addProduct}>
        Add Product
      </button>

      <hr />

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <p>{product.category}</p>

          <button
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;