import InfoSection from "./InfoSection";

export default function EducationForm({ open, change, data }) {
  return (
    <InfoSection
      heading="Education Info"
      formName="education"
      open={open === "education"}
      change={change}
    >
      <input placeholder="School Name" id="school" />
      <input placeholder="Degree" id="degree" />
      <input type="date" name="start-date" id="start-date" />
      <input type="date" name="end-date" id="end-date" />
    </InfoSection>
  );
}
