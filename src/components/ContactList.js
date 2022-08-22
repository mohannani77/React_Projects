import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
function ContactList(props) {
  function deleteContactHandler(id) {
    props.getId(id);
  }

  //   const contacts=[{
  //     id:"1",
  //     name:"mohan",
  //     email:"mohan@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name:"venkat",
  //     email:"venkat@gmail.com"
  //   },
  // ]
  const renderList = props.contacts.map((x, index) => {
    return (
      <ContactCard
        contacte={x}
        key={index}
        id={index}
        ondelete={deleteContactHandler}
      ></ContactCard>
    );
  });

  return (
    <div className="kali">
      <h1>Contact List</h1>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list ">{renderList}</div>;
    </div>
  );
}
export default ContactList;
