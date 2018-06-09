import React from 'react'
import { Helmet } from 'react-helmet'
import { beat, fontSize } from '../design'

import HeaderSection from './HeaderSection'
import TicketsSection from './TicketsSection'
import SpeakersSection from './SpeakersSection'
import SponsorsSection from './SponsorsSection'

const SECTIONS = [
  HeaderSection,
  TicketsSection,
  SpeakersSection,
  SponsorsSection,
]

export class HomePage extends React.Component {
  renderSocial = () => (
    <div css={{
      position: 'absolute',
      right: beat(1),
      bottom: beat(1),
      fontSize: fontSize(-5),
    }}>
      T O D O : S O C I A L
    </div>
  )

  render () {
    return (
      <div css={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      }}>
        <Helmet>
          <title>React Bangkok 3.0.0</title>
        </Helmet>
        <div css={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}>
          {SECTIONS.map(Component => <Component key={Component} />)}
        </div>
        {this.renderSocial()}
      </div>
    )
  }
}
