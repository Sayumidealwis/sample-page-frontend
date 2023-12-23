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
      name: 'List Task Page',
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
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>
          UserName
          <br />
          Admin
        </p>
        <hr />
      </div>
      <div>
        {menuItems.map((items, index) => (
          <Link to={items.path} key={index}>
            <div>{items.name}</div>
          </Link>
        ))}
        <button>LogOut</button>
      </div>
    </div>
  )
}

export default Sidebar
