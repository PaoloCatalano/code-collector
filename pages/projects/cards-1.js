import ProjectLayout from "../../components/ProjectLayout";
import CodeOf from "../../components/CodeOf";

export default function Cards1() {
  const title = "Cards / Page 1";
  const desc = "Different styles for creating Card Components";
  const styledTitle = `-<ards - 1-`;

  const cards = [
    {
      title: "Title 1",
      subtitle: "Subtitle one",
      content:
        "Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ.",
    },
    {
      title: "Title 2",
      subtitle: "Subtitle two",
      content:
        "Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ.",
    },
    {
      title: "Title 3",
      subtitle: "Subtitle three",
      content: (
        <ul>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
          <li>Λρεμ πσθμ δλρ στ μετ</li>
        </ul>
      ),
    },
    {
      title: "Title 4",
      subtitle: "Subtitle four",
      content:
        "Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ.  Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ. Λρεμ πσθμ δλρ στ μετ, δ σλ εθσ δεσερθε εθμ, δqθε τερεετ δελcτμ εc cθ.",
    },
  ];

  return (
    <ProjectLayout title={title} desc={desc} styledTitle={styledTitle}>
      <section className="card-container">
        {cards.map(({ title, subtitle, content }, index) => (
          <article key={index} className={`card card-color-${index + 1}`}>
            <div className="card-1-number">{index + 1}</div>
            <div className="card-1-header">
              <div className="card-1-title">
                <h1>{title}</h1>
                <i>{subtitle}</i>
              </div>
              <div className="card-1-side">
                <div className="card-1-number-hole"></div>
                <div className="card-1-placeholder"></div>
              </div>
            </div>
            <div className="card-1-content">
              <div className="child">
                <h2 className="card-1-more-info">
                  MORE INFO &darr; &#8595; &#x2193; {/* ↓ */}
                </h2>
                <div className="content">{content}</div>
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="limit"></div>
      <p>
        Given an <i>Object</i> with the following keys:{" "}
        <i>&#123; title, subtitle, content &#125;</i>
      </p>
      <CodeOf type="jsx">{`
      <section className="card-container">

      {
        cards.map(({ title, subtitle, content }, index) => (
        <article key={index} className={\`card card-color-\${index + 1}\`}>
          <div className="card-1-number">{index + 1}</div>
          <div className="card-1-header">
            <div className="card-1-title">
              <h1>{title}</h1>
              <i>{subtitle}</i>
            </div>
            <div className="card-1-side">
              <div className="card-1-number-hole"></div>
              <div className="card-1-placeholder"></div>
            </div>
          </div>
          <div className="card-1-content">
            <div className='child'>
              <h2 className="card-1-more-info">
                MORE INFO ↓↓↓
              </h2>
              <div className='content'>{content}</div>
            </div>
          </div>
        </article>
        ))
      }

    </section>
      `}</CodeOf>

      <p>Now let's have a look to the style</p>

      <p>
        The <i>container</i> of all the cards could be like this:
      </p>

      <CodeOf type="css">{`
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      flex-direction: row;
      max-width: 900px;
      gap: 4rem;
    }
    `}</CodeOf>

      <p>
        And the common layout of all <i>cards</i> looks like this:
      </p>

      <CodeOf type="css">{`
      .card {
        padding: 1rem;
        flex: 0 1 350px;
        max-width: 350px;
        height: 450px;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        border-radius: 1% 35px;
        margin: 3px;
        box-shadow: none;
        position: relative;
      
        transition: all 0.4s ease-out;
      }
    `}</CodeOf>
      <p>
        Now, there are many ways to give different colors to each card. One way
        is to connect every object <i>index</i> to a specific class of CSS
      </p>
      <CodeOf type="css">{`
      .card-color-1 {
        background: linear-gradient(to bottom right, #ff512f, #dd2476);
      }
      
      .card-color-2 {
        background: linear-gradient(to bottom right, #ff61d2, #fe9090);
      }
      
      .card-color-3 {
        background: linear-gradient(to bottom right, #fd8451, #ffbd6f);
      }
      
      .card-color-4 {
        background: linear-gradient(to bottom right, #00c0ff, #4218b8);
      }
    `}</CodeOf>
      <p>Here all the other classes for every element inside the cards</p>
      <CodeOf type="css">{`
    .card-1-header {
      display: grid;
      padding: 0.5rem;
      height: 100%;
      width: 100%;
      grid-template-columns: 1fr 80px;
      grid-template-rows: 1fr;
    }
    .card-1-title {
      border-radius: 3px 0 0 0;
    
      overflow: hidden;
      background: white;
      width: 100%;
      height: 100%;
      padding: 0 1rem;
    }
    
    .card-1-title h1 {
      font-size: 1.7rem;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    
    .card-1-title i {
      color: #999;
    }
    
    .card-1-side {
      display: grid;
      grid-template: 82px auto / 1fr;
    }
    
    .card-1-number-hole {
      border-radius: 0 25px 0 0;
    
      width: 100%;
      height: 100%;
      background: white;
      text-align: center;
      mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, white 50%);
    }
    
    .card-1-placeholder {
      width: 100%;
      height: 100%;
      background: white;
    }
    
    .card-1-number {
      position: absolute;
      right: 50px;
      top: 36px;
      font-weight: 900;
      font-size: 3rem;
      color: white;
    
      transition: all 0.4s ease-out;
      transition-delay: 0.2s;
    }
    
    .card-1-content {
      height: 100%;
      width: 100%;
      display: grid;
      padding: 0.5rem;
      grid-template-columns: 1fr;
      overflow: hidden;
      z-index: 1;
    
      transition: all 0.4s ease-out;
    }
    
    .card-1-content .child {
      overflow: scroll;
      border-radius: 0 0 3px 25px;
      background: white;
      height: 0%;
      width: 100%;
      padding: 2rem 1rem;
    
      transition: all 0.4s ease-out;
    }
    
    .card-1-content .child::-webkit-scrollbar {
      width: 0;
    }
    
    .card-1-content .child h2 {
      font-size: 1rem;
      color: #999;
      text-align: center;
      margin: 0;
    }
    
    .card-1-content .child .content {
      padding-top: 0.4rem;
      padding-right: 4rem;
      // text-align: justify;
      opacity: 0;
      transform: translateY(-64px);
      line-height: 1.2em;
      letter-spacing: 0.15em;
    
      transition: all 0.4s ease-out;
    }
    
    .card-1-content .child .content::first-letter {
      font-size: 130%;
    }
    
    .card-1-more-info {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.4s ease-out;
    }
    
    `}</CodeOf>
      <p>And finally, hover effects and responsive media</p>
      <CodeOf type="css">{`
    .card:hover {
      padding: 0;
    }
    
    .card:hover .card-1-more-info {
      opacity: 0;
      transform: translateY(-90px);
    }
    
    .card:hover .card-1-content .child .content {
      opacity: 1;
    }
    
    .card:hover .card-1-number {
      right: 35px;
      top: 21px;
    }
    
    .card:hover .card-1-content {
      height: 111%;
    }
    
    .card:hover .card-1-content .child {
      height: 94%;
      box-shadow: none;
    }
    
    @media screen and (max-width: 340px) {
      .card-1-title h1 {
        font-size: 1.3rem;
      }
    }
    
    `}</CodeOf>
    </ProjectLayout>
  );
}
