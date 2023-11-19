import React from "react";

const Forms = () => {
  const [formData, setForm] = React.useState({
    fullName: "",
    userName: "",
    userEmail: "",
    userAddress: "",
    userPhone: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Full Name:</label>
        <input
          className="fieldInput"
          id="fullNameInput"
          type="text"
          placeholder="John Doe"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="">Enter Your UserName:</label>
        <input
          className="fieldInput"
          id="userNameInput"
          type="text"
          placeholder="JohnDoe123"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <label htmlFor="">Enter Your Email:</label>
        <input
          className="fieldInput"
          id="emailInput"
          type="text"
          placeholder="JohnDoe@gmail.com"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
        />
        <label htmlFor="">Enter Your Address:</label>
        <input
          className="fieldInput"
          id="addressInput"
          type="text"
          placeholder="1234 John ln"
          name="userAddress"
          value={formData.userAddress}
          onChange={handleChange}
        />
        <label htmlFor="">Enter Your Phone Number:</label>
        <input
          className="fieldInput"
          id="phoneInput"
          type="text"
          placeholder="123-456-7890"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Forms;
