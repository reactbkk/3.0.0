import React from 'react'
import styled from 'react-emotion'
import { Helmet } from 'react-helmet'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import MediumIcon from 'react-icons/lib/fa/medium'
import WebsiteIcon from 'react-icons/lib/fa/chain'
import _ from 'lodash'

import { DynamicContent } from './DynamicContent'
import { Interaction } from './Interaction'
import {
  Fonts,
  fontSize,
  Colors,
  beat,
  MediaQueries,
  Tracking,
  TypographicContext,
  LOGOMARK,
} from '../design'
import { SPEAKERS } from './SpeakersData'

/* eslint no-script-url: off */

export function HomePage () {
  return (
    <div>
      <Helmet>
        <title>React Bangkok 3.0.0</title>
      </Helmet>
      <HeadingSection />
      <DescriptionSection />
      <TicketsSection />
      <SpeakersSection />
      <CommunitySection />
    </div>
  )
}

function HeadingSection () {
  return (
    <header
      css={{
        textAlign: 'center',
        marginTop: beat(1),
        fontFamily: Fonts.display,
        [MediaQueries.md]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <img css={{ flex: 'none', maxWidth: beat(4) }} src={LOGOMARK} alt="" />
      <div
        css={{
          [MediaQueries.md]: {
            textAlign: 'left',
            paddingLeft: beat(1),
          },
        }}
      >
        <h1
          css={{
            fontSize: fontSize(7),
            letterSpacing: Tracking.wide,
            color: Colors.reactBlue,
            fontWeight: 600,
          }}
        >
          React Bangkok 3.0.0
        </h1>
        <p
          css={{
            fontSize: fontSize(3),
            letterSpacing: Tracking.wide,
            fontWeight: 400,
          }}
        >
          June 24th, Synergy Hall, EnCo
        </p>
      </div>
    </header>
  )
}

function DescriptionSection () {
  return (
    <p css={{ textAlign: 'center' }} lang="th">
      กลับมาอีกครั้งกับงาน Conference ประจำปี<br />
      ของโปรแกรมเมอร์สาย React ทุกคน<br />
      กับงาน “React Bangkok 3.0.0”<br />
      ที่ในปีนี้จะกลับมาอย่างยิ่งใหญ่กว่าเดิม
    </p>
  )
}

function TicketsSection () {
  return (
    <ContentSection>
      <SectionHeader>Tickets</SectionHeader>
      <TypographicContext>
        <p>
          Tickets will be available on <strong>June 11th, 2018</strong> at <strong>18:00</strong>
        </p>
        <p>
          <ActionButton primary href="https://www.eventpop.me/e/3607-react-bangkok-3-0-0">
            Tickets on Event Pop
          </ActionButton>
        </p>
      </TypographicContext>
      <section id="free-tickets">
        <SectionSubheader>Get free tickets</SectionSubheader>
        <TypographicContext>
          <p>
            Win a free ticket by contributing to open-source community!
            <br />
            Details will be available soon!
          </p>
          <p>
            <ActionButton href="https://www.facebook.com/reactbkk/photos/a.161749477831615.1073741828.161742341165662/172068550133041/?type=3">
              Information
            </ActionButton>
          </p>
          <p>{renderRedeemTicketButton()}</p>
        </TypographicContext>
      </section>
    </ContentSection>
  )

  function renderRedeemTicketButton () {
    return (
      <DynamicContent>
        {(dialogElement, setDialogElement) => (
          <React.Fragment>
            <Interaction
              action={async () => {
                const promise = import(/* webpackChunkName: "redeem", webpackPrefetch: true */ '../redeem')
                const redeem = await promise
                setDialogElement(
                  redeem.renderDialog({
                    onClose () {
                      setDialogElement(null)
                    },
                  })
                )
              }}
            >
              {({ interactive, running, onClick }) => (
                <ActionButton
                  disabled={!interactive || running}
                  href="javascript://redeem"
                  onClick={onClick}
                >
                  {running ? 'Loading…' : interactive ? 'Redeem ticket' : '(Loading page)'}
                </ActionButton>
              )}
            </Interaction>
            {dialogElement}
          </React.Fragment>
        )}
      </DynamicContent>
    )
  }
}

function SpeakersSection () {
  const getIcon = type => {
    switch (type) {
      case 'facebook':
        return FacebookIcon
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedinIcon
      case 'medium':
        return MediumIcon
      default:
        return WebsiteIcon
    }
  }
  return (
    <ContentSection>
      <SectionHeader>Speakers</SectionHeader>
      <div css={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
        <ul css={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {SPEAKERS.map((speaker, i) => (
            <li key={i} css={{ marginTop: beat(1) }}>
              <strong>{speaker.name}</strong>
              <br />
              {speaker.from}
            </li>
          ))}
        </ul>
      </div>
    </ContentSection>
  )
}

function CommunitySection () {
  const FACEBOOK_GROUP_URL = 'https://www.facebook.com/groups/react.th/'
  const FACEBOOK_PAGE_URL = 'https://www.facebook.com/reactbkk'
  return (
    <ContentSection>
      <SectionHeader>Community</SectionHeader>
      <TypographicContext>
        <p>
          Stay connected. Join our <a href={FACEBOOK_GROUP_URL}>Facebook Group</a>.
          <br />
          Like our <a href={FACEBOOK_PAGE_URL}>Facebook Page</a>. Follow{' '}
          <a href="https://twitter.com/reactbkk">@reactbkk</a> on Twitter.
        </p>
      </TypographicContext>
    </ContentSection>
  )
}

const ContentSection = styled.section({
  marginTop: beat(3),
  textAlign: 'center',
})
const SectionHeader = styled.h2({
  color: Colors.reactBlue,
  fontSize: fontSize(7),
  fontWeight: 600,
  fontFamily: Fonts.display,
  margin: `${beat(1)} 0`,
})
const SectionSubheader = styled.h3({
  color: Colors.reactBlue,
  fontSize: fontSize(4),
  fontWeight: 600,
  fontFamily: Fonts.display,
  margin: `${beat(1)} 0`,
  paddingTop: beat(1),
})

function ActionButton ({
  href, disabled, primary, children, onClick,
}) {
  return (
    <a
      href={href || `javascript${':'}`}
      onClick={onClick}
      css={{
        padding: beat(0.5),
        display: 'inline-block',
        border: `1px solid ${primary ? Colors.reactBlue : Colors.grey700}`,
        background: primary ? Colors.reactBlue : Colors.grey800,
        color: primary ? Colors.white : Colors.reactBlue,
        fontWeight: primary ? 600 : 400,
        opacity: disabled ? 0.25 : 1,
        [MediaQueries.md]: {
          width: beat(10),
        },
      }}
    >
      {children}
    </a>
  )
}
