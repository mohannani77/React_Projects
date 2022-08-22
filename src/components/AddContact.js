import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const navigate = useNavigate();

  function addInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setState((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submit(event) {
    event.preventDefault();
    props.add(state);
    setState({
      name: "",
      email: ""
    });
    navigate("/");
  }

  return (
    <div className="ui main">
      <h2>ADD CONTACT</h2>
      <form className="ui form">
        <div className="field">
          <label>NAME</label>
          <input
            onChange={addInput}
            type="text"
            name="name"
            value={state.name}
            placeholder="enter name"
          ></input>
        </div>

        <div className="field">
          <label>Mail</label>
          <input
            onChange={addInput}
            type="text"
            name="email"
            value={state.email}
            placeholder="enter email"
          ></input>
        </div>

        <button onClick={submit} className="ui button blue">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddContact;
