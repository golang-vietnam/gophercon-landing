import React, { useState } from 'react'

const AnimatedMenuIcon = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(!isActive)
  }

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
