// External
import React from 'react'

function easeInOutQuad(t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

function scrollTo(to, duration = 650) {
  const doc = document.scrollingElement || document.documentElement
  let start = doc.scrollTop
  let change = to - start
  let currentTime = 0
  let increment = 20

  const animateScroll = function() {
    currentTime += increment
    var val = easeInOutQuad(currentTime, start, change, duration)
    doc.scrollTop = val
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

class ScrollTo extends React.Component {
  handleClick = e => {
    e.preventDefault()
    const to = document.querySelector(this.props.target).offsetTop - 80 // Header height
    scrollTo(to, 300)
  }

  render() {
    return this.props.children(this.handleClick)
  }
}

export default ScrollTo
