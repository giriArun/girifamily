import React from "react";
//import "./Sidebar.css"; // We'll create this

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>Sidebar Menu</h2>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;