import { useEffect, useState } from "react";

export default function Basket() {
  const [basket, setBasket] = useState([]);
  const [payment, setPayment] = useState("COD");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  const updateQty = (index, qty) => {
    const newBasket = [...basket];
    newBasket[index].quantity = Math.max(1, Number(qty));
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const removeItem = (i) => {
    const newBasket = basket.filter((_, idx) => idx !== i);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const total = basket.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const confirmPayment = (e) => {
    e.preventDefault();
    localStorage.removeItem("basket");
    setBasket([]);
    setMessage(`Payment method "${payment}" selected. Thank you for your order!`);
  };

  return (
    <section className="basket">
      <h2>Your Basket</h2>

      <table className="basket-table">
        <thead>
          <tr>
            <th>Product</th><th>Image</th><th>Price</th>
            <th>Quantity</th><th>Subtotal</th><th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {basket.length === 0 ? (
            <tr><td colSpan="6">Your basket is empty.</td></tr>
          ) : (
            basket.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td><img src={p.image} alt={p.name} /></td>
                <td>₹{p.price}</td>
                <td>
                  <input
                    type="number"
                    value={p.quantity}
                    onChange={(e) => updateQty(i, e.target.value)}
                  />
                </td>
                <td>₹{p.price * p.quantity}</td>
                <td><button onClick={() => removeItem(i)}>Remove</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <p className="total">Total: ₹{total}</p>

      <form onSubmit={confirmPayment}>
        <h3>Payment Method</h3>
        <label>
          <input type="radio" value="COD" checked={payment === "COD"} onChange={() => setPayment("COD")} />
          Cash on Delivery
        </label>
        <label>
          <input type="radio" value="Card" checked={payment === "Card"} onChange={() => setPayment("Card")} />
          Credit/Debit Card
        </label>
        <button type="submit">Confirm Payment</button>
      </form>

      <p style={{ color: "green", textAlign: "center" }}>{message}</p>
    </section>
  );
}
