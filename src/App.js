import React,{useState} from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


function App() {

  const [contacts, setContacts] = useState([]);

  // const contacts = [
  //   {
  //     id:1,
  //     name:"Dipesh",
  //     email:"imdipesh66@gmail.com",
  //   },
  //   {
  //     id:2,
  //     name:"Lipesh",
  //     email:"imlipesh67@gmail.com",
  //   },
  //   {
  //     id:3,
  //     name:"Kipesh",
  //     email:"imkipesh68@gmail.com",
  //   },

  // ]


  const addContactHandler = (contact)=>{
    
    setContacts(
      [...contacts, contact]
    )

  }
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
