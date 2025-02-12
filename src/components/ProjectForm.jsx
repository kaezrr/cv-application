import { useState } from "react";
import { addProject } from "../data";
import InfoSection from "./InfoSection";

function Project({
  title,
  del,
  name = "",
  desc = "",
  link = "",
  index = null,
}) {
  return (
    <section>
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" onClick={del} />
      <input
        placeholder="Project Title"
        className="project-title"
        defaultValue={name}
        data-index={index}
        required
      />
      <input
        placeholder="Project Link"
        className="project-link"
        defaultValue={link}
        required
      />
      <textarea
        placeholder="Description"
        rows="3"
        className="project-description"
        defaultValue={desc}
        required
      />
    </section>
  );
}

export default function ProjectForm({ open, change, resume, setResume }) {
  const [data, setData] = useState(resume.projects);
  const [itemCount, setItemCount] = useState(data.length);

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    let newData = { ...resume };
    for (let i = 0; i < itemCount * 3; i += 3) {
      addProject(
        newData.projects,
        target[i + 0].value,
        target[i + 1].value,
        target[i + 2].value,
        target[i + 0].dataset.index,
      );
    }
    setData(newData.projects);
    setResume(newData);
  }

  function deleteItem(i) {
    let newData = { ...resume };
    newData.projects.splice(i, 1);
    setData(newData.projects);
    setResume(newData);
  }

  return (
    <InfoSection
      heading="Projects"
      formName="projects"
      handleSubmit={handleSubmit}
      open={open}
      change={change}
    >
      {data.map((proj, i) => (
        <Project
          key={proj.id}
          title={proj.name}
          name={proj.name}
          desc={proj.description}
          link={proj.link}
          index={i}
          del={() => {
            deleteItem(i);
            setItemCount(data.length - 1);
          }}
        />
      ))}
      {itemCount - data.length >= 1 && (
        <Project title="New Project" del={() => setItemCount(data.length)} />
      )}
      <div className="button-container">
        <button>Submit</button>
        <button type="button" onClick={() => setItemCount(data.length + 1)}>
          Add New
        </button>
      </div>
    </InfoSection>
  );
}
