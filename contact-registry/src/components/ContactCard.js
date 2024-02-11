import React from 'react'

const ContactCard = ({contactData, handleDelete}) => {
  const {id, name, contact} = contactData;
  return (
    <div className="item">
      <div>{name}</div>
      <div>{contact}</div>
      <button className="button red" onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default ContactCard