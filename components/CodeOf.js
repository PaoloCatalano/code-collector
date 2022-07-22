import { useState } from "react";

export default function CodeOf({ children, type }) {
  const [copied, setCopied] = useState(false);

  const copyButton = () =>
    navigator.clipboard.writeText(children).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      },
      (err) => {
        console.log("failed to copy", err.message);
      }
    );

  return (
    <article className={`code-container ${type}`} data-type={type}>
      <button className="copy-button" onClick={() => copyButton()}>
        {copied ? "Copied" : "Copy"}
      </button>
      <code className={type}>{children}</code>
    </article>
  );
}
