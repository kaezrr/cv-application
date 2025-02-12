import { useState } from "react";

export default function EducationDetails({ heading, formName, children }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="info-form">
      <div className="top-head">
        <h2>{heading}</h2>
        <img
          src="/down.svg"
          alt="down"
          className={open ? "open" : ""}
          onClick={() => setOpen(!open)}
        />
      </div>
      <form className={formName + (open ? " open" : "")}>{children}</form>
    </section>
  );
}
