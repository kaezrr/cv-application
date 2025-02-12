import InfoSection from "./InfoSection";

export default function ProjectForm({ open, change, data }) {
  return (
    <InfoSection
      heading="Projects"
      formName="projects"
      open={open === "projects"}
      change={change}
    >
      <input placeholder="Project Title" id="project-title" />
      <textarea placeholder="Description" rows="3" id="project-description" />
      <input placeholder="Project Link" id="project-link" />
    </InfoSection>
  );
}
