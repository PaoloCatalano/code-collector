import Head from "next/head";
import { useRouter } from "next/router";

export default function ProjectLayout({ children, title, desc, styledTitle }) {
  const router = useRouter();

  const link = router.asPath;

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
        href={`https://github.com/PaoloCatalano/code-collector/blob/main/pages${link}.js`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Github
      </a>
    </>
  );
}
