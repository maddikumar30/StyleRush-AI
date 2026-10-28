function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "T-Shirts",
    "Shirts",
    "Jeans",
    "Shoes",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            backgroundColor:
              category === item ? "#2563eb" : "#f3f4f6",
            color: category === item ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;