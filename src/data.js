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

export function addSchool(data, school, degree, start, end, index = null) {
  const newData = {
    school,
    degree,
    startDate: start,
    endDate: end,
    id: crypto.randomUUID(),
  };
  index ? (data[index] = newData) : data.push(newData);
}

export function addJob(data, company, role, desc, start, end, index = null) {
  const newData = {
    company,
    role,
    description: desc,
    startDate: start,
    endDate: end,
    id: crypto.randomUUID(),
  };
  index ? (data[index] = newData) : data.push(newData);
}

export function addProject(data, name, desc, link, index = null) {
  const newData = {
    name,
    description: desc,
    link,
    id: crypto.randomUUID(),
  };
  index ? (data[index] = newData) : data.push(newData);
}

addJob(
  resumeData.jobs,
  "LinkedIn",
  "Data Analyst",
  "Some desc",
  new Date(),
  new Date(),
);
addJob(
  resumeData.jobs,
  "Spotify",
  "Music Analyst",
  "Some desc",
  new Date(),
  new Date(),
);
addJob(
  resumeData.jobs,
  "Newegg",
  "Some egging",
  "edging desc",
  new Date(),
  new Date(),
);
