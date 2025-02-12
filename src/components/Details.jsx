import { useState } from "react";
import "../styles/DetailsResume.css";

import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import JobForm from "./JobForm";
import ProjectForm from "./ProjectForm";

export default function Details({ data }) {
  const [open, setOpen] = useState("");
  return (
    <div className="details">
      <PersonalForm open={open} change={setOpen} data={data} />
      <EducationForm open={open} change={setOpen} data={data} />
      <JobForm open={open} change={setOpen} data={data} />
      <ProjectForm open={open} change={setOpen} data={data} />
    </div>
  );
}
