function Header({ cartCount, onToggleCart }) {
  return (
    <header className="header">
      <h1>🛍️ Mini Shop</h1>
      <button className="cart-btn" onClick={onToggleCart}>
        🛒 Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;