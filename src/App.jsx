import "./styles/App.css";

import Resume from "./components/Resume";
import Details from "./components/Details";
import resumeData from "./data";

function App() {
  return (
    <>
      <h1>Your Details</h1>
      <h1>Your Resume</h1>
      <Details data={resumeData} />
      <Resume data={resumeData} />
    </>
  );
}

export default App;
