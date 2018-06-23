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
import { SponsorsSection } from './SponsorsSection'
import { ActionButton } from './ActionButton'
import { withViewType, DESKTOP } from './withViewType'

const enhance = withViewType

const MAP_LINK = "https://www.google.co.th/maps/place/Energy+Complex+Company+Limited./@13.8193932,100.5550525,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29c593b6914c7:0x686cce3b970b6f75!8m2!3d13.8193932!4d100.5572412"

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
    <ActionButton href={MAP_LINK} target="_blank" cssExtension={{
      width: beat(1.5),
      margin: `${beat(0.25)} 0`,
      fontSize: fontSize(-5),
      '&:hover': {
        color: Colors.darkest,
        backgroundColor: Colors.brightest,
        fontWeight: 600,
      },
    }}>
      <div css={{ padding: `${beat(0.5)} 0`, borderBottom: `solid 1px ${Colors.brightest}` }}>
        June<br />24
      </div>
      <div css={{ padding: `${beat(0.5)} 0` }}>
        @<br />EnCo
      </div>
    </ActionButton>
  )

  renderSideBar = () => (
    <div css={{
      position: 'fixed',
      top: beat(2),
      right: beat(1),
      bottom: beat(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
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
        <HeaderSection innerWidth={this.props.innerWidth} viewType={this.props.viewType} />
        <InfoSection />
        <SpeakersSection />
        <ScheduleSection viewType={this.props.viewType} />
        <SponsorsSection />
        {this.props.viewType === DESKTOP && this.renderSideBar()}
      </div>
    )
  }
})
