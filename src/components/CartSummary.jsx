function CartSummary({ items, total, onRemove }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p className="empty">Your cart is empty — add something! 🛒</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.emoji} {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
                <button onClick={() => onRemove(item.id)}>✕</button>
              </li>
            ))}
          </ul>
          <p className="total">Total: ₹{total}</p>
        </>
      )}
    </section>
  );
}

export default CartSummary;