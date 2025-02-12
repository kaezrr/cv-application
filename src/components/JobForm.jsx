import { useState } from "react";
import resumeData, { addJob } from "../data";
import InfoSection from "./InfoSection";
import { format } from "date-fns";

function Job({
  title,
  del,
  name = "",
  role = "",
  desc = "",
  start = "",
  end = "",
  index = null,
}) {
  return (
    <section>
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" onClick={del} />
      <input
        placeholder="Company Name"
        defaultValue={name}
        data-index={index}
        required
      />
      <input placeholder="Position Title" defaultValue={role} required />
      <textarea
        defaultValue={desc}
        placeholder="Description"
        rows="3"
        className="job-description"
        required
      />
      <input
        type="date"
        defaultValue={start ? format(start, "yyyy-MM-dd") : ""}
        required
      />
      <input
        type="date"
        defaultValue={end ? format(end, "yyyy-MM-dd") : ""}
        required
      />
    </section>
  );
}

export default function JobForm(props) {
  const [data, setData] = useState(resumeData.jobs);
  const [itemCount, setItemCount] = useState(data.length);

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    let newData = [...data];
    for (let i = 0; i < itemCount * 5; i += 5) {
      addJob(
        newData,
        target[i + 0].value,
        target[i + 1].value,
        target[i + 2].value,
        target[i + 3].value,
        target[i + 4].value,
        target[i + 0].dataset.index,
      );
    }
    setData(newData);
    resumeData.jobs = newData;
  }

  function deleteItem(i) {
    let newData = [...data];
    newData.splice(i, 1);
    setData(newData);
    resumeData.jobs = newData;
  }

  return (
    <InfoSection
      heading="Job History"
      formName="jobs"
      handleSubmit={handleSubmit}
      {...props}
    >
      {data.map((job, i) => (
        <Job
          key={job.id}
          title={job.company}
          name={job.company}
          role={job.role}
          desc={job.description}
          start={job.startDate}
          end={job.endDate}
          index={i}
          del={() => {
            deleteItem(i);
            setItemCount(data.length - 1);
          }}
        />
      ))}
      {itemCount - data.length >= 1 && (
        <Job title="New Job" del={() => setItemCount(data.length)} />
      )}
      <div className="button-container">
        <button>Submit</button>
        <button type="button" onClick={() => setItemCount(data.length + 1)}>
          Add New
        </button>
      </div>
    </InfoSection>
  );
}
