import React from "react";
import {securedStates} from "../states";

const buttonStyles = {
  backgroundColor: "#61DAFB",
  padding: "10px",
  borderRadius: "5px",
  border: 0,
  cursor: "pointer",
  marginTop: "10px"
}

const NotSecured = ({ setSecuredState }) => (
  <div>
    <div>Your app is not secured 😱</div>
    <button style={buttonStyles} onClick={() => setSecuredState(securedStates.SECURING)}>
      .secure() 🔒
    </button>
  </div>
);


export default NotSecured;
