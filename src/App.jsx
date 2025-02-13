import "./styles/App.css";
import "./styles/Details.css";
import "./styles/Resume.css";

import Resume from "./components/Resume";
import Details from "./components/Details";
import resumeData from "./data";
import { useState } from "react";

export default function App() {
  const [resume, setResume] = useState(resumeData);
  return (
    <>
      <Details resume={resume} setResume={setResume} />
      <Resume resume={resume} />
    </>
  );
}
