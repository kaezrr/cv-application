import { useState } from "react";
import "../styles/DetailsResume.css";
import InfoSection from "../components/InfoSection";

export default function Details() {
  const [open, setOpen] = useState("");
  return (
    <div className="details">
      <InfoSection
        heading="Personal Info"
        formName="personal"
        open={open === "personal"}
        change={setOpen}
      >
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Phone Number" type="tel" id="phone" />
        <input placeholder="Email Address" type="email" id="email" />
      </InfoSection>
      <InfoSection
        heading="Education Info"
        formName="education"
        open={open === "education"}
        change={setOpen}
      >
        <input placeholder="School Name" id="school" />
        <input placeholder="Degree Description" id="degree" />
        <input type="date" name="start-date" id="start-date" />
        <input type="date" name="end-date" id="end-date" />
      </InfoSection>
      <InfoSection
        heading="Job History"
        formName="jobs"
        open={open === "jobs"}
        change={setOpen}
      >
        <input placeholder="Company Name" />
        <input placeholder="Position Title" />
        <textarea placeholder="Description" rows="4" id="job-description" />
        <input type="date" />
        <input type="date" />
      </InfoSection>
      <InfoSection
        heading="Projects"
        formName="projects"
        open={open === "projects"}
        change={setOpen}
      >
        <input placeholder="Project Title" id="project-title" />
        <textarea placeholder="Description" rows="4" id="project-description" />
        <input placeholder="Project link (optional)" id="project-link" />
      </InfoSection>
      <button>Submit</button>
    </div>
  );
}
