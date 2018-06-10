import React from 'react'
import { Helmet } from 'react-helmet'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import GitHubIcon from 'react-icons/lib/fa/github'

import { beat, fontSize } from '../design'

import { HeaderSection } from './HeaderSection'
import { TicketsSection } from './TicketsSection'
import { SpeakersSection } from './SpeakersSection'
import { SponsorsSection } from './SponsorsSection'

const SECTIONS = [HeaderSection, TicketsSection, SpeakersSection, SponsorsSection]

export class HomePage extends React.Component {
  renderSocial = () => {
    const renderSocialIcon = (title, icon, href) => (
      <a css={{ display: 'block' }} title={title} href={href}>
        {icon}
      </a>
    )

    return (
      <div
        css={{
          position: 'fixed',
          right: beat(1),
          bottom: beat(1),
          fontSize: fontSize(-5),
        }}
      >
        {renderSocialIcon('Facebook', <FacebookIcon />, 'https://www.facebook.com/reactbkk')}
        {renderSocialIcon('Twitter', <TwitterIcon />, 'https://twitter.com/reactbkk')}
        {renderSocialIcon('GitHub', <GitHubIcon />, 'https://github.com/reactbkk/3.0.0')}
      </div>
    )
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>React Bangkok 3.0.0</title>
        </Helmet>
        <div>{SECTIONS.map(Component => <Component key={Component} />)}</div>
        {this.renderSocial()}
      </div>
    )
  }
}
