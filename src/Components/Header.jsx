import '../Styles/Header.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ currentPage }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (currentPage === 'View Task') {
      navigate('/tasklist')
    } else {
      navigate('/')
    }
  }
  return (
    <header>
      <div className="header_container">
        {currentPage !== 'Home' && (
          <button type="button" className="back_button" onClick={handleGoBack}>
            <div className="backimage">
              <img
                src="https://www.svgrepo.com/show/101168/go-back-arrow.svg"
                alt="icon"
              />
            </div>
          </button>
        )}
        <p className="page_name">{currentPage}</p>
      </div>
    </header>
  )
}

export default Header

