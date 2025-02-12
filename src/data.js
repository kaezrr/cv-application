const resumeData = {
  personal: {},
  education: [],
  jobs: [],
  projects: [],
};

export default resumeData;

export function updatePersonal(firstName, lastName, phone, email) {
  resumeData.personal = {
    name: `${firstName} ${lastName}`,
    firstName,
    lastName,
    phone,
    email,
  };
}

export function addSchool(
  data,
  school,
  degree,
  startDate,
  endDate,
  index = null,
) {
  const newData = {
    school,
    degree,
    startDate,
    endDate,
    id: crypto.randomUUID(),
  };
  index ? (data[index] = newData) : data.push(newData);
}

export function addJob(company, role, description, startDate, endDate) {
  resumeData.jobs.push({
    company,
    role,
    description,
    startDate,
    endDate,
    id: crypto.randomUUID(),
  });
}

export function addProject(name, description, link) {
  resumeData.projects.push({
    name,
    description,
    link,
    id: crypto.randomUUID(),
  });
}
