import bg from "../assets/bg.webp";

export default function Home() {
  return (
    <section
      className="home-banner"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "0 2px 6px rgba(0,0,0,0.6)",
      }}
    >
      <h1>Welcome to Handloom Fashion</h1>
      <p>Experience the elegance of authentic Indian handwoven art.</p>
    </section>
  );
}
