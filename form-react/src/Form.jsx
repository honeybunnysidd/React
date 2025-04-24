import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  let handleFormData = (event) => {
    setFormData((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("form Submitted");
    setFormData({ fullname: "", username: "", password: "" });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Form in React</h2>
      <label htmlFor="fullname">Full Name: </label>
      <input
        type="text"
        id="fullname"
        placeholder="Enter your name"
        name="fullname"
        value={formData.fullname}
        onChange={handleFormData}
      />
      &nbsp; &nbsp; &nbsp;
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        placeholder="@username"
        name="username"
        value={formData.username}
        onChange={handleFormData}
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleFormData}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
