export default function TopHeader({ val, down, drop }) {
  return (
    <div className="top-head">
      <h2>{val}</h2>
      <img
        src="/down.svg"
        alt="down"
        className={down ? "down" : ""}
        onClick={drop}
      />
    </div>
  );
}
