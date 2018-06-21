import React from 'react'
import { SpeakersSectionMobile } from './SpeakersSectionMobile'
import { SpeakersSectionDesktop } from './SpeakersSectionDesktop'

export class SpeakersSection extends React.PureComponent {
  state = { mobile: true }
  checkViewport = () => {
    const mobile = window.innerWidth < 768
    if (mobile !== this.state.mobile) {
      this.setState({ mobile })
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
    return this.state.mobile ? <SpeakersSectionMobile /> : <SpeakersSectionDesktop />
  }
}
