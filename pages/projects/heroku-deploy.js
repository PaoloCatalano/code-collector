import CodeOf from "../../components/CodeOf";
import ProjectLayout from "../../components/ProjectLayout";

export default function HerokuDeploy() {
  const title = "Deploy projects in Heroku";
  const styledTitle = `-Deploy in Hero|<u-`;
  const desc = "Here the command list for deploying an application to Heroku";
  const date = "15 Jul 2022";

  return (
    <ProjectLayout
      title={title}
      desc={desc}
      styledTitle={styledTitle}
      date={date}
    >
      <div className="limit"></div>

      <p>
        First cancel all old <i>.git</i> folders the application might contain
      </p>
      <p>For Windows</p>
      <CodeOf type="cmd">{`rmdir -Force -Recurse .git
`}</CodeOf>
      <p>or</p>
      <CodeOf type="cmd">{`rd /s /q .git
`}</CodeOf>
      <p>For MAC/Linux</p>
      <CodeOf type="cmd">{`rm -rf .git
`}</CodeOf>
      <p>Then...</p>
      <CodeOf type="cmd">{`git init
git add .
git commit -m "<<first commit>>"
heroku create <<name-Of-The-App>>`}</CodeOf>
      <p>Check if it points correctly</p>
      <CodeOf type="cmd">{`git remote -v`}</CodeOf>
      <p>Add env variables from the dashboard</p>
      <p>And Finally, push it!</p>
      <CodeOf type="cmd">{`git push heroku main/master`}</CodeOf>
    </ProjectLayout>
  );
}
