import { data } from "./data";

import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  return (
    <>
      <h1>Projects Page</h1>
      <p>Look at all my beautiful projects!</p>

      <ul className={styles.projectsList}>
        {data.map((project) => (
          <li key={project.id}>
            <ProjectCard data={project} />
          </li>
        ))}
      </ul>
    </>
  );
}

function ProjectCard(props) {
  const { data } = props;
  const { userId, id, title, completed } = data;

  return (
    <div
      style={{
        borderRadius: "10px",
        borderStyle: "solid",
        padding: ".4rem",
        borderColor: completed && "greenyellow",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}
