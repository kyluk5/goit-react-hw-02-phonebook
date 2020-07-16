import React from "react";
import PropTypes from "prop-types";

const PhoneForm = ({
  submitForm,
  name,
  contactName,
  number,
  contactNumber,
}) => {
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <span>Name</span>
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          onChange={contactName}
        ></input>
        <br></br>
        <span>Number</span>
        <br></br>
        <input
          type="text"
          name="number"
          value={number}
          onChange={contactNumber}
        ></input>
        <br></br>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default PhoneForm;

PhoneForm.propTypes = {
  submitForm: PropTypes.func,
  name: PropTypes.string,
  contactName: PropTypes.func,
  number: PropTypes.string,
  contactNumber: PropTypes.func,
};
