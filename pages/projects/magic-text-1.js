import React, { useEffect, useRef, useCallback } from "react";
import ProjectLayout from "../../components/ProjectLayout";
import CodeOf from "../../components/CodeOf";

export default function MagicText1() {
  const title = "Magic Text 1";
  const desc = "Magic text appearing and disappearing using javascript and css";
  const styledTitle = `-Magi<_Text-1-`;
  const text =
    "Λορεμ ιπσθμ δολορ σιτ αμετ, αδ νισλ ειθσ δεσερθισσε εθμ, ιδqθε ιντερεσσετ δελιcατισσιμι νεc cθ. Ηασ δεμοcριτθμ cονσεcτετθερ αν, τιβιqθε μεντιτθμ αccθσαμθσ ετ μελ, νε vιρισ ιντερεσσετ ρεφερρεντθρ ναμ. Περ εα ιπσθμ ομνεσqθε αccομμοδαρε, προ cθ εροσ ρεπθδιαρε πατριοqθε. Cθμ cθ ποστεα γλοριατθρ, πριμισ οπορτεατ Lorem ipsum εα εοσ. Cονσετετθρ vιτθπερατα τε περ, νο σεδ σθσcιπιτ ρεπθδιανδαε. Νεc vερεαρ ινερμισ ηαβεμθσ cθ, εα vελ οδιο αλια, νονθμεσ αδιπισcινγ ιδ ναμ. Cθ vελ ατqθι vιταε μολεστιε, σολθμ νθσqθαμ ιθδιcαβιτ ιν μεα. Ιδ αλιι αργθμεντθμ εαμ. Ιν αγαμ vερι ιμπετθσ δθο, εξ ειθσ περσιθσ αλβθcιθσ περ. Εαμ εθ αθγθε αδιπισcι ασσθεvεριτ, διcιτ δολορε φαστιδιι ατ vελ.".split(
      " "
    );

  const color = useRef(null);
  const checkWindow = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset;
    }
  }, []);

  useEffect(() => {
    const arrOfwords = Array.from(color.current.children);
    const event = window.addEventListener("touchstart", () => {
      arrOfwords.map((word) => {
        if (
          word.outerText.includes(text[0]) ||
          word.outerText.includes("Lorem") ||
          word.outerText.includes(text.at(-1))
        ) {
          return word.classList.add("touched");
        } else {
          return null;
        }
      });
    });
    //touch
    const eventEnd = window.addEventListener("touchend", () => {
      arrOfwords.map((word) => {
        return word.classList.remove("touched");
      });
    });

    return () => {
      window.removeEventListener("touchstart", event);
      window.removeEventListener("touchend", eventEnd);
    };
  }, [checkWindow]);

  return (
    <ProjectLayout title={title} desc={desc} styledTitle={styledTitle}>
      <div className="main__description">
        Touch the words and the magic happens
      </div>
      <div style={{ maxWidth: 400 }}>
        <p className="dixappear" ref={color}>
          {text.map((t, index) => {
            return (
              <b className="colorful" key={index}>
                {t}&nbsp;
                <span> </span>
              </b>
            );
          })}
        </p>
      </div>
      <div className="limit"></div>

      <p>
        First of all, you need a text and apply the method <i>.split()</i> to
        separate every words
      </p>
      <CodeOf type="js">{`const text = "Λορεμ ιπσθμ δολορ σιτ αμετ, αδ νισλ ειθσ... etc etc".split(" ");`}</CodeOf>
      <p>
        Check if the <i>window</i> Object exist
      </p>
      <CodeOf type="js">{`const checkWindow = useCallback(() => {
  if (typeof window !== "undefined") {
    return window.pageYOffset;
  }
}, []);`}</CodeOf>

      <p>
        The UseRef which points to every word and the useEffect hook which gives
        the class to some special words while touching the screen (Optional){" "}
      </p>

      <CodeOf type="js">{`  const color = useRef(null);

  useEffect(() => {
    const arrOfwords = Array.from(color.current.children);
    const event = window.addEventListener("touchstart", () => {
      arrOfwords.map((word) => {
        if (
          word.outerText.includes(text[0]) ||
          word.outerText.includes("Marty") ||
          word.outerText.includes(text.at(-1))
        ) {
          return word.classList.add("touched");
        } else {
          return null;
        }
      });
    });
    //touch
    const eventEnd = window.addEventListener("touchend", () => {
      arrOfwords.map((word) => {
        return word.classList.remove("touched");
      });
    });

    return () => {
      window.removeEventListener("touchstart", event);
      window.removeEventListener("touchend", eventEnd);
    };
  }, [checkWindow]);`}</CodeOf>

      <p>
        What to render with <i>return()</i>
      </p>

      <CodeOf type="jsx">{`<div style={{ maxWidth: 400 }}>
<p className="dixappear" ref={color}>
  {text.map((t, index) => {
    return (
      <b className="colorful" key={index}>
        {t}&nbsp;
        <span> </span>
      </b>
    );
  })}
</p>
</div>`}</CodeOf>

      <p>And now the style</p>

      <p>Style of the wrapper</p>
      <CodeOf type="css">{`.dixappear {
  animation: colored 3s infinite linear;
  color: hsl(0, 85%, 50%);
  display: inline-flex;
  flex-wrap: wrap;
  font-size: larger;
}

@keyframes colored {
  0% {
    color: hsl(0, 85%, 50%);
  }
  15% {
    color: hsl(50, 85%, 50%);
  }
  30% {
    color: hsl(100, 85%, 50%);
  }
  45% {
    color: hsl(150, 85%, 50%);
  }
  60% {
    color: hsl(200, 85%, 50%);
  }
  75% {
    color: hsl(250, 85%, 50%);
  }
  100% {
    color: hsl(300, 85%, 50%);
  }
}`}</CodeOf>

      <p>And the classes of every word</p>

      <CodeOf type="css">{`.colorful {
  font-weight: normal;
  color: inherit;

  animation: appear 7s infinite linear;
}

.colorful:nth-child(3n + 1) {
  animation-delay: 100ms;
}
.colorful:nth-child(3n + 2) {
  animation-delay: 200ms;
}
.colorful:nth-child(3n + 3) {
  animation-delay: 300ms;
}

@keyframes appear {
  0% {
    color: #ddd;
  }
  2% {
    color: #fff;
  }
  100% {
    color: #fff;
  }
}
.colorful:hover,
.colorful:focus {
  font-weight: 900;
  filter: opacity(1) !important;
  color: inherit;
  animation: none;
}
`}</CodeOf>
      <p>Finally, the special class to highlight some words, if you like it.</p>
      <CodeOf type="css">{`.touched {
  filter: opacity(1) !important;
  color: inherit;
  animation: none;
  }`}</CodeOf>
    </ProjectLayout>
  );
}
