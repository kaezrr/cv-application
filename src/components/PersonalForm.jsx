import InfoSection from "./InfoSection";
import { updatePersonal } from "../data.js";

export default function PersonalForm({ open, change, resume, setResume }) {
  const data = resume.personal;
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let newData = { ...resume };
    updatePersonal(
      newData,
      target[0].value,
      target[1].value,
      target[2].value,
      target[3].value,
    );
    setResume(newData);
  };

  return (
    <InfoSection
      heading="Personal Info"
      formName="personal"
      handleSubmit={handleSubmit}
      open={open}
      change={change}
    >
      <input placeholder="First Name" defaultValue={data.firstName} />
      <input placeholder="Last Name" defaultValue={data.lastName} />
      <input
        placeholder="Phone Number"
        type="tel"
        id="phone"
        defaultValue={data.phone}
      />
      <input
        placeholder="Email Address"
        type="email"
        id="email"
        defaultValue={data.email}
      />
      <button>Submit</button>
    </InfoSection>
  );
}
