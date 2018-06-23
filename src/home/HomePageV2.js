import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import GitHubIcon from 'react-icons/lib/fa/github'

import { beat, Colors, fontSize, Tracking } from '../design'

import { HeaderSection } from './HeaderSection'
import { InfoSection } from './InfoSection'
import { ScheduleSection } from './ScheduleSection'
import { SpeakersSection } from './SpeakersSection'
import { VenueSection } from './VenueSection'
import { SponsorsSection } from './SponsorsSection'
import { withViewType, DESKTOP } from './withViewType'

const enhance = withViewType

export const HomePage = enhance(class HomePage extends React.Component {
  static propTypes = {
    innerWidth: PropTypes.number.isRequired,
    viewType: PropTypes.string.isRequired,
  }

  renderSocial = () => {
    const renderSocialIcon = (title, icon, href) => (
      <a css={{ display: 'block' }} title={title} href={href}>
        {icon}
      </a>
    )

    return (
      <div
        css={{
          fontSize: fontSize(-5),
          '&>*': {
            marginTop: beat(0.25),
          },
        }}
      >
        {renderSocialIcon('Facebook', <FacebookIcon />, 'https://www.facebook.com/reactbkk')}
        {renderSocialIcon('Twitter', <TwitterIcon />, 'https://twitter.com/reactbkk')}
        {renderSocialIcon('GitHub', <GitHubIcon />, 'https://github.com/reactbkk/3.0.0')}
      </div>
    )
  }

  renderLine = () => (
    <div css={{
      width: 1,
      margin: `${beat(0.75)} 0`,
      flex: '1 1 auto',
      background: Colors.brightest,
    }} />
  )

  renderBriefInfo = () => (
    <div css={{
      width: beat(1.5),
      margin: `${beat(0.25)} 0`,
      letterSpacing: Tracking.wide,
      fontSize: fontSize(-5),
      textAlign: 'center',
      border: `solid 1px ${Colors.brightest}`,
      cursor: 'pointer',
    }}>
      <div css={{ padding: `${beat(0.5)} 0`, borderBottom: `solid 1px ${Colors.brightest}` }}>
        June<br />24
      </div>
      <div css={{ padding: `${beat(0.5)} 0` }}>
        @<br />EnCo
      </div>
    </div>
  )

  renderSideBar = () => (
    <div css={{
      position: 'fixed',
      top: beat(1),
      right: beat(1),
      bottom: beat(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      x
      {this.renderLine()}
      {this.renderBriefInfo()}
      {this.renderLine()}
      {this.renderSocial()}
    </div>
  )

  render () {
    console.log(this.props.viewType)
    return (
      <div css={{
        position: 'relative',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}>
        <Helmet>
          <title>React Bangkok 3.0.0</title>
        </Helmet>
        <HeaderSection innerWidth={this.props.innerWidth} />
        <InfoSection />
        <SpeakersSection />
        <ScheduleSection viewType={this.props.viewType} />
        <VenueSection />
        <SponsorsSection />
        {this.props.viewType === DESKTOP && this.renderSideBar()}
      </div>
    )
  }
})
