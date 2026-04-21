export default function Home() {
  const services = [
    "Raccoons",
    "Squirrels",
    "Rats & Mice",
    "Skunks",
    "Birds",
    "Exclusion & Prevention",
  ];

  const promise = [
    "Humane Removal",
    "Thorough Inspection",
    "Exclusion & Repair",
    "Honest & Reliable",
  ];

  const bottomBadges = [
    "Same Day Service",
    "Fully Insured & Licensed",
    "Proudly Serving The 530 Area",
    "5-Star Service You Can Trust",
  ];

  return (
    <>
      <main className="page">
        <section className="hero">
          <div className="heroLeft">
            <div className="roofWrap">
              <div className="roofLeft" />
              <div className="roofRight" />
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

            <div className="tagline">
              <span className="line" />
              <span>FAST. HUMANE. EFFECTIVE.</span>
              <span className="line" />
            </div>
          </div>

          <div className="heroRight">
            <div className="heroImageWrap">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1400&q=80"
                alt="Raccoon"
                className="heroImage"
              />
            </div>

            <div className="trustTag">
              LOCAL
              <br />
              &amp; TRUSTED
              <br />
              IN THE 530 AREA!
            </div>
          </div>
        </section>

        <section className="phoneBand">
          <div className="phoneIcon">☎</div>

          <div className="phoneText">
            <div className="phoneBig">NUMBER COMING SOON</div>
            <div className="phoneSmall">
              <span className="smallLine" />
              <span>CALL OR TEXT – SAME DAY SERVICE!</span>
              <span className="smallLine" />
            </div>
          </div>
        </section>

        <section className="middle">
          <div className="servicesCol">
            <div className="labelBrush">WE HANDLE:</div>

            <div className="serviceList">
              {services.map((item) => (
                <div className="serviceRow" key={item}>
                  <div className="serviceDot">●</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="promiseCol">
            <div className="promiseTop">
              <div className="shield">✓</div>

              <div className="promiseText">
                <div className="promiseTitle">OUR PROMISE:</div>

                {promise.map((item) => (
                  <div className="promiseRow" key={item}>
                    <span className="check">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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

          <div className="galleryCol">
            <div className="galleryGrid">
              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1601758173927-196cc8a9b1e5?auto=format&fit=crop&w=900&q=80"
                  alt="Rat"
                />
              </div>

              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?auto=format&fit=crop&w=900&q=80"
                  alt="Skunk"
                />
              </div>

              <div className="galleryCard wide">
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80"
                  alt="Raccoon"
                />
              </div>

              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"
                  alt="Bird"
                />
              </div>

              <div className="galleryCard">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80"
                  alt="Squirrel"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="whiteBand">
          <div className="whiteCell">
            <div className="circleIcon">🌐</div>
            <div>
              <div className="whiteTop">VISIT US ONLINE</div>
              <div className="whiteMain highlight">TRAPPRO</div>
            </div>
          </div>

          <div className="whiteCell divider">
            <div className="circleIcon">✉</div>
            <div>
              <div className="whiteTop">EMAIL US</div>
              <div className="whiteMain">SALES@TRAPPRO530.COM</div>
            </div>
          </div>
        </section>

        <section className="bottomBand">
          {bottomBadges.map((item) => (
            <div className="bottomItem" key={item}>
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
          --off:#d9d9d9;
          --line:rgba(184,217,43,.28);
        }

        *{box-sizing:border-box}

        body{
          margin:0;
          background:var(--black);
          color:var(--white);
          font-family:Arial, Helvetica, sans-serif;
        }

        .page{
          min-height:100vh;
          background:
            radial-gradient(circle at 15% 10%, rgba(184,217,43,.05), transparent 18%),
            radial-gradient(circle at 85% 20%, rgba(184,217,43,.05), transparent 18%),
            #050505;
        }

        .hero{
          display:grid;
          grid-template-columns:1.08fr .92fr;
          min-height:470px;
          background:#070707;
        }

        .heroLeft{
          padding:28px 30px 24px;
          background:#060606;
        }

        .roofWrap{
          position:relative;
          width:190px;
          height:28px;
          margin-bottom:2px;
        }

        .roofLeft,
        .roofRight{
          position:absolute;
          top:7px;
          height:0;
          border-top:4px solid white;
        }

        .roofLeft{
          left:0;
          width:88px;
          transform:skewX(-38deg);
        }

        .roofRight{
          left:74px;
          width:118px;
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
          font-size:clamp(62px, 8vw, 126px);
          line-height:.86;
          font-weight:900;
          letter-spacing:-3px;
          text-transform:uppercase;
        }

        .green{color:var(--green)}
        .white{color:white}

        .trapLogo{
          width:90px;
          height:90px;
          border:3px solid white;
          position:relative;
          background:
            repeating-linear-gradient(90deg, transparent 0 8px, white 8px 10px),
            repeating-linear-gradient(180deg, transparent 0 8px, white 8px 10px);
          margin-bottom:12px;
        }

        .trapDoor{
          position:absolute;
          width:28px;
          height:58px;
          right:8px;
          top:12px;
          border:3px solid white;
          transform:skewY(-8deg);
          background:rgba(255,255,255,.03);
        }

        .subBrand{
          margin-top:4px;
          font-size:clamp(18px, 1.9vw, 30px);
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:1px;
        }

        .headlineTop,
        .headlineBottom{
          margin:0;
          text-transform:uppercase;
          font-weight:900;
          line-height:.92;
        }

        .headlineTop{
          margin-top:22px;
          font-size:clamp(40px, 5vw, 88px);
          color:white;
        }

        .headlineBottom{
          font-size:clamp(48px, 6vw, 102px);
          color:var(--green);
        }

        .tagline{
          margin-top:14px;
          display:flex;
          align-items:center;
          gap:14px;
          font-size:clamp(18px, 2vw, 34px);
          font-weight:900;
          text-transform:uppercase;
        }

        .line{
          flex:1;
          height:3px;
          background:var(--green);
        }

        .heroRight{
          position:relative;
          overflow:hidden;
          background:#0a0a0a;
        }

        .heroImageWrap{
          width:100%;
          height:100%;
          position:relative;
        }

        .heroImageWrap::before{
          content:"";
          position:absolute;
          left:-24px;
          top:0;
          width:110px;
          height:100%;
          transform:skewX(-16deg);
          border-right:6px solid rgba(184,217,43,.28);
          background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0));
          z-index:2;
        }

        .heroImage{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .trustTag{
          position:absolute;
          right:18px;
          bottom:20px;
          background:var(--green);
          color:black;
          font-weight:900;
          text-transform:uppercase;
          line-height:1.05;
          padding:14px 18px;
          font-size:clamp(18px, 2vw, 34px);
          transform:rotate(-6deg);
          box-shadow:0 10px 20px rgba(0,0,0,.28);
          z-index:3;
        }

        .phoneBand{
          background:var(--green);
          color:black;
          display:grid;
          grid-template-columns:120px 1fr;
          align-items:center;
          gap:20px;
          padding:18px 28px;
          border-top:2px solid #040404;
          border-bottom:2px solid #040404;
        }

        .phoneIcon{
          width:88px;
          height:88px;
          border-radius:999px;
          background:black;
          color:var(--green);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:40px;
          font-weight:900;
        }

        .phoneBig{
          font-size:clamp(46px, 6vw, 96px);
          font-weight:900;
          line-height:.95;
          text-transform:uppercase;
          letter-spacing:1px;
        }

        .phoneSmall{
          margin-top:8px;
          display:flex;
          align-items:center;
          gap:12px;
          font-size:clamp(16px, 1.6vw, 28px);
          font-weight:900;
          text-transform:uppercase;
        }

        .smallLine{
          flex:1;
          height:3px;
          background:rgba(0,0,0,.45);
        }

        .middle{
          display:grid;
          grid-template-columns:.95fr .95fr 1.1fr;
          gap:18px;
          padding:22px;
          background:#060606;
        }

        .labelBrush{
          display:inline-block;
          background:var(--green);
          color:black;
          padding:8px 18px;
          font-size:clamp(22px, 2vw, 36px);
          font-weight:900;
          text-transform:uppercase;
          margin-bottom:14px;
        }

        .serviceRow{
          display:flex;
          align-items:center;
          gap:14px;
          padding:12px 0;
          border-bottom:1px solid var(--line);
          font-size:clamp(24px, 1.8vw, 38px);
          font-weight:900;
          text-transform:uppercase;
        }

        .serviceDot{
          width:40px;
          color:var(--green);
          text-align:center;
        }

        .promiseTop{
          display:flex;
          gap:18px;
          align-items:flex-start;
        }

        .shield{
          min-width:90px;
          height:90px;
          border:4px solid white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:42px;
          font-weight:900;
          color:var(--green);
          clip-path:polygon(50% 0%, 100% 18%, 100% 62%, 50% 100%, 0% 62%, 0% 18%);
        }

        .promiseTitle{
          color:var(--green);
          font-size:clamp(28px, 2vw, 42px);
          font-weight:900;
          text-transform:uppercase;
          margin-bottom:10px;
        }

        .promiseRow{
          display:flex;
          align-items:center;
          gap:12px;
          font-size:clamp(22px, 1.55vw, 30px);
          font-weight:800;
          margin:8px 0;
        }

        .check{
          color:var(--green);
        }

        .reviewBox{
          border:2px solid var(--green);
          padding:18px;
          text-align:center;
          margin-top:18px;
          background:#0a0a0a;
        }

        .stars{
          color:var(--green);
          font-size:28px;
          letter-spacing:6px;
          margin-bottom:8px;
        }

        .reviewBig{
          font-size:clamp(28px, 2.2vw, 42px);
          font-weight:900;
          text-transform:uppercase;
          line-height:1.02;
        }

        .reviewSmall{
          margin-top:10px;
          color:var(--green);
          font-size:clamp(18px, 1.4vw, 26px);
          font-weight:900;
          text-transform:uppercase;
          line-height:1.1;
        }

        .galleryGrid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }

        .galleryCard{
          border:2px solid var(--green);
          overflow:hidden;
          background:#111;
          min-height:180px;
        }

        .galleryCard.wide{
          grid-column:span 2;
          min-height:190px;
        }

        .galleryCard img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .whiteBand{
          display:grid;
          grid-template-columns:1fr 1fr;
          background:#f2f2f2;
          color:black;
          border-top:2px solid #040404;
          border-bottom:2px solid #040404;
        }

        .whiteCell{
          display:flex;
          align-items:center;
          gap:18px;
          padding:24px 26px;
        }

        .whiteCell.divider{
          border-left:4px solid var(--green);
        }

        .circleIcon{
          width:78px;
          height:78px;
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
          font-size:clamp(22px, 1.9vw, 32px);
          font-weight:900;
          text-transform:uppercase;
        }

        .whiteMain{
          font-size:clamp(30px, 2.6vw, 52px);
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

        .bottomBand{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          background:#070707;
        }

        .bottomItem{
          padding:20px 14px;
          text-align:center;
          font-weight:900;
          text-transform:uppercase;
          font-size:clamp(16px, 1.25vw, 22px);
          border-right:1px solid var(--line);
        }

        .bottomItem:last-child{
          border-right:0;
        }

        @media (max-width:1100px){
          .hero,
          .middle,
          .whiteBand,
          .bottomBand{
            grid-template-columns:1fr;
          }

          .galleryGrid{
            grid-template-columns:1fr;
          }

          .galleryCard.wide{
            grid-column:span 1;
          }

          .whiteCell.divider{
            border-left:0;
            border-top:4px solid var(--green);
          }

          .bottomItem{
            border-right:0;
            border-top:1px solid var(--line);
          }

          .bottomItem:first-child{
            border-top:0;
          }
        }

        @media (max-width:700px){
          .phoneBand{
            grid-template-columns:1fr;
            text-align:center;
            justify-items:center;
          }

          .phoneSmall .smallLine{
            display:none;
          }

          .promiseTop{
            flex-direction:column;
          }

          .whiteMain{
            font-size:28px;
          }
        }
      `}</style>
    </>
  );
}
