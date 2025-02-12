export default resumeData = {
  personal: {},
  education: [],
  jobs: [],
  projects: [],
};

export function addName(firstName, lastName, phone, email) {
  resumeData.personal = {
    name: `${firstName} ${lastName}`,
    firstName,
    lastName,
    phone,
    email,
  };
}

export function addSchool(school, degree, startDate, endDate) {
  resumeData.education.push({
    school,
    degree,
    startDate,
    endDate,
    id: crypto.randomUUID(),
  });
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
