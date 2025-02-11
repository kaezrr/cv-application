import { useState } from "react";
import "./styles/App.css";

import Resume from "./components/Resume";
import DetailsForm from "./components/DetailsForm";

function App() {
  return (
    <>
      <DetailsForm />
      <Resume />
    </>
  );
}

export default App;
