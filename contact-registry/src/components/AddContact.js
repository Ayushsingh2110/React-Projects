import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
const AddContact = ({ ContactListData, setContactList }) => {
  const [Name, setName] = useState("");
  const [ContactNumber, setNumber] = useState("");

  function submitForm(event) {
    event.preventDefault();
    if (Name.length === 0 || ContactNumber.length < 10) {
      alert("Enter valid information");
    } else {
      setContactList([...ContactListData, { id: uuid(), name: Name, contact: ContactNumber }])
      console.log(ContactListData);
    }
  }

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Enter name" value={Name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="number" placeholder="Enter phone number" value={ContactNumber}
            onChange={(e) => setNumber(e.target.value)} />
        </div>

        <input type="submit" className="ui button blue" onClick={(e) => {
          submitForm(e);
          setName("");
          setNumber("");
        }} />
      </form>
    </div>
  )
}

export default AddContact