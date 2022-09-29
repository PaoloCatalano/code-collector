import ProjectLayout from "../../components/ProjectLayout";
import CodeOf from "../../components/CodeOf";
import Link from "next/link";

export default function Cards1() {
  const title = "Buttons / Page 1";
  const desc = "Different styles Button Components";
  const styledTitle = `Buttons - 1-`;
  const date = "29 Sep 2022";

  return (
    <ProjectLayout
      title={title}
      desc={desc}
      styledTitle={styledTitle}
      date={date}
    >
      <section className="button-container buttons">
        <button className="button-1">click me</button>
        <button className="button-1 button-1-rounded">click me</button>
        <button className="button-1 button-1-bg">click me</button>
      </section>
    </ProjectLayout>
  );
}
