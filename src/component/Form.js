import React, { useState } from "react";
// import "../style.css"
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");
  console.log(user);
  //   function for add new user
  function addUser(e) {
    e.preventDefault();
    if (
      user.name == "" &&
      user.age == "" &&
      user.email == "" &&
      user.password == "" &&
      user.confirmPassword == ""
    ) {
      console.log("not submited");
      setError("All Field is mandatory");
      setSucces("");
    } else if (user.password === user.confirmPassword) {
      if (JSON.parse(localStorage.getItem("users"))) {
        const users = [];
        localStorage.setItem("users", JSON.stringify(user));
        setSucces("User Added Succesfully");
        setError("");
      } else {
        localStorage.setItem("users", JSON.stringify(user));
        setSucces("User Added Succesfully");
        setError("");
      }
    } else {
      setError("Password not matching");
      setSucces("");
    }
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h3 id="heading">React Form</h3>
      <h4 id="error">{error}</h4>
      <h4 id="succes">{succes}</h4>
      <form>
        <lable for="name">Name:</lable>
        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={user.name}
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <lable for="email">Email:</lable>
        <input
          name="email"
          type="email"
          placeholder="Priyam@gmail.com"
          value={user.email}
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <lable for="age">Age:</lable>
        <input
          name="age"
          type="number"
          placeholder="Enter Your age"
          value={user.age}
          min="18"
          max="28"
          required
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <lable for="password">Password</lable>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={user.password}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <lable for="conifirmPassword">Confirm Password:</lable>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          required
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        <button type="submit" onClick={addUser}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
