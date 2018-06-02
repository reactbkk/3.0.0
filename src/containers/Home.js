import React from 'react'
import styled from 'react-emotion'
import logoImg from '../reactbkk-logo.png'

/* global tw */

export default function HomePage () {
  return (
    <div>
      <HeadingSection />
      <p css={tw('text-center font-body text-xl leading-normal tracking-wide')}>
        กลับมาอีกครั้งกับงาน Conference ประจำปี<br />
        ของโปรแกรมเมอร์สาย React ทุกคน<br />
        กับงาน “React Bangkok 3.0.0”<br />
        ที่ในปีนี้จะกลับมาอย่างยิ่งใหญ่กว่าเดิม
      </p>
      <TicketsSection />
      <SpeakersSection />
      <CommunitySection />
    </div>
  )
}

// region HeadingSection
const HeadingSection = () => (
  <h1 css={tw('text-center md:flex items-center justify-center')}>
    <img css={{ flex: 'none', maxWidth: '10rem' }} src={logoImg} alt="" />
    <div css={tw('md:text-left md:pl-8')}>
      <h1 css={tw('text-3xl md:text-4xl tracking-wide text-react-blue font-semibold')}>
        React Bangkok 3.0.0
      </h1>
      <p css={tw('text-2xl md:text-3xl font-normal tracking-wide')}>
        June 24th, Synergy Hall, EnCo
      </p>
    </div>
  </h1>
)
// endregion

// region SpeakersSection
const TicketsSection = () => (
  <ContentSection>
    <SectionHeader>Tickets</SectionHeader>
    <p css={tw('text-xl leading-tight')}>
      Tickets will be available on <strong>June 11th, 2018</strong> at <strong>18:00</strong>
    </p>
    <p>
      <ActionButton href="https://www.eventpop.me/e/3607-react-bangkok-3-0-0">
        Tickets on Event Pop
      </ActionButton>
    </p>

    <SectionSubheader>Get free tickets</SectionSubheader>
    <p css={tw('leading-normal')}>
      Win a free ticket by contributing to open-source community!
      <br />
      Details will be available soon!
    </p>
  </ContentSection>
)
// endregion

// region SpeakersSection
const SpeakersSection = () => (
  <ContentSection>
    <SectionHeader>Speakers</SectionHeader>
    <p>TBA</p>
  </ContentSection>
)
// endregion

// region CommunitySection
const FACEBOOK_GROUP_URL = 'https://www.facebook.com/groups/react.th/'
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/reactbkk'
const CommunitySection = () => (
  <ContentSection>
    <SectionHeader>Community</SectionHeader>
    <p css={tw('text-center leading-normal')}>
      Stay connected. Join our <a href={FACEBOOK_GROUP_URL}>Facebook Group</a>. Like our{' '}
      <a href={FACEBOOK_PAGE_URL}>Facebook Page</a>. Follow{' '}
      <a href="https://twitter.com/reactbkk">@reactbkk</a> on Twitter.
    </p>
  </ContentSection>
)
// endregion

const SectionHeader = styled.h2(tw('text-react-blue text-5xl font-bold'))
const SectionSubheader = styled.h3(tw('text-react-blue text-3xl font-bold mt-6 pt-6'))
const ContentSection = styled.section(tw('mt-8 pt-4 text-center'))

function ActionButton ({ href, disabled, children }) {
  return (
    <a
      href={href || `javascript${':'}`}
      css={{
        ...tw('bg-react-blue text-white p-3 inline-block md:w-64 font-bold flex-none'),
        opacity: disabled ? 0.25 : 1,
      }}
    >
      {children}
    </a>
  )
}
