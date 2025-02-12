import { useState } from "react";
import "../styles/DetailsResume.css";

import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import JobForm from "./JobForm";
import ProjectForm from "./ProjectForm";

export default function Details() {
  const [open, setOpen] = useState("");
  return (
    <div className="details">
      <PersonalForm open={open === "personal"} change={setOpen} />
      <EducationForm open={open === "education"} change={setOpen} />
      <JobForm open={open === "jobs"} change={setOpen} />
      <ProjectForm open={open === "projects"} change={setOpen} />
    </div>
  );
}
