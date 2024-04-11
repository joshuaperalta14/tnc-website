import React, { useState } from 'react';
import './Sidebar.css';
import Card from './Card';
import sidelogo from "../assets/TNC_2020_Logo_Landscape_Group_white.png";

function Sidebar() {
  const [inventoryDropdown, setInventoryDropdown] = useState(false);

  const toggleInventoryDropdown = () => {
    setInventoryDropdown(!inventoryDropdown);
  };

  return (
    <div className='sidebar-bg'>
      <div className='sidebar-app'>
        <div className="sidebar">
          <img src={sidelogo} alt="Logo" className="sidebar-logo" />
          <ul>
            <li><i className="fas fa-chart-line"></i> &nbsp;&nbsp;Dashboard</li>
            <li onClick={toggleInventoryDropdown}>
              <i className={`fas fa-box ${inventoryDropdown ? 'rotate-icon' : ''}`}></i> &nbsp;&nbsp;Inventory
              {inventoryDropdown && (
                <ul className="dropdown-menu">
                  <li>Item Lists</li>
                  <li>Stocks</li>
                  {/* Add more submenu items as needed */}
                </ul>
              )}
            </li>
            <li><i className="fas fa-truck"></i> &nbsp;&nbsp;Suppliers</li>
            <li><i className="fas fa-money-bill-wave"></i> &nbsp;&nbsp;Expenses</li>
            <li><i className="fas fa-project-diagram"></i> &nbsp;&nbsp;Projects</li>
            <li><i className="fas fa-file-alt"></i> &nbsp;&nbsp;Report</li>
            <li><i className="fas fa-inbox"></i> &nbsp;&nbsp;Inbox</li>
            <li><i className="fas fa-file"></i> &nbsp;&nbsp;Documents</li>
            <li><i className="fas fa-headset"></i> &nbsp;&nbsp;Contact Support</li>
            <li><i className="fas fa-cog"></i> &nbsp;&nbsp;Settings</li>
          </ul>
        </div>
        <div className="side-content">
          <h1>Dashboard</h1>
          {/* Your dashboard content goes here */}
          <div className="card-container">
            {/* Example of a card */}
            <Card
              title="Items"
              description="This is an example card."
              imageUrl="https://via.placeholder.com/150"
              icon="fa-box"
            />
            <Card
              title="Stocks"
              description="This is an example card."
              imageUrl="https://via.placeholder.com/150"
              icon="fa-chart-bar"
            />
            <Card
              title="Suppliers"
              description="This is an example card."
              imageUrl="https://via.placeholder.com/150"
              icon="fa-truck"
            />
            <Card
              title="Example Card"
              description="This is an example card."
              imageUrl="https://via.placeholder.com/150"
              icon="fa-star"
            />
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
