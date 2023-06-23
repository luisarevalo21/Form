import "./App.css";

import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    info: "",
    selected: "",
    checked: false,
  });

  console.log(formData.gender);

  const handleChange = event => {
    console.log(event.target.value);

    const { name, value, type, checked } = event.target;

    // const val = event.target.id;
    // console.log("val is", val);

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // setFirstName(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { firstName, lastName, email, gender, info, selected } = formData;
    console.log(firstName, lastName);

    if (firstName === "" || lastName === "" || email === "" || gender === "" || info === "" || selected === "") {
      alert("error try again");
    } else {
      alert("Success!");
      setFormData({ firstName: "", lastName: "", email: "", gender: "", info: "", selected: "", checked: false });
    }
    // console.log("submit triggered");
  };

  // const { firstName, lastName } = formData;

  // console.log("first name", firstName);
  return (
    <div className="container">
      <h1>Description</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First Name / Nombre de Pila"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name / Apellido"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />

        <label htmlFor="email">Email </label>
        <input
          placeholder="Email / Correo Electrónico"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />

        <textarea
          name="info"
          id=""
          cols="20"
          rows="10"
          value={formData.info}
          placeholder="Write a bio about yourself / Escribe una biografía sobre ti"
          onChange={handleChange}
        ></textarea>
        {/* <label htmlFor="friendly">Friendly</label> */}
        {/* <input type="checkbox" id="friendly" checked={formData.checked} name="checked" onChange={handleChange} /> */}

        <fieldset>
          <legend>Gender / Género</legend>
          <input
            type="radio"
            name="gender"
            value="Male "
            id="male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
          />
          <label htmlFor="male">Male / Masculino</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
          />
          <label htmlFor="female">Female / Femenina</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Other"
            id="other"
            onChange={handleChange}
            checked={formData.gender === "Other"}
          />
          <label htmlFor="other">Other / Otro</label> <br />
        </fieldset>

        <select onChange={handleChange} name="selected" value={setFormData.selected}>
          <option value="">--Choose--</option>
          <option value="red">Red/Rojo</option>
          <option value="blue">Blue/Azul</option>
          <option value="green">Green/Verde</option>

          {/* <option value="yellow">Yellow/</option> */}
        </select>

        <button type="submit" className="button">
          Submit
        </button>
        {/* <label htmlFor ="first">First Name</label>
        <input placeholder="first name" id="first" /> */}
      </form>
    </div>
  );
}

export default App;
