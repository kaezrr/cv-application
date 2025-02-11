export default function InputBar({ name, type = "name" }) {
  return <input className="input-bar" placeholder={name} type={type} />;
}
