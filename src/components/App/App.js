import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form>
          <span>Name</span>
          <br></br>
          <input
            type="text"
            name="contact-name"
            onChange={this.addContact}
          ></input>
          <br></br>
          <button type="button">Add contact</button>
        </form>
        <h3>Contacts</h3>
      </>
    );
  }
}

export default App;
