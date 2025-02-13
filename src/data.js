const resumeData = {
  personal: {},
  education: [],
  jobs: [],
  projects: [],
};

export default resumeData;

export function updatePersonal(data, first, last, phone, email, address) {
  data.personal = {
    name: `${first} ${last}`,
    firstName: first,
    lastName: last,
    phone,
    email,
    address,
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

export function addProject(data, name, link, desc, index = null) {
  const newData = {
    name,
    description: desc,
    link,
    id: crypto.randomUUID(),
  };
  index ? (data[index] = newData) : data.push(newData);
}

updatePersonal(
  resumeData,
  "John",
  "Doe",
  "123-456-7890",
  "john.doe@example.com",
  "London, UK",
);

// Education entries using Date objects
addSchool(
  resumeData.education,
  "Springfield High School",
  "High School Diploma",
  new Date("2005-09-01"),
  new Date("2009-06-30"),
);

addSchool(
  resumeData.education,
  "State University",
  "Bachelor of Science in Computer Science",
  new Date("2009-09-01"),
  new Date("2013-06-30"),
);

// Job entries using Date objects
addJob(
  resumeData.jobs,
  "Company A",
  "Junior Developer",
  "Developed and maintained web applications.",
  new Date("2013-07-01"),
  new Date("2016-12-31"),
);

addJob(
  resumeData.jobs,
  "Company B",
  "Senior Developer",
  "Led a team to implement scalable solutions.",
  new Date("2017-01-01"),
  new Date("2021-08-31"),
);

// Project entries (dates not required here)
addProject(
  resumeData.projects,
  "Project One",
  "https://github.com/johndoe/project-one",
  "An innovative solution to automate tasks.",
);

addProject(
  resumeData.projects,
  "Project Two",
  "https://github.com/johndoe/project-two",
  "A revolutionary approach to web development.",
);
