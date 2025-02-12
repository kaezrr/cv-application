import InfoSection from "./InfoSection";
import data from "../data.js";

export default function PersonalForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    data.personal.firstName = e.target[0].value;
    data.personal.lastName = e.target[1].value;
    data.personal.phone = e.target[2].value;
    data.personal.email = e.target[3].value;
  };

  return (
    <InfoSection
      heading="Personal Info"
      formName="personal"
      handleSubmit={handleSubmit}
      {...props}
    >
      <input placeholder="First Name" defaultValue={data.personal.firstName} />
      <input placeholder="Last Name" defaultValue={data.personal.lastName} />
      <input
        placeholder="Phone Number"
        type="tel"
        id="phone"
        defaultValue={data.personal.phone}
      />
      <input
        placeholder="Email Address"
        type="email"
        id="email"
        defaultValue={data.personal.email}
      />
      <button>Submit</button>
    </InfoSection>
  );
}
