import React from "react";

const StepTwo = ({ username, email, password, valid, setValid }) => {
  return (
    <div>
      <h1>Results</h1>
      <div className="results">
        <p>Name:{username}</p>
        <p>Email:{email}</p>
        <p>Password: {password}</p>
      </div>
      <div className="edit">
        <button
          onClick={() => {
            setValid(!valid);
          }}
        >
          Edit your details
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
