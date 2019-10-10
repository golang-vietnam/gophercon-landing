import React, { Component } from 'react'
import { css } from 'linaria'
import Header from '@/pages/home/Header'

class AutoHeader extends Component {
  state = { visible: false }

  componentDidMount() {
    const observer = new IntersectionObserver(this.onChange, {
      root: null,
      threshold: 0,
    })
    observer.observe(document.getElementById('hero'))
  }

  componentDidCatch(error, errorInfo) {
    console.warn(errorInfo)
  }

  onChange = ([entry]) => {
    this.setState({ visible: entry.intersectionRatio === 0 })
  }

  render() {
    const { visible } = this.state

    return (
      <div
        className={[
          'fixed z-30 top-0 left-0 w-screen shadow bg-primary',
          css`
            height: 64px;
            opacity: 0;
            transform: translateY(-100%);
            @screen lg {
              height: 140px;
            }
          `,
          visible &&
            css`
              opacity: 1;
              transition: transform 250ms ease-in-out, opacity 100ms ease-out;
              transform: translateY(0);
            `,
        ]}
      >
        <Header
          className={[
            'h-full',
            css`
              --mobile-menu-top: 64px;
            `,
          ]}
        />
      </div>
    )
  }
}

export default AutoHeader
