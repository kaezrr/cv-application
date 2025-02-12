import InfoSection from "./InfoSection";

export default function PersonalForm({ open, change, data }) {
  return (
    <InfoSection
      heading="Personal Info"
      formName="personal"
      open={open === "personal"}
      change={change}
    >
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <input placeholder="Phone Number" type="tel" id="phone" />
      <input placeholder="Email Address" type="email" id="email" />
    </InfoSection>
  );
}
