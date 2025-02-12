import "../styles/DetailsResume.css";
import InfoSection from "../components/InfoSection";

export default function Details() {
  return (
    <div className="details">
      <InfoSection heading={"Personal Info"} formName={"personal"}>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Phone Number" type="tel" className="phone" />
        <input placeholder="Email Address" type="email" className="email" />
      </InfoSection>
    </div>
  );
}
