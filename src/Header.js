import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Neumorph</h1>
      </div>
      <div className="nav">
        <Link to="/neuui">Home</Link>
        <Link to="/neuui/examples">Examples</Link>

      </div>
    </div>
  );
}

export default Header;
