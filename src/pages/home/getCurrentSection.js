function getCurrentSection(top) {
  const elem1 = document.getElementById('home').offsetTop
  const elem2 = document.getElementById('schedule').offsetTop
  const elem3 = document.getElementById('join').offsetTop
  const elem4 = document.getElementById('speakers').offsetTop
  const elem5 = document.getElementById('sponsors').offsetTop
  if (top < elem2) {
    return 'home'
  }
  if ((elem2 < top || top === elem2) && top < elem3) {
    return 'schedule'
  }
  if ((elem3 < top || top === elem3) && top < elem4) {
    return 'join'
  }
  if ((elem4 < top || top === elem4) && top < elem5) {
    return 'speakers'
  }
  if (top === elem5 || top > elem5) {
    return 'sponsors'
  }
}
export default getCurrentSection
