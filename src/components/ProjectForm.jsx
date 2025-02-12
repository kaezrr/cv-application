import InfoSection from "./InfoSection";

function Project({ title }) {
  return (
    <section>
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" />
      <input placeholder="Project Title" className="project-title" />
      <input placeholder="Project Link" className="project-link" />
      <textarea
        placeholder="Description"
        rows="3"
        className="project-description"
      />
    </section>
  );
}

export default function ProjectForm(props) {
  return (
    <InfoSection heading="Projects" formName="projects" {...props}>
      <Project title="Project 1" />
      <div className="button-container">
        <button>Submit</button>
        <button>Add New</button>
      </div>
    </InfoSection>
  );
}
