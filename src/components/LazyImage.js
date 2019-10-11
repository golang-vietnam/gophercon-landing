import React, { Component } from 'react'
function createImg(src, onLoad = () => {}) {
  const img = new Image()
  img.onload = onLoad
  img.src = src
  return img
}
function isElementInViewport(el) {
  if (!el || typeof window === 'undefined') {
    return false
  }
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
class LazyImage extends Component {
  static defaultProps = {
    className: '',
    placeholderClassName: '',
    placeholderStyle: {
      // avoid bluring out of img frame
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    },
    srcSet: undefined,
  }
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      visible: false,
    }
  }
  componentDidMount() {
    // small delay to ensures all variables are correct after page scrolled to top
    window.setTimeout(() => {
      // load img if IntersectionObserver is not supported OR element is already in viewport
      if (
        typeof window === 'undefined' ||
        !('IntersectionObserver' in window) ||
        isElementInViewport(this.target)
      ) {
        this.loadImg()
        return
      }
      // start observer
      this.observer = new IntersectionObserver(this.onChange, {
        root: null,
        rootMargin: '40px 0px 0px 0px', // TODO: make configurable
        threshold: [0],
      })
      this.observer.observe(this.target)
    }, 100)
  }
  componentWillUnmount() {
    if (this.observer) this.observer.disconnect()
    if (this.img) this.img.remove()
  }
  loadImg = () => {
    // set visible
    this.setState({ visible: true })
    // create img element
    this.img = createImg(this.props.src, this.onLoad)
  }
  onChange = ([entry]) => {
    if (entry.isIntersecting) {
      // init & load img src
      this.loadImg()
      // stop observing and marks visible
      this.observer.disconnect()
    }
  }
  onLoad = () => {
    this.setState({ loaded: true })
  }
  getImgSrc = loaded => {
    const { src, placeholder } = this.props
    return loaded ? src : placeholder
  }
  getSrcSet = loaded => {
    if (!loaded) return undefined
    const { srcSet } = this.props
    return srcSet && srcSet.map(set => `${set.src} ${set.width}w`).join(',')
  }
  getStyle = loaded => {
    const { style, placeholderStyle } = this.props
    return loaded ? style : { ...style, ...placeholderStyle }
  }
  getClassName = loaded => {
    const { className, placeholderClassName } = this.props
    return loaded ? className : className + ' ' + placeholderClassName
  }
  getImgProps = () => {
    const { loaded } = this.state
    const {
      src,
      srcSet,
      placeholder,
      className,
      placeholderClassName,
      style,
      placeholderStyle,
      ...rest
    } = this.props
    if (!this.state.visible) {
      return {
        src: placeholder,
        style: this.getStyle(false),
        className: this.getClassName(false),
        ...rest,
      }
    }
    return {
      src: this.getImgSrc(loaded),
      srcSet: this.getSrcSet(loaded),
      style: this.getStyle(loaded),
      className: this.getClassName(loaded),
      ...rest,
    }
  }

  setRef = node => {
    this.target = node
  }

  render() {
    return <img ref={this.setRef} {...this.getImgProps()} />
  }
}
const LazyImage2 = ({
  placeholder,
  preSrc,
  preview,
  trace,
  clipPath = true,
  ...rest
}) => {
  // `preSrc` is default key provided by lqip
  // `preview` is default key provided by sqip
  // `trace` is default key provided by image-trace-loader
  return (
    <LazyImage
      placeholder={placeholder || preSrc || preview || trace}
      {...rest}
      {...(!clipPath
        ? { placeholderStyle: { clipPath: '', WebkitClipPath: '' } }
        : {})}
    />
  )
}

export default LazyImage2
