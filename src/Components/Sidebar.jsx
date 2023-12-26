import React from 'react'
import '../Styles/Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    {
      path: '/',
      name: 'Home Page',
    },

    {
      path: '/tasklist',
      name: 'Task List Page',
    },

    /*{
      path: '/taskview',
      name: 'View Task Page',
    },*/

    {
      path: '/taskadd',
      name: 'Add Task Page',
    },

    {
      path: '/taskedit',
      name: 'Edit Task Page',
    },

    {
      path: '/taskhistory',
      name: 'History Task Page',
    },
  ]

  return (
    <div className="sidebar_container">
      <div className="mid_section">
        <div className="user_profile">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="cardImage"
          />
        </div>
        <div className="user">
          <p>
            Sayumi De Alwis
            <br />
            Admin
          </p>
          <hr />
        </div>
        {menuItems.map((items, index) => (
          <Link to={items.path} key={index} className="link">
            <div className="link_text">{items.name}</div>
          </Link>
        ))}
        <button className="logout">LogOut</button>
      </div>
    </div>
  )
}

export default Sidebar
