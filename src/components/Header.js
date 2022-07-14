import React from "react";

function MyHeader() {
  return (
    <header>
      <div className="logo">
        <span onClick={() => window.location.reload(false)}>Recipe Book</span>
      </div>
      <ul className="navbar">
        <li>
          <a href="http://localhost:3000/">Home</a>
        </li>
        <li>
          <a href="contactUs">Contact Us</a>
        </li>
      </ul>
    </header>
  );
}

export default MyHeader;
