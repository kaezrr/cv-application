import InfoSection from "./InfoSection";
import { addSchool } from "../data";
import { format } from "date-fns";
import { useState } from "react";

function School({
  title,
  del,
  name = "",
  degree = "",
  start = "",
  end = "",
  index = null,
}) {
  return (
    <section className="school-container">
      <h3>{title}</h3>
      <img src="/delete.svg" alt="delete" onClick={del} />
      <input
        placeholder="School Name"
        className="school-name"
        defaultValue={name}
        data-index={index}
        required
      />
      <input
        placeholder="Degree"
        className="degree"
        defaultValue={degree}
        required
      />
      <input
        type="date"
        className="start-date"
        defaultValue={start ? format(start, "yyyy-MM-dd") : ""}
        required
      />
      <input
        type="date"
        className="end-date"
        defaultValue={end ? format(end, "yyyy-MM-dd") : ""}
        required
      />
    </section>
  );
}

export default function EducationForm({ open, change, resume, setResume }) {
  const [data, setData] = useState(resume.education);
  const [itemCount, setItemCount] = useState(data.length);

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    let newData = { ...resume };
    for (let i = 0; i < itemCount * 4; i += 4) {
      addSchool(
        newData.education,
        target[i + 0].value,
        target[i + 1].value,
        target[i + 2].value,
        target[i + 3].value,
        target[i + 0].dataset.index,
      );
    }
    setData(newData.education);
    setResume(newData);
  }

  function deleteItem(i) {
    let newData = { ...resume };
    newData.education.splice(i, 1);
    setData(newData.education);
    setResume(newData);
  }

  return (
    <InfoSection
      heading="Education Info"
      formName="education"
      handleSubmit={handleSubmit}
      open={open}
      change={change}
    >
      {data.map((edu, i) => (
        <School
          key={edu.id}
          title={edu.school}
          name={edu.school}
          degree={edu.degree}
          start={edu.startDate}
          end={edu.endDate}
          index={i}
          del={() => {
            deleteItem(i);
            setItemCount(data.length - 1);
          }}
        />
      ))}
      {itemCount - data.length >= 1 && (
        <School title="New School" del={() => setItemCount(data.length)} />
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
