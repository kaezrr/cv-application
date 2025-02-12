import InfoSection from "./InfoSection";

export default function JobForm({ open, change, data }) {
  return (
    <InfoSection
      heading="Job History"
      formName="jobs"
      open={open === "jobs"}
      change={change}
    >
      <input placeholder="Company Name" />
      <input placeholder="Position Title" />
      <textarea placeholder="Description" rows="3" id="job-description" />
      <input type="date" />
      <input type="date" />
    </InfoSection>
  );
}
