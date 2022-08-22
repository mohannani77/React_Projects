import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function ContactDetail(props) {
  const { name, email } = { ...props.contact };

  // let [state]=([...props.get])

  return (
    <div className="main kali">
      <h1>CONTACTEE DETAILS OVERVIEW</h1>
      <div className="ui card centered">
        <div className="content">
          <div className="header">{name}Mohan</div>
          <div className="description">{email}venkatdasi</div>
        </div>
      </div>
      <div className="center div">
        <Link to="/">
          <button className="ui button blue right">back to List</button>
        </Link>
      </div>
    </div>
  );
}
export default ContactDetail;
