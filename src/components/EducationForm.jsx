import InfoSection from "./InfoSection";
import resumeData from "../data";

function School({ title }) {
  return (
    <section className="school-container">
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" />
      <input placeholder="School Name" className="school-name" />
      <input placeholder="Degree" className="degree" />
      <input type="date" name="start-date" className="start-date" />
      <input type="date" name="end-date" className="end-date" />
    </section>
  );
}

export default function EducationForm(props) {
  const data = resumeData.education;
  return (
    <InfoSection heading="Education Info" formName="education" {...props}>
      <div className="button-container">
        <button>Submit</button>
        <button>Add New</button>
      </div>
    </InfoSection>
  );
}
