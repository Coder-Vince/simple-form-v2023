import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");
  const [valid, setValid] = useState(false);

  return (
    <div>
      {valid ? (
        <StepTwo
          username={username}
          email={email}
          password={password}
          valid={valid}
          setValid={setValid}
        />
      ) : (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmpw={confirmpw}
          setConfirmpw={setConfirmpw}
          valid={valid}
          setValid={setValid}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
