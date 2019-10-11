import React from 'react'

const AnimatedMenuIcon = ({ isActive = false, toggleActive }) => {
  return (
    <div>
      <div
        onClick={toggleActive}
        className={['hamburger', isActive && 'is-active']}
        id="hamburger-1"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}

export default AnimatedMenuIcon
