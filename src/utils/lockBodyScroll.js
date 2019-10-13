function lockBodyScroll({ lock }) {
  lock === true
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')
}

export default lockBodyScroll
