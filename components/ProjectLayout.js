import Head from "next/head";

export default function ProjectLayout({ children, title, desc, styledTitle }) {
  return (
    <>
      <Head>
        <title>{`PC_Code Collector | ${title}`}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="main__title">{styledTitle}</h1>
      <div className="main__description">{desc} </div>
      {children}
      <a
        className="black-button border"
        href="http://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Github
      </a>
    </>
  );
}
