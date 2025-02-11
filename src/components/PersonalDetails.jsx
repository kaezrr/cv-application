import InputBar from "./InputBar";

export default function PersonalDetails() {
  return (
    <div className="personal">
      <InputBar name="First Name" />
      <InputBar name="Last Name" />
      <InputBar name="Phone Number" type="tel" />
      <InputBar name="Email Address" type="email" />
    </div>
  );
}
