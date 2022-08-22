import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ContactCard(props) {
  const navigate = useNavigate();
  const { name, email } = props.contacte;
  function onxdelete() {
    props.ondelete(props.id);
    navigate("/delete");
  }

  // function mover(){
  //   navigate("/contact");
  // }

  return (
    <div className="item">
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${props.id}`,
            state: { contact: props.contacte }
          }}
        >
          {/* <Link to="/contact" > */}
          <div className="header">{name}</div>
          <div className="">{email}</div>
        </Link>
      </div>
      <i
        onClick={onxdelete}
        className="trash alternate outlise icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
}
export default ContactCard;
