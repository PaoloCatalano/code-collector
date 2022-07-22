import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo/pc_logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>PC_Code Collector</title>
        <meta
          name="description"
          content="PC_Code Collector is intended to be a collection of my code, which is going to be subdivided in different sections, such as React Components, Styles and Tricks, Javascript Functionality, Server-Side Configurations, Utilities, Libraries, Experiments and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="main__title">{`-<ode_<o||e<tor-`}</h1>
      <Image src={logo} alt="PC_Code-Collector" />
      <div className="main__description">
        PC_Code Collector is intended to be a collection of my code, which is
        going to be subdivided in different sections, such as React Components,
        Styles and Tricks, Javascript Functionality, Server-Side Configurations,
        Utilities, Libraries, Experiments and many more
        <p>
          <Link href="/projects">
            <a className="link">projects.</a>
          </Link>
        </p>
        <p /> The main idea is to create an easy-to-access platform where you
        can find inspiration for future projects, copy and use any of the
        feature here inside. There will be a section of the demo component and
        another one with all the code you need to re-use it on your application.
        <p /> I hope you enjoy it! You can contact me on the following email
        address:
        <a href="mailto:paolo.deveb@gmail.com" className="black-button">
          paolo.deveb@gmail.com
        </a>
      </div>
    </>
  );
}
