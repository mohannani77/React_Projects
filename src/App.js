import "./styles.css";
import React, { useState, useEffect } from "react";
import { uuid } from "uuid";
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import Deletepage from "./components/Deletepage";
import api from "./api/contact";
export default function App() {
  const [contact, setContact] = useState([]);
  const [confirm, setConfirm] = useState(true);
  const LOCAL_KEY = "contact";

  function additem(state) {
    setContact((prevValue) => {
      return [...prevValue, state];
    });
  }

  const retrivecontactList = async () => {
    const response = await api.get("/contact");
    return response.data;
  };
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_KEY));
    // if (retriveContacts) setContact(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrivecontactList();
      if (allContacts) setContact(allContacts);
    };

    getAllContacts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_KEY, JSON.stringify(contact));
  // }, [contact]);

  function setConfirmer() {
    setConfirm(!confirm);
  }

  function removecontactList(id) {
    if (confirm) {
      setContact((prevValue) => {
        return prevValue.filter((x, index) => {
          return index !== id;
        });
      });
    }
  }

  // function removecontactList(id) {
  //      const newC=contact.filter((x)=> {
  //       return x.id!==id;
  //     })
  //     setContact(newC);
  //}

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact add={additem} />} />

          <Route
            exact
            path="/"
            element={
              <ContactList contacts={contact} getId={removecontactList} />
            }
          />

          <Route
            path="/contact/:id"
            element={<ContactDetail get={contact} />}
          />
          <Route
            path="/delete"
            element={<Deletepage setConfirm={setConfirmer} />}
          />
        </Routes>

        {/* <AddContact add={additem} /> */}
        {/* <ContactList contacts={contact} getId={removecontactList} /> */}
      </Router>
    </div>
  );
}
