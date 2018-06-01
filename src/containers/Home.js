import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'react-emotion'
//
import logoImg from '../reactbkk-logo.png'

export default withSiteData(() => (
  <div>
    <HeadingSection />
    <CTA
      title="Call for Speakers"
      href="https://www.facebook.com/reactbkk/photos/a.161749477831615.1073741828.161742341165662/161749411164955/?type=3"
    >
      We encourage everyone to share your knowledge with the community! First-time speakers are
      welcome; you don’t have to be an expert. People outside Bangkok are also welcome; we can
      provide travel and accomodation support. If you have something cool to share, please submit a
      proposal by May 4th, 2018.
    </CTA>
    <CTA title="Recommend a Speaker" disabled>
      Know someone who’s got a story to tell? Recommend them to us! More info soon!
    </CTA>
    <CTA title="Call for Staffs" disabled>
      You can also contribute to our event by volunteering to become an event staff. More info soon!
    </CTA>
    <SpeakersSection />
    <CommunitySection />
  </div>
))

// region HeadingSection
const HeadingSection = () => (
  <h1 css={tw('text-center md:flex items-center justify-center')}>
    <img css={{ flex: 'none', maxWidth: '10rem' }} src={logoImg} alt="" />
    <div css={tw('md:text-left md:pl-8')}>
      <h1 css={tw('text-3xl md:text-4xl tracking-wide text-react-blue font-semibold')}>
        React Bangkok 3.0.0
      </h1>
      <p css={tw('text-2xl md:text-3xl font-normal tracking-wide')}>June 24th, EnCo</p>
    </div>
  </h1>
)
// endregion

// region CTA
const CTA = ({
  title, href, disabled, children,
}) => (
  <section css={tw('text-center md:flex items-center md:min-h-16 md:text-xl mx-auto max-w-xl')}>
    <a
      href={href || `javascript${':'}`}
      css={{
        ...tw('bg-react-blue text-white p-3 inline-block md:w-64 font-bold flex-none'),
        opacity: disabled ? 0.25 : 1,
      }}
    >
      {title}
    </a>
    <p css={tw('md:pl-8 md:text-left leading-normal')}>{children}</p>
  </section>
)

// endregion
// region SpeakersSection
const SpeakersSection = () => (
  <ContentSection>
    <SectionHeader>Speakers</SectionHeader>
    <p style={{ textAlign: 'center' }}>TBA</p>
  </ContentSection>
)
// endregion
// region CommunitySection
const FACEBOOK_GROUP_URL = 'https://www.facebook.com/groups/react.th/'
const CommunitySection = () => (
  <ContentSection>
    <SectionHeader>Community</SectionHeader>
    <p style={{ textAlign: 'center' }}>
      Stay connected. Join our <a href={FACEBOOK_GROUP_URL}>Facebook Group</a>.
    </p>
  </ContentSection>
)
// endregion

const SectionHeader = styled.h2(tw('text-react-blue text-5xl font-bold text-center'))
const ContentSection = styled.section(tw('mt-8 pt-4'))
