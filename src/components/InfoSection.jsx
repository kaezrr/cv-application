export default function InfoSection({
  heading,
  formName,
  children,
  open,
  change,
  handleSubmit,
}) {
  return (
    <section className="info-form">
      <div className="top-head">
        <h2>{heading}</h2>
        <img
          src="/down.svg"
          alt="down"
          className={open ? "open" : ""}
          onClick={() => change(open ? "" : formName)}
        />
      </div>
      <form
        className={formName + (open ? " open" : "")}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </section>
  );
}
