import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  contactName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  contactNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  filterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    if (contacts.find((item) => item.name === this.state.name)) {
      alert("This name alredy exist");
      return;
    }
    const object = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    this.setState((prev) => ({
      contacts: [...prev.contacts, object],
    }));
  };

  render() {
    const filtered = this.getFilteredContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.submitForm}>
          <span>Name</span>
          <br></br>
          <input type="text" name="name" onChange={this.contactName}></input>
          <br></br>
          <span>Number</span>
          <br></br>
          <input
            type="text"
            name="number"
            onChange={this.contactNumber}
          ></input>
          <br></br>
          <button type="submit">Add contact</button>
        </form>
        <h3>Contacts</h3>
        <span>Find contacts by name</span>
        <br></br>
        <input type="text" onChange={this.filterValue}></input>
        <ul>
          {filtered.map((item) => (
            <li key={item.id}>
              {item.name} : {item.number}
              <button type="button" id={item.id} onClick={this.deleteContact}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
