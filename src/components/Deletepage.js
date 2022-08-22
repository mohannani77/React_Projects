import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function deletepage(props) {
  function confirmer() {
    props.setconfirm = true;
  }

  return (
    <div>
      <div>
        <div className="kali">
          <h1 className="">ARE U SURE TO DELETE</h1>
          <Link to="/">
            <button className="ui button red right">YES</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button onClick={confirmer} className="ui button blue right">
              NO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default deletepage;
