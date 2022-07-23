import ProjectLayout from "../../components/ProjectLayout";
import CodeOf from "../../components/CodeOf";
import Link from "next/link";

export default function Cards1() {
  const title = "Cards / Page 2";
  const desc = "Different styles for creating Card Components";
  const styledTitle = `-<ards - 2-`;

  return (
    <ProjectLayout title={title} desc={desc} styledTitle={styledTitle}>
      <section className="card-container">
        {cards.map(({ title, subtitle, content }, index) => (
          <article key={index} className={`card card-color-${index + 1}`}>
            <div className="card-2-number-header">{index + 1}</div>

            <div className="card-2-header">
              <div className="card-2-title">
                <h1>{title}</h1>
                <i>{subtitle}</i>
              </div>
              <div className="card-2-side">
                <div className="card-2-number-hole"></div>
                <div className="card-2-placeholder"></div>
              </div>
            </div>
            <div className="card-2-content">
              <div
                className={`card-2-more-info card-2-number card-2-number-color-${
                  index + 1
                }`}
              >
                {index + 1}
              </div>
              <div className="child">
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
{cards.map(({ title, subtitle, content }, index) => (
  <article key={index} className={\`card card-color-\${index + 1}\`}>
    <div className="card-2-number-header">{index + 1}</div>
    <div className="card-2-header">
      <div className="card-2-title">
        <h1>{title}</h1>
        <i>{subtitle}</i>
      </div>
      <div className="card-2-side">
        <div className="card-2-number-hole"></div>
        <div className="card-2-placeholder"></div>
      </div>
    </div>
    <div className="card-2-content">
      <div
        className={\`card-2-more-info card-2-number card-2-number-color-\${
          index + 1
        }\`}
      >
        {index + 1}
      </div>
      <div className="child">
        <div className="content">{content}</div>
      </div>
    </div>
  </article>
))}
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
      <p>Here all the other classes for every element inside the cards:</p>
      <p>Header</p>
      <CodeOf type="css">{`
    .card-2-header {
      display: grid;
      padding: 0.5rem;
      height: 100%;
      width: 100%;
      grid-template-columns: 1fr 80px;
      grid-template-rows: 1fr;
    }
    .card-2-title {
      border-radius: 3px 0 0 0;
      overflow: hidden;
      background: white;
      width: 100%;
      height: 100%;
      padding: 0 1rem;
    }
    
    .card-2-title h1 {
      font-size: 1.7rem;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    
    .card-2-title i {
      color: #999;
    }
    `}</CodeOf>
      <p>Side Number</p>
      <CodeOf type="css">{`
    .card-2-side {
      display: grid;
      grid-template: 82px auto / 1fr;
    }
    
    .card-2-number-hole {
      border-radius: 0 25px 0 0;
      width: 100%;
      height: 100%;
      background: white;
      text-align: center;
      mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, white 50%);
    }
    
    .card-2-placeholder {
      width: 100%;
      height: 100%;
      background: white;
    }
    
    .card-2-number-header {
      position: absolute;
      right: 50%;
      top: 50%;
      font-weight: 900;
      font-size: 3rem;
      color: white;
      opacity: 0;
    
      transition: all 0.2s cubic-bezier(1, 0.04, 1, 1.17);;
      transition-delay: 0.05s;
    }
    `}</CodeOf>
      <p>The hidden content</p>
      <CodeOf type="css">{`
    .card-2-content {
      position: relative;
      border-radius: 50%;
      height: 50%;
      width: 46%;
      display: grid;
      grid-template-columns: 1fr;
      overflow: hidden;
      z-index: 1;
    
      transition: all 0.4s ease-out;
    }
    
    .card-2-content .child {
      overflow: scroll;
      border-radius: 0 0 3px 25px;
      background: white;
      height: 0%;
      width: 100%;
      padding: 2rem 1rem;
    
      transition: all 0.4s ease-out;
    }
    
    .card-2-content .child::-webkit-scrollbar {
      width: 0;
    }
     
    .card-2-content .child .content {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-top: 0.4rem;
      padding-right: 4rem;
      // text-align: justify;
      opacity: 0;
      transform: translateY(-45px);
      line-height: 1.2em;
      letter-spacing: 0.15em;
    
      transition: all 0.4s ease-out;
    }
    
    .card-2-content .child .content::first-letter {
      font-size: 130%;
    }
    `}</CodeOf>
      <p>The label for the hidden content in different colors</p>
      <CodeOf type="css">{`
    .card-2-more-info {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s cubic-bezier(1, 0, 1, 0);
      transition-delay: 0.05s;
    }
    
    .card-2-content .card-2-number {
      position: absolute;
      font-size: 6rem;
      font-weight: 900;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }

    .card-2-number-color-1 {
      color: #e9345c;
    }
    .card-2-number-color-2 {
      color: #ff7eaa;
    }
    .card-2-number-color-3 {
      color: #ffa563;
    }
    .card-2-number-color-4 {
      color: #2859d3;
    }
   
    `}</CodeOf>
      <p>And finally, hover effects and responsive media</p>
      <CodeOf type="css">{`
    .card:hover {
      padding: 0;
    }
    
    .card:hover .card-2-number-header {
      right: 35px;
      top: 21px;
      opacity: 1;
    }
    
    .card:hover .card-2-content {
      border-radius: 0;
      height: 100%;
      width: 95%;
    }
    
    .card:hover .card-2-more-info {
      opacity: 0;
      transform: translate(60px, -90px);
    }
    
    .card:hover .card-2-content .child .content {
      opacity: 1;
    }
    
    .card:hover .card-2-content .child {
      height: 97%;
    }
    
    @media screen and (max-width: 340px) {
      .card-2-title h1 {
        font-size: 1.3rem;
      }
    }
    
    `}</CodeOf>
      <div className="more-links">
        <Link href="/projects/cards-1">
          <a>&larr; Previous Cards </a>
        </Link>
        <div></div>
      </div>
    </ProjectLayout>
  );
}

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
