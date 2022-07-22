import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Modal({ isVisible, setVisibility }) {
  return (
    <motion.div
      className="main__modal"
      style={{ paddingTop: 0 }}
      initial={{
        // x: -100,
        rotateY: "90deg",
      }}
      animate={{
        // x: isVisible ? 100 : -100,
        rotateY: isVisible ? "0deg" : "90deg",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="main__navbar" style={{ paddingRight: 0, paddingTop: 0 }}>
        <h1 className="main__modal__menu">Menu</h1>
        <button type="button" onClick={() => setVisibility(false)}>
          <Image src="/icons/close.svg" alt="menu" width={30} height={30} />
        </button>{" "}
      </div>
      <Link href="/projects">
        <a onClick={() => setVisibility(false)} className="main__modal__title">
          <h2 className="link">{`-Proje<ts-`}</h2>
        </a>
      </Link>
      <ol className="main__modal__links">
        <li>
          <Link href="/projects?search=css">
            <a onClick={() => setVisibility(false)}>Styles</a>
          </Link>
        </li>
        <li>
          <Link href="/projects?search=js">
            <a onClick={() => setVisibility(false)}>Javascript</a>
          </Link>
        </li>
        <li>
          <Link href="/projects?search=jsx">
            <a onClick={() => setVisibility(false)}>React Components</a>
          </Link>
        </li>
        <li>
          <Link href="/projects?search=node">
            <a onClick={() => setVisibility(false)}>Server Side</a>
          </Link>
        </li>
        <li>
          <Link href="/projects?search=cmd">
            <a onClick={() => setVisibility(false)}>Command Lines</a>
          </Link>
        </li>
      </ol>

      <Link href="/credits">
        <a onClick={() => setVisibility(false)} className="main__modal__title">
          <h2 className="link">{`-<redits-`}</h2>
        </a>
      </Link>
    </motion.div>
  );
}
