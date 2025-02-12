import InfoSection from "./InfoSection";

function Job({ title }) {
  return (
    <section>
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" />
      <input placeholder="Company Name" />
      <input placeholder="Position Title" />
      <textarea
        placeholder="Description"
        rows="3"
        className="job-description"
      />
      <input type="date" />
      <input type="date" />
    </section>
  );
}

export default function JobForm(props) {
  return (
    <InfoSection heading="Job History" formName="jobs" {...props}>
      <Job title="Job 1" />
      <div className="button-container">
        <button>Submit</button>
        <button>Add New</button>
      </div>
    </InfoSection>
  );
}
