import img2 from "../assets/img2.jpeg.jpg";
import img3 from "../assets/img3.jpeg.jpg";
import img4 from "../assets/img4.jpeg.jpg";
import img5 from "../assets/img5.webp";

export default function Products() {
  const products = [
    { name: "Handloom Saree 1", price: 2500, image: img2 },
    { name: "Handloom Saree 2", price: 2800, image: img3 },
    { name: "Handloom Kurta", price: 1800, image: img4 },
    { name: "Handcrafted Dupatta", price: 1200, image: img5 },
  ];

  const addToBasket = (product) => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existing = basket.find((item) => item.name === product.name);
    if (existing) existing.quantity += 1;
    else basket.push({ ...product, quantity: 1 });
    localStorage.setItem("basket", JSON.stringify(basket));
    alert(`${product.name} added to basket!`);
  };

  return (
    <section className="products">
      <h2>Our Handloom Collection</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <button onClick={() => addToBasket(p)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </section>
  );
}
