import React from "react";

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmpw,
  setConfirmpw,
  valid,
  setValid,
}) => {
  return (
    <div className="container">
      <h1>Create Account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirmpw) {
            alert("Les deux mots de passe ne sont pas identiques");
          } else {
            setValid(!valid);
            console.log(valid);
          }
        }}
      >
        Name
        <input
          type="text"
          value={username}
          placeholder="Géraldine"
          // onChange is a React property that will be used to update the state of 'username'
          onChange={(event) => {
            // console.log("hello");
            setUsername(event.target.value);
            // console.log(username);
          }}
        />
        Email
        <input
          type="email"
          value={email}
          placeholder="Jon@mail.com"
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(email);
          }}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(password);
          }}
        />
        Confirm your Password
        <input
          type="password"
          value={confirmpw}
          onChange={(event) => {
            setConfirmpw(event.target.value);
          }}
        />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Form;

//
