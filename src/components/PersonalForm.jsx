import InfoSection from "./InfoSection";
import resumeData from "../data.js";

export default function PersonalForm(props) {
  const data = resumeData.personal;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
