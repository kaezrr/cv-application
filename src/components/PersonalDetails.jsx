import { useState } from "react";
import TopHeader from "./TopHeader";

export default function PersonalDetails() {
  const [open, setOpen] = useState(false);
  return (
    <div className="personal">
      <TopHeader val="Personal Info" down={open} drop={() => setOpen(!open)} />
      <form className={open ? "open" : ""}>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Phone Number" type="tel" className="phone" />
        <input placeholder="Email Address" type="email" className="email" />
      </form>
    </div>
  );
}
