import React from 'react'
import styled from 'react-emotion'
import { Helmet } from 'react-helmet'

import logoImg from '../reactbkk-logo.png'
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
} from '../design'

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
        [MediaQueries.md]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <img css={{ flex: 'none', maxWidth: beat(4) }} src={logoImg} alt="" />
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
    <p css={{ textAlign: 'center' }}>
      กลับมาอีกครั้งกับงาน Conference ประจำปี<br />
      ของโปรแกรมเมอร์สาย React ทุกคน<br />
      กับงาน “React Bangkok 3.0.0”<br />
      ที่ในปีนี้จะกลับมาอย่างยิ่งใหญ่กว่าเดิม
    </p>
  )
}

// region SpeakersSection
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
      <SectionSubheader>Get free tickets</SectionSubheader>
      <TypographicContext>
        <p>
          Win a free ticket by contributing to open-source community!
          <br />
          Details will be available soon!
        </p>
        <p>
          <ActionButton href="javascript:alert('Coming soon!')">Information</ActionButton>
        </p>
        <p>{renderRedeemTicketButton()}</p>
      </TypographicContext>
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
  return (
    <ContentSection>
      <SectionHeader>Speakers</SectionHeader>
      <p>TBA</p>
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
})
const SectionSubheader = styled.h3({
  color: Colors.reactBlue,
  fontSize: fontSize(4),
  fontWeight: 600,
  marginTop: beat(2),
  fontFamily: Fonts.display,
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
