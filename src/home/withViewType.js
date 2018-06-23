import React from 'react'

export const MOBILE = 'mobile'
export const TABLET = 'tablet'
export const DESKTOP = 'desktop'

export function withViewType (BaseComponent) {
  return class Container extends React.PureComponent {
    state = { viewType: MOBILE, innerWidth: 0 }

    checkViewport = () => {
      const innerWidth = window.innerWidth
      if (innerWidth < 768) {
        this.setState({ widthSize: MOBILE, innerWidth })
      } else if (innerWidth <= 1024) {
        this.setState({ widthSize: TABLET, innerWidth })
      } else {
        this.setState({ widthSize: DESKTOP, innerWidth })
      }
    }

    componentDidMount () {
      this.timeout = setTimeout(this.checkViewport)
      window.addEventListener('resize', this.checkViewport)
    }

    componentWillUnmount () {
      clearTimeout(this.timeout)
      window.removeEventListener('resize', this.checkViewport)
    }

    render () {
      return <BaseComponent viewType={this.state.viewType} innerWidth={this.state.innerWidth} />
    }
  }
}
