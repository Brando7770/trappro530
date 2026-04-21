export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        TrapPro 530
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Wildlife & Pest Control • 24/7 Emergency Service
      </p>

      <div style={{ marginBottom: "30px" }}>
        <p>✔ Raccoons</p>
        <p>✔ Skunks</p>
        <p>✔ Rats & Rodents</p>
        <p>✔ Attic Cleanouts</p>
      </div>

      <a 
        href="tel:8054144930"
        style={{
          background: "#e63946",
          padding: "15px 25px",
          borderRadius: "8px",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        Call Now: 805-414-4930
      </a>

    </main>
  );
}
