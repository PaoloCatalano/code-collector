import { useState, useEffect } from "react";
import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import LinkToPost from "../components/LinkToPost";
import SearchForm from "../components/SearchForm";

import { useRouter } from "next/router";

export default function Projects({ posts }) {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setTerm(router.query?.search ? router.query.search : "");
  }, [router.query]);

  useEffect(() => {
    if (term && term.trim() === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(({ content }) => content.includes(term)));
    }
  }, [term]);

  return (
    <div className="container">
      <Head>
        <title>PC_Code Collector | Projects</title>
        <meta
          name="description"
          content="PC_Code Collector display of all my projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main main__projects">
        <h1 className="title">{`-Proje<ts-`}</h1>

        <SearchForm term={term} setTerm={setTerm} />

        {filteredPosts.length === 0 ? (
          <div className="main__no-result">
            <i>No result with "{term}"...</i>
            <button
              type="button"
              className="white-button"
              onClick={() => setTerm("")}
            >
              {" "}
              Try with another word!
            </button>
          </div>
        ) : (
          <ol className="main__projects-list">
            {filteredPosts.map(({ filename }) => (
              <LinkToPost key={filename} filename={filename} />
            ))}
          </ol>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/projects");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8");

    return {
      filename,
      content: fileContents,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
