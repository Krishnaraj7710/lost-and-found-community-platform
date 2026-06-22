import React from 'react'
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  navigate("/login");
  };

  return (
    <div>
      <nav>
        <div className="logo">
  <span>🔍 Lost </span>
  <span className="logo-blue">&Found</span>
</div>
      

      
        <div className="nav-links">
            
            <Link to="/Home">Browse</Link>
            <Link to="/ReportLost">Report Lost</Link>
            <Link to="/ReportFound">Report Found</Link>

            
            <Link to="/myitems">My Items</Link>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
