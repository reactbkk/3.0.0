import React from 'react'
import styled from 'react-emotion'
import { Helmet } from 'react-helmet'

import { DynamicContent } from './DynamicContent'
import { Interaction } from './Interaction'
import { ActionButton } from './ActionButton'
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
import { SponsorsSectionContent } from './SponsorsSectionContent'

/* eslint no-script-url: off */

export function HomePage () {
  return (
    <div css={{ marginBottom: beat(1) }}>
      <Helmet>
        <title>React Bangkok 3.0.0</title>
      </Helmet>
      <HeadingSection />
      <CTASection />
      <DescriptionSection />
      <TicketsSection />
      <SpeakersSection />
      <SponsorsSection />
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

function CTASection () {
  return <BelowHeadingSection>{renderCheckInButton()}</BelowHeadingSection>

  function renderCheckInButton () {
    return (
      <DynamicContent>
        {(dialogElement, setDialogElement) => (
          <React.Fragment>
            <Interaction
              action={async () => {
                const promise = import(/* webpackChunkName: "checkin", webpackPrefetch: true */ '../checkin')
                const checkin = await promise
                setDialogElement(
                  checkin.renderDialog({
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
                  href="javascript://checkin"
                  onClick={onClick}
                >
                  {running ? 'Loading…' : interactive ? 'Check in' : '(Loading page)'}
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
          <ActionButton primary href="https://www.eventpop.me/e/3607-react-bangkok-3-0-0">
            Tickets on Event Pop
          </ActionButton>
        </p>
      </TypographicContext>
    </ContentSection>
  )
}

function SpeakersSection () {
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
      <div css={{ textAlign: 'center', marginTop: beat(1) }}>
        <ActionButton href="https://www.facebook.com/pg/reactbkk/photos/?tab=album&album_id=172683636738199">
          Speakers introduction
        </ActionButton>
      </div>
    </ContentSection>
  )
}

function SponsorsSection () {
  return (
    <ContentSection>
      <SectionHeader>Sponsors</SectionHeader>
      <SponsorsSectionContent />
      <section css={{ marginTop: beat(1) }}>
        <TypographicContext>
          <p>
            <strong>Interested in sponsoring our future events?</strong>
          </p>
          <p>
            <ActionButton href="https://airtable.com/shrHLwwtY80z3LvuR">Get in touch</ActionButton>
          </p>
        </TypographicContext>
      </section>
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

const BelowHeadingSection = styled.section({
  marginTop: beat(1),
  textAlign: 'center',
})

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

// const SectionSubheader = styled.h3({
//   color: Colors.reactBlue,
//   fontSize: fontSize(4),
//   fontWeight: 600,
//   fontFamily: Fonts.display,
//   margin: `${beat(1)} 0`,
//   paddingTop: beat(1),
// })
