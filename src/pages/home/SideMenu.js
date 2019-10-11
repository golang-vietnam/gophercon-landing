import React, { useEffect, useRef, useState } from 'react'
import { withRouter } from 'react-static'
import OpenClose from './OpenClose'

const ToggleMenu = ({
  className = '',
  items,
  LeafComponent = () => null,
  location,
}) => {
  const [linksStatus, setLinksStatus] = useState({})
  const observersRef = useRef([])

  useEffect(() => {
    // get all hash tags
    items
      .map(item => item[1])
      .reduce((prev, curr) => prev.concat(curr), [])
      .map(link => link.href)
      .forEach(href => {
        // check for IntersectionObserver
        if (!('IntersectionObserver' in window)) {
          return
        }

        // watch all hash tags coordinated elements, if one element intersects (active)
        // disable the rest
        const hash = href.split('#')[1]
        const el = document.getElementById(hash)
        if (!el) {
          return
        }
        // start observer
        const observer = new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setLinksStatus({ [hash]: true })
            }
          },
          {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.3,
          }
        )
        observer.observe(el)
        observersRef.current.push(observer)
      })

    return () => observersRef.current.forEach(ob => ob.disconnect())
  }, [])

  const onLinkClick = e => {
    e.preventDefault()
    const url = new URL(e.target.href)
    const hash = url.hash || ''
    const el = document.getElementById(hash.replace(/^#/, ''))
    if (hash && el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  const isCurrentRoute = (subitem = {}) => {
    if (!subitem) return false
    const subitemPathname = subitem.href.split('#')[0]
    return subitemPathname === location.pathname.replace(/\/$/, '')
  }

  return (
    <ul className={'list-reset ' + className}>
      {items.map(([item = {}, subitems = []], i) => {
        return (
          <li key={i} className="mb-8">
            <OpenClose defaultOpen={isCurrentRoute(subitems[0])}>
              {({ isOpen, doToggle }) => (
                <>
                  <item.Component
                    className="no-underline focus:outline-none inline-flex items-center text-xl font-semibold leading-tight"
                    Icon={isOpen ? FaCaretUp : FaCaretDown}
                    toggle={doToggle}
                  />
                  {isOpen && !!subitems && subitems.length > 0 && (
                    <ul className="list-reset pl-4 my-6">
                      {subitems.map((subitem, ii) => {
                        const isActive = linksStatus[subitem.href.split('#')[1]]
                        return (
                          <li key={ii}>
                            <Link
                              to={subitem.href}
                              className={
                                'no-underline block my-2 py-1 text-black font-medium hover:text-primary ' +
                                (isActive ? 'text-primary' : '')
                              }
                              {
                                // attach custom event
                                ...(isCurrentRoute(subitem)
                                  ? { onClick: onLinkClick }
                                  : undefined)
                              }
                            >
                              {subitem.children}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </>
              )}
            </OpenClose>
          </li>
        )
      })}
    </ul>
  )
}

export default withRouter(ToggleMenu)
