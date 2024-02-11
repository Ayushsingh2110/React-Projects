import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [ContactListdata, setContactList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ContactListdata))
  }, [ContactListdata])

  function DeleteContact(id) {
    let newContactList = ContactListdata.filter((contact) => contact.id !== id)
    setContactList(newContactList)
  }

  return (
    <>
      <Header />
      <AddContact ContactListData={ContactListdata} setContactList={setContactList} />
      <div className="contact-list">
        <h2>Contact list</h2>
        <>
        {
          (!Array.isArray(ContactListdata)) ?
            <p>No contacts to display</p> :

            ContactListdata.map((contact) => {
              return <ContactCard contactData={contact} handleDelete={DeleteContact} key={contact.id} />
            })
        }
        </>

      </div>
    </>

  );
}

export default App;
