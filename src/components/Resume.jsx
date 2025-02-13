import { format } from "date-fns";

function IconTitle({ imgSrc, title }) {
  return (
    <div className="icon-title">
      <img src={imgSrc} />
      <p>{title}</p>
    </div>
  );
}

function PersonalInfo({ data }) {
  return (
    <div className="personal-info">
      <h2>{data.name}</h2>
      <IconTitle imgSrc="/phone.svg" title={data.phone} />
      <IconTitle imgSrc="/email.svg" title={data.email} />
      <IconTitle imgSrc="/location.svg" title={data.address} />
    </div>
  );
}

function EducationInfo({ data }) {
  return (
    <div className="education-info">
      <h3>EDUCATION:</h3>
      {data.map((e) => {
        return (
          <div key={e.id} className="school-display">
            <h3>
              <em>{e.school.toUpperCase()}</em>
            </h3>
            <p>
              {`${format(e.startDate, "MMM yyyy")} - ${format(e.endDate, "MMM yyyy")}`}
            </p>
            <p>{e.degree}</p>
          </div>
        );
      })}
    </div>
  );
}

function JobsInfo({ data }) {
  return (
    <div className="job-info">
      <h3>WORK EXPERIENCE:</h3>
      {data.map((e) => {
        return (
          <div key={e.id} className="job-display">
            <h3>
              <em>{e.company.toUpperCase()}</em>
            </h3>
            <p>
              {`${format(e.startDate, "MMM yyyy")} - ${format(e.endDate, "MMM yyyy")}`}
            </p>
            <p>{e.role}</p>
            <br />
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function ProjectInfo({ data }) {
  return (
    <div className="project-info">
      <h3>PROJECTS:</h3>
      {data.map((e) => {
        return (
          <div key={e.id} className="project-display">
            <h3>
              <em>{e.name.toUpperCase()}</em>
              <a href={e.link} target="_blank">
                <img src="/open-new.svg" alt="link" />
              </a>
            </h3>
            <br />
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Resume({ resume }) {
  return (
    <div className="resume">
      <PersonalInfo data={resume.personal} />
      <hr />
      <EducationInfo data={resume.education} />
      <JobsInfo data={resume.jobs} />
      <ProjectInfo data={resume.projects} />
    </div>
  );
}
