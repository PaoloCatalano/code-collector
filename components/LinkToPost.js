import Link from "next/link";

export default function LinkToPost({ filename }) {
  const url = filename.split(".", 1).toString();
  return (
    <li>
      <Link href={`/projects/${url}`}>
        <a>{url.replace(/-/g, " ")}</a>
      </Link>
    </li>
  );
}
