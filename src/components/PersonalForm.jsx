import InfoSection from "./InfoSection";
import resumeData, { updatePersonal } from "../data.js";

export default function PersonalForm(props) {
  const data = resumeData.personal;
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    updatePersonal(
      target[0].value,
      target[1].value,
      target[2].value,
      target[3].value,
    );
  };

  return (
    <InfoSection
      heading="Personal Info"
      formName="personal"
      handleSubmit={handleSubmit}
      {...props}
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
