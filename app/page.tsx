export default function Home() {
  const services = [
    "Raccoons",
    "Squirrels",
    "Rats & Mice",
    "Skunks",
    "Birds",
    "Exclusion & Prevention",
  ];

  return (
    <>
      <main className="page">
        <section className="hero">
          <div className="left">
            <div className="roof" />
            <div className="brandRow">
              <h1 className="brand">
                <span className="green">TRAP</span>
                <span className="white">PRO</span>
              </h1>
              <div className="trapIcon">
                <div className="trapDoor" />
              </div>
            </div>

            <div className="subbrand">WILDLIFE &amp; PEST CONTROL</div>

            <h2 className="headlineTop">WILDLIFE PROBLEMS?</h2>
            <h2 className="headlineBottom">WE SOLVE THEM.</h2>

            <div className="tagline">FAST. HUMANE. EFFECTIVE.</div>
          </div>

          <div className="right">
            <img
              className="heroImg"
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1400&q=80"
              alt="Raccoon"
            />
            <div className="trusted">LOCAL &amp; TRUSTED IN THE 530 AREA!</div>
          </div>
        </section>

        <section className="comingBar">
          <div className="phoneIcon">☎</div>
          <div>
            <div className="comingBig">COMING SOON</div>
            <div className="comingSmall">CALL OR TEXT • SAME DAY SERVICE</div>
          </div>
        </section>

        <section className="content">
          <div className="box">
            <div className="boxTitle">WE HANDLE</div>
            {services.map((item) => (
              <div key={item} className="serviceRow">
                <span className="dot">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="box">
            <div className="boxTitle">OUR PROMISE</div>
            <div className="promise">✔ Humane Removal</div>
            <div className="promise">✔ Thorough Inspection</div>
            <div className="promise">✔ Exclusion &amp; Repair</div>
            <div className="promise">✔ Honest &amp; Reliable</div>

            <div className="review">
              <div className="stars">★★★★★</div>
              <div className="reviewBig">LOCAL. RELIABLE. PROFESSIONAL.</div>
              <div className="reviewSmall">
                PROTECTING YOUR HOME AND YOUR PEACE OF MIND.
              </div>
            </div>
          </div>

          <div className="gallery">
            <img
              src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=900&q=80"
              alt="Raccoon 1"
            />
            <img
              src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?auto=format&fit=crop&w=900&q=80"
              alt="Raccoon 2"
            />
            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80"
              alt="Raccoon 3"
            />
          </div>
        </section>

        <section className="footerBar">
          <div>SAME DAY SERVICE</div>
          <div>FULLY INSURED &amp; LICENSED</div>
          <div>PROUDLY SERVING THE 530 AREA</div>
          <div>5-STAR SERVICE YOU CAN TRUST</div>
        </section>

        <img
          className="peek topPeek"
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80"
          alt="Raccoon peeking top"
        />
        <img
          className="peek leftPeek"
          src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=700&q=80"
          alt="Raccoon left"
        />
        <img
          className="peek rightPeek"
          src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?auto=format&fit=crop&w=700&q=80"
          alt="Raccoon right"
        />
      </main>

      <style>{`
        :root {
          --green: #b8d92b;
          --bg: #050505;
          --white: #f5f5f5;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 10%, rgba(184,217,43,.06), transparent 20%),
            radial-gradient(circle at 80% 20%, rgba(184,217,43,.06), transparent 20%),
            #050505;
          position: relative;
          overflow-x: hidden;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 2px solid var(--green);
          margin: 16px;
          background: #080808;
        }

        .left {
          padding: 28px;
        }

        .roof {
          width: 170px;
          height: 18px;
          border-top: 4px solid white;
          border-left: 4px solid white;
          transform: skewX(-35deg);
          margin-bottom: 8px;
        }

        .brandRow {
          display: flex;
          align-items: flex-end;
          gap: 14px;
          flex-wrap: wrap;
        }

        .brand {
          margin: 0;
          font-size: clamp(56px, 8vw, 120px);
          line-height: .88;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .green { color: var(--green); }
        .white { color: white; }

        .trapIcon {
          width: 82px;
          height: 82px;
          border: 3px solid white;
          position: relative;
          background:
            repeating-linear-gradient(90deg, transparent 0 8px, white 8px 10px),
            repeating-linear-gradient(180deg, transparent 0 8px, white 8px 10px);
          margin-bottom: 10px;
        }

        .trapDoor {
          position: absolute;
          width: 26px;
          height: 54px;
          right: 8px;
          top: 12px;
          border: 3px solid white;
          transform: skewY(-8deg);
          background: rgba(255,255,255,.02);
        }

        .subbrand {
          margin-top: 6px;
          font-size: 22px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .headlineTop,
        .headlineBottom {
          margin: 0;
          text-transform: uppercase;
          font-weight: 900;
          line-height: .92;
        }

        .headlineTop {
          margin-top: 26px;
          font-size: clamp(40px, 5vw, 84px);
        }

        .headlineBottom {
          font-size: clamp(48px, 6vw, 96px);
          color: var(--green);
        }

        .tagline {
          margin-top: 14px;
          font-size: 22px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .right {
          position: relative;
          min-height: 440px;
          overflow: hidden;
          border-left: 2px solid rgba(184,217,43,.2);
        }

        .heroImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: slowLook 10s ease-in-out infinite alternate;
        }

        .trusted {
          position: absolute;
          right: 18px;
          bottom: 18px;
          background: var(--green);
          color: black;
          font-weight: 900;
          text-transform: uppercase;
          padding: 14px 18px;
          max-width: 220px;
          transform: rotate(-6deg);
          line-height: 1.05;
        }

        .comingBar {
          margin: 0 16px 16px;
          background: var(--green);
          color: black;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px 28px;
          border: 2px solid #050505;
        }

        .phoneIcon {
          width: 84px;
          height: 84px;
          border-radius: 999px;
          background: black;
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          font-weight: 900;
          flex: 0 0 auto;
        }

        .comingBig {
          font-size: clamp(42px, 6vw, 94px);
          font-weight: 900;
          line-height: .95;
          text-transform: uppercase;
        }

        .comingSmall {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .content {
          display: grid;
          grid-template-columns: .9fr 1fr 1fr;
          gap: 16px;
          margin: 0 16px 16px;
        }

        .box {
          border: 2px solid var(--green);
          background: #090909;
          padding: 18px;
        }

        .boxTitle {
          display: inline-block;
          background: var(--green);
          color: black;
          padding: 8px 16px;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 28px;
          margin-bottom: 14px;
        }

        .serviceRow,
        .promise {
          font-size: 28px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 10px 0;
          border-bottom: 1px solid rgba(184,217,43,.25);
        }

        .dot {
          color: var(--green);
          margin-right: 10px;
        }

        .review {
          margin-top: 18px;
          border: 2px solid var(--green);
          padding: 18px;
          text-align: center;
        }

        .stars {
          color: var(--green);
          font-size: 28px;
          letter-spacing: 6px;
          margin-bottom: 8px;
        }

        .reviewBig {
          font-size: 34px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.02;
        }

        .reviewSmall {
          margin-top: 10px;
          color: var(--green);
          font-size: 22px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .gallery {
          display: grid;
          gap: 12px;
        }

        .gallery img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border: 2px solid var(--green);
          display: block;
        }

        .footerBar {
          margin: 0 16px 16px;
          border: 2px solid var(--green);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #080808;
        }

        .footerBar div {
          padding: 18px 12px;
          text-align: center;
          font-weight: 900;
          text-transform: uppercase;
          border-right: 1px solid rgba(184,217,43,.25);
        }

        .footerBar div:last-child {
          border-right: 0;
        }

        .peek {
          position: fixed;
          z-index: 1;
          pointer-events: none;
          object-fit: cover;
          box-shadow: 0 10px 24px rgba(0,0,0,.35);
        }

        .topPeek {
          width: 150px;
          height: 95px;
          left: 50%;
          top: -10px;
          transform: translateX(-50%);
          border-radius: 0 0 16px 16px;
          animation: topPeekAnim 7s ease-in-out infinite;
        }

        .leftPeek {
          width: 120px;
          height: 120px;
          left: -55px;
          top: 62%;
          border-radius: 16px;
          animation: leftPeekAnim 8s ease-in-out infinite;
        }

        .rightPeek {
          width: 120px;
          height: 120px;
          right: -55px;
          top: 38%;
          border-radius: 16px;
          animation: rightPeekAnim 8.5s ease-in-out infinite;
        }

        @keyframes slowLook {
          0% { transform: scale(1.03) translateX(0px); }
          50% { transform: scale(1.06) translateX(-10px); }
          100% { transform: scale(1.05) translateX(8px); }
        }

        @keyframes topPeekAnim {
          0%,100% { transform: translateX(-50%) translateY(-36px); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }

        @keyframes leftPeekAnim {
          0%,100% { transform: translateX(-30px) rotate(4deg); }
          50% { transform: translateX(18px) rotate(-2deg); }
        }

        @keyframes rightPeekAnim {
          0%,100% { transform: translateX(30px) rotate(-4deg); }
          50% { transform: translateX(-18px) rotate(2deg); }
        }

        @media (max-width: 1100px) {
          .hero,
          .content,
          .footerBar {
            grid-template-columns: 1fr;
          }

          .right {
            border-left: 0;
            border-top: 2px solid rgba(184,217,43,.2);
          }
        }

        @media (max-width: 700px) {
          .comingBar {
            flex-direction: column;
            align-items: flex-start;
          }

          .comingBig {
            font-size: 46px;
          }

          .serviceRow,
          .promise {
            font-size: 22px;
          }

          .reviewBig {
            font-size: 28px;
          }

          .reviewSmall {
            font-size: 18px;
          }

          .footerBar div {
            border-right: 0;
            border-bottom: 1px solid rgba(184,217,43,.25);
          }

          .footerBar div:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
