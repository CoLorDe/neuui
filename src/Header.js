import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Neumorph</h1>
      <div className="nav">
        <Link to="/neuui">Home</Link>
      </div>
    </div>
  );
}

export default Header;
