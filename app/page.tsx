export default function Home() {
  const services = [
    "Raccoons",
    "Squirrels",
    "Rats & Mice",
    "Skunks",
    "Birds",
    "Exclusion & Prevention",
  ];

  const promises = [
    "Humane Removal",
    "Thorough Inspection",
    "Exclusion & Repair",
    "Honest & Reliable",
  ];

  const badges = [
    "Same Day Service",
    "Fully Insured & Licensed",
    "Proudly Serving The 530 Area",
    "5-Star Service You Can Trust",
  ];

  return (
    <>
      <main className="page">
        <div className="glow glow1" />
        <div className="glow glow2" />

        {/* animated raccoons only */}
        <img
          className="peek peekTop"
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80"
          alt="Raccoon peeking from top"
        />
        <img
          className="peek peekLeft"
          src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=900&q=80"
          alt="Raccoon peeking from left"
        />
        <img
          className="peek peekRight"
          src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?auto=format&fit=crop&w=900&q=80"
          alt="Raccoon peeking from right"
        />

        <section className="shell hero">
          <div className="heroLeft">
            <div className="roofWrap">
              <div className="roofL" />
              <div className="roofR" />
              <div className="windowGrid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="brandRow">
              <h1 className="brand">
                <span className="green">TRAP</span>
                <span className="white">PRO</span>
              </h1>

              <div className="trapLogo">
                <div className="trapDoor" />
              </div>
            </div>

            <div className="subBrand">WILDLIFE &amp; PEST CONTROL</div>

            <h2 className="headlineTop">WILDLIFE PROBLEMS?</h2>
            <h2 className="headlineBottom">WE SOLVE THEM.</h2>

            <div className="tagline">FAST. HUMANE. EFFECTIVE.</div>
          </div>

          <div className="heroRight">
            <div className="slash" />
            <img
              className="heroImg"
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1400&q=80"
              alt="Raccoon"
            />
            <div className="trusted">
              LOCAL &amp; TRUSTED
              <br />
              IN THE 530 AREA!
            </div>
          </div>
        </section>

        <section className="shell comingBar">
          <div className="phoneCircle">☎</div>
          <div className="comingText">
            <div className="comingBig">COMING SOON</div>
            <div className="comingSmall">CALL OR TEXT • SAME DAY SERVICE</div>
          </div>
        </section>

        <section className="shell content">
          <div className="panel">
            <div className="panelTitle">WE HANDLE:</div>
            <div className="serviceList">
              {services.map((item) => (
                <div key={item} className="serviceRow">
                  <div className="serviceIcon">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panelTitle">OUR PROMISE:</div>
            <div className="promiseBox">
              {promises.map((item) => (
                <div key={item} className="promiseRow">
                  <span className="check">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="reviewBox">
              <div className="stars">★★★★★</div>
              <div className="reviewBig">
                LOCAL. RELIABLE.
                <br />
                PROFESSIONAL.
              </div>
              <div className="reviewSmall">
                PROTECTING YOUR HOME
                <br />
                AND YOUR PEACE OF MIND.
              </div>
            </div>
          </div>

          <div className="gallery">
            <div className="galleryCard large">
              <img
                src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=1200&q=80"
                alt="Raccoon"
              />
            </div>
            <div className="galleryRow">
              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1595433562696-8c69b6e3c1a2?auto=format&fit=crop&w=900&q=80"
                  alt="Raccoon"
                />
              </div>
              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80"
                  alt="Raccoon"
                />
              </div>
            </div>
            <div className="galleryCard wide">
              <img
                src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=1200&q=80"
                alt="Raccoon"
              />
            </div>
          </div>
        </section>

        <section className="shell whiteBar">
          <div className="whiteCell">
            <div className="circleIcon">🌐</div>
            <div>
              <div className="whiteTop">VISIT US ONLINE</div>
              <div className="whiteMain highlight">TRAPPRO</div>
            </div>
          </div>

          <div className="whiteCell">
            <div className="circleIcon">✉</div>
            <div>
              <div className="whiteTop">EMAIL US</div>
              <div className="whiteMain">SALES@TRAPPRO530.COM</div>
            </div>
          </div>
        </section>

        <section className="shell badgeBar">
          {badges.map((item) => (
            <div key={item} className="badge">
              {item}
            </div>
          ))}
        </section>
      </main>

      <style>{`
        :root{
          --green:#b8d92b;
          --black:#050505;
          --white:#f5f5f5;
        }

        *{box-sizing:border-box}
        body{
          margin:0;
          font-family:Arial, Helvetica, sans-serif;
          background:var(--black);
          color:var(--white);
        }

        .page{
          min-height:100vh;
          padding:16px;
          position:relative;
          overflow-x:hidden;
          background:
            radial-gradient(circle at 15% 10%, rgba(184,217,43,.06), transparent 18%),
            radial-gradient(circle at 85% 20%, rgba(184,217,43,.06), transparent 18%),
            #050505;
        }

        .glow{
          position:fixed;
          border-radius:999px;
          filter:blur(90px);
          pointer-events:none;
          opacity:.18;
          z-index:0;
        }

        .glow1{
          width:280px;
          height:280px;
          background:var(--green);
          top:0;
          left:-80px;
        }

        .glow2{
          width:320px;
          height:320px;
          background:var(--green);
          right:-90px;
          top:180px;
        }

        .shell{
          max-width:1440px;
          margin:0 auto 16px;
          border:2px solid var(--green);
          background:#080808;
          position:relative;
          z-index:2;
          overflow:hidden;
          box-shadow:0 0 24px rgba(184,217,43,.10);
        }

        .peek{
          position:fixed;
          z-index:1;
          pointer-events:none;
          object-fit:cover;
          box-shadow:0 12px 24px rgba(0,0,0,.35);
        }

        .peekTop{
          width:150px;
          height:95px;
          top:-10px;
          left:50%;
          transform:translateX(-50%);
          border-radius:0 0 16px 16px;
          animation:peekTopAnim 7s ease-in-out infinite;
        }

        .peekLeft{
          width:120px;
          height:120px;
          left:-55px;
          top:60%;
          border-radius:16px;
          animation:peekLeftAnim 8s ease-in-out infinite;
        }

        .peekRight{
          width:120px;
          height:120px;
          right:-55px;
          top:36%;
          border-radius:16px;
          animation:peekRightAnim 8s ease-in-out infinite;
        }

        @keyframes peekTopAnim{
          0%,100%{transform:translateX(-50%) translateY(-36px)}
          50%{transform:translateX(-50%) translateY(-6px)}
        }

        @keyframes peekLeftAnim{
          0%,100%{transform:translateX(-30px) rotate(4deg)}
          50%{transform:translateX(18px) rotate(-2deg)}
        }

        @keyframes peekRightAnim{
          0%,100%{transform:translateX(30px) rotate(-4deg)}
          50%{transform:translateX(-18px) rotate(2deg)}
        }

        .hero{
          display:grid;
          grid-template-columns:1.05fr .95fr;
          min-height:470px;
        }

        .heroLeft{
          padding:28px;
          background:#060606;
          position:relative;
        }

        .roofWrap{
          position:relative;
          width:190px;
          height:24px;
          margin-bottom:4px;
        }

        .roofL,.roofR{
          position:absolute;
          top:8px;
          height:0;
          border-top:4px solid white;
        }

        .roofL{
          width:88px;
          left:0;
          transform:skewX(-38deg);
        }

        .roofR{
          width:118px;
          left:74px;
          transform:skewX(38deg);
        }

        .windowGrid{
          position:absolute;
          left:92px;
          top:0;
          display:grid;
          grid-template-columns:repeat(2,8px);
          gap:3px;
        }

        .windowGrid span{
          width:8px;
          height:8px;
          background:var(--green);
          display:block;
        }

        .brandRow{
          display:flex;
          align-items:flex-end;
          gap:16px;
          flex-wrap:wrap;
        }

        .brand{
          margin:0;
          font-size:clamp(60px, 8vw, 122px);
          line-height:.88;
          font-weight:900;
          letter-spacing:-3px;
          text-transform:uppercase;
        }

        .green{color:var(--green)}
        .white{color:white}

        .trapLogo{
          width:86px;
          height:86px;
          border:3px solid white;
          position:relative;
          background:
            repeating-linear-gradient(90deg, transparent 0 8px, white 8px 10px),
            repeating-linear-gradient(180deg, transparent 0 8px, white 8px 10px);
          margin-bottom:10px;
        }

        .trapDoor{
          position:absolute;
          width:26px;
          height:56px;
          right:8px;
          top:12px;
          border:3px solid white;
          transform:skewY(-8deg);
          background:rgba(255,255,255,.03);
        }

        .subBrand{
          margin-top:6px;
          font-size:24px;
          font-weight:900;
          text-transform:uppercase;
        }

        .headlineTop,.headlineBottom{
          margin:0;
          text-transform:uppercase;
          font-weight:900;
          line-height:.92;
        }

        .headlineTop{
          margin-top:24px;
          font-size:clamp(40px, 5vw, 84px);
        }

        .headlineBottom{
          font-size:clamp(48px, 6vw, 96px);
          color:var(--green);
        }

        .tagline{
          margin-top:14px;
          font-size:22px;
          font-weight:900;
          text-transform:uppercase;
        }

        .heroRight{
          position:relative;
          overflow:hidden;
          min-height:470px;
        }

        .slash{
          position:absolute;
          left:-30px;
          top:0;
          width:120px;
          height:100%;
          transform:skewX(-16deg);
          border-right:6px solid rgba(184,217,43,.25);
          background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0));
          z-index:2;
        }

        .heroImg{
          width:100%;
          height:100%;
          object-fit:cover;
          animation:slowLook 10s ease-in-out infinite alternate;
        }

        @keyframes slowLook{
          0%{transform:scale(1.03) translateX(0)}
          50%{transform:scale(1.06) translateX(-10px)}
          100%{transform:scale(1.05) translateX(8px)}
        }

        .trusted{
          position:absolute;
          right:18px;
          bottom:18px;
          background:var(--green);
          color:black;
          font-weight:900;
          text-transform:uppercase;
          padding:14px 18px;
          max-width:220px;
          line-height:1.05;
          transform:rotate(-6deg);
          z-index:3;
        }

        .comingBar{
          background:var(--green);
          color:black;
          display:flex;
          align-items:center;
          gap:18px;
          padding:20px 28px;
        }

        .phoneCircle{
          width:84px;
          height:84px;
          border-radius:999px;
          background:black;
          color:var(--green);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:38px;
          flex:0 0 auto;
        }

        .comingBig{
          font-size:clamp(44px, 6vw, 96px);
          font-weight:900;
          line-height:.95;
          text-transform:uppercase;
        }

        .comingSmall{
          font-size:20px;
          font-weight:900;
          text-transform:uppercase;
        }

        .content{
          display:grid;
          grid-template-columns:.9fr 1fr 1fr;
          gap:16px;
          padding:16px;
        }

        .panel{
          background:#090909;
        }

        .panelTitle{
          display:inline-block;
          background:var(--green);
          color:black;
          padding:8px 16px;
          font-size:28px;
          font-weight:900;
          text-transform:uppercase;
          margin-bottom:14px;
        }

        .serviceRow,.promiseRow{
          display:flex;
          align-items:center;
          gap:12px;
          padding:10px 0;
          border-bottom:1px solid rgba(184,217,43,.25);
          font-size:26px;
          font-weight:900;
          text-transform:uppercase;
        }

        .serviceIcon,.check{
          color:var(--green);
        }

        .promiseBox{
          border:2px solid rgba(184,217,43,.22);
          padding:18px;
          background:#101010;
          margin-bottom:18px;
        }

        .reviewBox{
          border:2px solid var(--green);
          padding:18px;
          text-align:center;
          background:#0a0a0a;
        }

        .stars{
          color:var(--green);
          font-size:28px;
          letter-spacing:6px;
          margin-bottom:8px;
        }

        .reviewBig{
          font-size:34px;
          font-weight:900;
          text-transform:uppercase;
          line-height:1.02;
        }

        .reviewSmall{
          margin-top:10px;
          color:var(--green);
          font-size:20px;
          font-weight:900;
          text-transform:uppercase;
          line-height:1.1;
        }

        .gallery{
          display:grid;
          gap:12px;
        }

        .galleryRow{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }

        .galleryCard{
          border:2px solid var(--green);
          overflow:hidden;
          background:#111;
        }

        .galleryCard.large{height:220px}
        .galleryCard.wide{height:180px}
        .galleryCard:not(.large):not(.wide){height:180px}

        .galleryCard img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .whiteBar{
          display:grid;
          grid-template-columns:1fr 1fr;
          background:#f2f2f2;
          color:black;
        }

        .whiteCell{
          display:flex;
          align-items:center;
          gap:18px;
          padding:24px 26px;
        }

        .whiteCell + .whiteCell{
          border-left:4px solid var(--green);
        }

        .circleIcon{
          width:80px;
          height:80px;
          border-radius:999px;
          background:black;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          flex:0 0 auto;
        }

        .whiteTop{
          font-size:22px;
          font-weight:900;
          text-transform:uppercase;
        }

        .whiteMain{
          font-size:38px;
          font-weight:900;
          text-transform:uppercase;
          line-height:1;
          word-break:break-word;
        }

        .highlight{
          background:linear-gradient(transparent 60%, rgba(184,217,43,.75) 60%);
          display:inline;
          padding:0 4px;
        }

        .badgeBar{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          background:#080808;
        }

        .badge{
          padding:20px 14px;
          text-align:center;
          font-weight:900;
          text-transform:uppercase;
          border-right:1px solid rgba(184,217,43,.25);
        }

        .badge:last-child{
          border-right:0;
        }

        @media (max-width:1100px){
          .hero,
          .content,
          .whiteBar,
          .badgeBar{
            grid-template-columns:1fr;
          }

          .galleryRow{
            grid-template-columns:1fr;
          }

          .whiteCell + .whiteCell{
            border-left:0;
            border-top:4px solid var(--green);
          }

          .badge{
            border-right:0;
            border-top:1px solid rgba(184,217,43,.25);
          }

          .badge:first-child{
            border-top:0;
          }
        }

        @media (max-width:700px){
          .comingBar{
            flex-direction:column;
            align-items:flex-start;
          }

          .serviceRow,.promiseRow{
            font-size:22px;
          }

          .reviewBig{
            font-size:28px;
          }

          .whiteMain{
            font-size:28px;
          }
        }
      `}</style>
    </>
  );
}
