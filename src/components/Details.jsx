import { useState } from "react";

import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import JobForm from "./JobForm";
import ProjectForm from "./ProjectForm";

export default function Details(props) {
  const [open, setOpen] = useState("");
  return (
    <div className="details">
      <PersonalForm open={open === "personal"} change={setOpen} {...props} />
      <EducationForm open={open === "education"} change={setOpen} {...props} />
      <JobForm open={open === "jobs"} change={setOpen} {...props} />
      <ProjectForm open={open === "projects"} change={setOpen} {...props} />
    </div>
  );
}
