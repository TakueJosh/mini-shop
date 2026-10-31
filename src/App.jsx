import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";
import products from "./data/products";
import "./App.css";

function App() {
  // ✅ STATE: the cart lives here and changes over time
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Called by child via props (callback prop)
  const addToCart = (product, qty) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="app">
      {/* ✅ PROPS: pass data + callbacks down */}
      <Header cartCount={totalItems} onToggleCart={() => setShowCart((s) => !s)} />

      {showCart && (
        <CartSummary items={cart} total={totalPrice} onRemove={removeFromCart} />
      )}

      <main className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}

export default App;