import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  // ✅ STATE: local quantity — belongs to THIS card only
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, qty); // sends data back to parent
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="card">
      <div className="card-emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">₹{product.price}</p>

      <div className="qty-row">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>

      <button className="add-btn" onClick={handleAdd}>
        {added ? "✓ Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;