export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(0,255,120,0.14), transparent 35%),
            radial-gradient(circle at 80% 10%, rgba(0,255,80,0.10), transparent 30%),
            radial-gradient(circle at 50% 80%, rgba(0,180,60,0.10), transparent 35%),
            linear-gradient(180deg, #031108 0%, #05170a 45%, #021006 100%);
          color: #ecfff1;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
        }

        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 32px 20px 80px;
        }

        .gridGlow {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,100,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,100,0.06) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2));
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.28;
          pointer-events: none;
        }

        .orb1 {
          width: 300px;
          height: 300px;
          background: #00ff73;
          top: -80px;
          left: -60px;
          animation: floatOrb 7s ease-in-out infinite;
        }

        .orb2 {
          width: 320px;
          height: 320px;
          background: #00ff99;
          right: -80px;
          top: 180px;
          animation: floatOrb 9s ease-in-out infinite reverse;
        }

        .orb3 {
          width: 260px;
          height: 260px;
          background: #00cc55;
          bottom: -90px;
          left: 35%;
          animation: floatOrb 10s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(25px) translateX(10px); }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heroCard {
          width: 100%;
          position: relative;
          padding: 42px 28px;
          border: 1px solid rgba(90,255,140,0.28);
          background: rgba(3, 20, 8, 0.72);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          box-shadow:
            0 0 0 1px rgba(0,255,120,0.08) inset,
            0 0 30px rgba(0,255,90,0.16),
            0 0 90px rgba(0,255,90,0.09);
          overflow: hidden;
        }

        .heroCard::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 28px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(120,255,170,0.65), rgba(0,255,85,0.08), rgba(120,255,170,0.5));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(0,255,115,0.12);
          border: 1px solid rgba(106,255,156,0.24);
          color: #9effbf;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 0 18px rgba(0,255,90,0.15);
        }

        .title {
          font-size: clamp(48px, 9vw, 110px);
          line-height: 0.94;
          margin: 0;
          font-weight: 900;
          letter-spacing: -2px;
          text-transform: uppercase;
          text-shadow:
            0 0 8px rgba(150,255,190,0.35),
            0 0 25px rgba(0,255,110,0.28),
            0 0 50px rgba(0,255,110,0.18);
        }

        .titleAccent {
          color: #8effaf;
        }

        .sub {
          max-width: 760px;
          margin: 18px auto 0;
          font-size: clamp(18px, 2.5vw, 24px);
          line-height: 1.5;
          color: #d7ffe3;
          text-shadow: 0 0 18px rgba(0,255,100,0.12);
        }

        .ctaRow {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .btnPrimary,
        .btnSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          padding: 18px 28px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 800;
          font-size: 17px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #00ff66, #00c94f);
          color: #021107;
          box-shadow:
            0 0 16px rgba(0,255,85,0.35),
            0 0 36px rgba(0,255,85,0.18);
        }

        .btnPrimary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 20px rgba(0,255,85,0.45),
            0 0 50px rgba(0,255,85,0.24);
        }

        .btnSecondary {
          background: rgba(255,255,255,0.04);
          color: #dffff0;
          border: 1px solid rgba(130,255,170,0.24);
        }

        .btnSecondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.07);
        }

        .services {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .service {
          padding: 16px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(120,255,170,0.14);
          color: #e6ffee;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(0,255,80,0.08);
        }

        .animalsWrap {
          position: relative;
          height: 210px;
          margin-top: 28px;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(120,255,170,0.14);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)),
            rgba(0,0,0,0.16);
        }

        .animalTrack {
          position: absolute;
          inset: 0;
        }

        .animal {
          position: absolute;
          font-size: 54px;
          filter: drop-shadow(0 0 10px rgba(0,255,90,0.45));
          user-select: none;
          opacity: 0.95;
        }

        .raccoon {
          top: 24px;
          left: -80px;
          animation: moveRight 14s linear infinite;
        }

        .skunk {
          top: 92px;
          left: -100px;
          animation: moveRight 18s linear infinite;
          animation-delay: -6s;
        }

        .rat {
          bottom: 20px;
          left: -70px;
          animation: moveRight 11s linear infinite;
          animation-delay: -3s;
        }

        .bat {
          top: 10px;
          right: -80px;
          animation: moveLeft 13s linear infinite;
        }

        @keyframes moveRight {
          0% { transform: translateX(0) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 220px)) rotate(0deg); opacity: 0; }
        }

        @keyframes moveLeft {
          0% { transform: translateX(0) scaleX(-1); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateX(calc(-100vw - 220px)) scaleX(-1); opacity: 0; }
        }

        .pulseBar {
          margin-top: 20px;
          height: 10px;
          width: 100%;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
          border: 1px solid rgba(130,255,170,0.12);
        }

        .pulseFill {
          height: 100%;
          width: 34%;
          background: linear-gradient(90deg, #00b347, #00ff66, #aaffc5);
          box-shadow: 0 0 20px rgba(0,255,80,0.4);
          animation: sweep 2.4s ease-in-out infinite;
        }

        @keyframes sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(170%); }
          100% { transform: translateX(320%); }
        }

        .bottomNote {
          margin-top: 18px;
          color: #9fdcaf;
          font-size: 14px;
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .services {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroCard {
            padding: 28px 18px;
          }

          .animalsWrap {
            height: 180px;
          }
        }

        @media (max-width: 560px) {
          .page {
            padding: 18px 12px 48px;
          }

          .services {
            grid-template-columns: 1fr;
          }

          .btnPrimary,
          .btnSecondary {
            width: 100%;
            min-width: 0;
          }

          .animal {
            font-size: 42px;
          }

          .animalsWrap {
            height: 160px;
          }
        }
      `}</style>

      <main className="page">
        <div className="gridGlow" />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />

        <div className="container hero">
          <section className="heroCard">
            <div style={{ textAlign: "center" }}>
              <div className="eyebrow">Wildlife Control</div>

              <h1 className="title">
                <span className="titleAccent">Trap</span>Pro
              </h1>

              <p className="sub">
                Flashy, fast, sharp, and built to hit hard. Wildlife and pest
                control with a cleaner look, stronger presence, and a site that
                actually feels alive.
              </p>

              <div className="ctaRow">
                <a href="#" className="btnPrimary">
                  Number Coming Soon
                </a>
                <a href="#services" className="btnSecondary">
                  View Services
                </a>
              </div>

              <div id="services" className="services">
                <div className="service">Raccoons</div>
                <div className="service">Skunks</div>
                <div className="service">Rats & Rodents</div>
                <div className="service">Attic Cleanouts</div>
              </div>

              <div className="animalsWrap">
                <div className="animalTrack">
                  <div className="animal raccoon">🦝</div>
                  <div className="animal skunk">🦨</div>
                  <div className="animal rat">🐀</div>
                  <div className="animal bat">🦇</div>
                </div>
              </div>

              <div className="pulseBar">
                <div className="pulseFill" />
              </div>

              <p className="bottomNote">
                TrapPro website in progress. Contact details and full service
                rollout coming soon.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
