export default function Home() {
  return (
    <main className="page">
      {/* FLOATING RACCOONS */}
      <img className="raccoon left" src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?q=80&w=800" />
      <img className="raccoon right" src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?q=80&w=800" />
      <img className="raccoon peek" src="https://images.unsplash.com/photo-1601758064229-55e7d1d5c0b2?q=80&w=800" />

      <section className="hero">
        <div className="left">
          <div className="logo">
            <span className="green">TRAP</span>
            <span className="white">PRO</span>
          </div>

          <div className="sub">WILDLIFE & PEST CONTROL</div>

          <h1>
            WILDLIFE PROBLEMS?
            <br />
            <span>WE SOLVE THEM.</span>
          </h1>

          <div className="tag">FAST. HUMANE. EFFECTIVE.</div>
        </div>

        <div className="right">
          <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200" />
        </div>
      </section>

      {/* COMING SOON BAR */}
      <section className="callbar">
        <div className="icon">📞</div>
        <div>
          <div className="big">COMING SOON</div>
          <div className="small">CALL OR TEXT – SAME DAY SERVICE</div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content">
        <div className="card">
          <h3>WE HANDLE</h3>
          <ul>
            <li>Raccoons</li>
            <li>Squirrels</li>
            <li>Rats & Mice</li>
            <li>Skunks</li>
            <li>Birds</li>
            <li>Exclusion & Prevention</li>
          </ul>
        </div>

        <div className="card">
          <h3>OUR PROMISE</h3>
          <ul>
            <li>Humane Removal</li>
            <li>Thorough Inspection</li>
            <li>Exclusion & Repair</li>
            <li>Honest & Reliable</li>
          </ul>
        </div>

        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?q=80&w=800" />
          <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=800" />
          <img src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?q=80&w=800" />
        </div>
      </section>

      {/* FOOTER BADGES */}
      <section className="badges">
        <div>🕒 SAME DAY SERVICE</div>
        <div>🛡️ FULLY INSURED</div>
        <div>📍 SERVING 530 AREA</div>
        <div>👍 TRUSTED SERVICE</div>
      </section>

      <style jsx>{`
        .page {
          background: #050505;
          color: white;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .left {
          padding: 40px;
        }

        .logo {
          font-size: 80px;
          font-weight: 900;
        }

        .green {
          color: #b8d92b;
        }

        .white {
          color: white;
        }

        .sub {
          font-size: 20px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 60px;
          line-height: 1;
        }

        h1 span {
          color: #b8d92b;
        }

        .tag {
          margin-top: 20px;
          font-weight: bold;
        }

        .right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .callbar {
          background: #b8d92b;
          color: black;
          display: flex;
          gap: 20px;
          padding: 20px;
          align-items: center;
        }

        .big {
          font-size: 60px;
          font-weight: 900;
        }

        .content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
        }

        .card {
          border: 1px solid #b8d92b;
          padding: 20px;
        }

        .card h3 {
          color: #b8d92b;
        }

        .gallery img {
          width: 100%;
          margin-bottom: 10px;
        }

        .badges {
          display: flex;
          justify-content: space-around;
          padding: 20px;
          border-top: 1px solid #b8d92b;
        }

        /* 🔥 RACCOON ANIMATIONS */
        .raccoon {
          position: fixed;
          width: 140px;
          z-index: 10;
          pointer-events: none;
        }

        .left {
          animation: crawlLeft 18s linear infinite;
        }

        .right {
          animation: crawlRight 20s linear infinite;
        }

        .peek {
          bottom: -40px;
          left: 40%;
          animation: peek 6s ease-in-out infinite;
        }

        @keyframes crawlLeft {
          0% { left: -150px; top: 40%; }
          100% { left: 110%; top: 45%; }
        }

        @keyframes crawlRight {
          0% { right: -150px; top: 60%; }
          100% { right: 110%; top: 55%; }
        }

        @keyframes peek {
          0%,100% { transform: translateY(100px); }
          50% { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
